import { useEffect, useRef, useCallback, useState } from 'react';

// Global PayPal management
let paypalSDKLoaded = false;
let paypalSDKLoading = false;
let paypalButtonsInstance: any = null;

// Suppress PayPal warnings in development
if (process.env.NODE_ENV === 'development') {
  const originalConsoleWarn = console.warn;
  console.warn = (...args) => {
    if (args[0]?.includes?.('global_session_not_found')) {
      return; // Suppress this specific warning
    }
    originalConsoleWarn.apply(console, args);
  };
}

export const usePayPal = (clientId: string) => {
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load PayPal SDK
  useEffect(() => {
    if (paypalSDKLoaded || paypalSDKLoading) {
      if (window.paypal) {
        setIsReady(true);
      }
      return;
    }

    paypalSDKLoading = true;
    setIsLoading(true);

    const loadSDK = () => {
      const script = document.createElement('script');
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD&intent=capture&enable-funding=card&disable-funding=credit,bancontact,blik,eps,giropay,ideal,mercadopago,mybank,p24,sepa,sofort,venmo`;
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        paypalSDKLoaded = true;
        paypalSDKLoading = false;
        setIsLoading(false);
        setIsReady(true);
      };
      
      script.onerror = () => {
        paypalSDKLoading = false;
        setIsLoading(false);
        console.error('Failed to load PayPal SDK');
      };
      
      document.head.appendChild(script);
    };

    // Wait for document ready state
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadSDK);
    } else {
      setTimeout(loadSDK, 100);
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', loadSDK);
    };
  }, [clientId]);

  // Render PayPal buttons
  const renderButtons = useCallback((config: any) => {
    if (!window.paypal || !containerRef.current || paypalButtonsInstance) {
      return;
    }

    try {
      paypalButtonsInstance = window.paypal.Buttons(config);
      paypalButtonsInstance.render(containerRef.current);
    } catch (error) {
      console.error('PayPal render error:', error);
    }
  }, []);

  // Clean up buttons
  const cleanup = useCallback(() => {
    if (paypalButtonsInstance) {
      try {
        paypalButtonsInstance.close();
      } catch (error) {
        console.warn('Error closing PayPal buttons:', error);
      }
      paypalButtonsInstance = null;
    }
    
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanup();
    };
  }, [cleanup]);

  return {
    isReady,
    isLoading,
    containerRef,
    renderButtons,
    cleanup
  };
};
