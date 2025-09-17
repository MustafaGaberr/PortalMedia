import { useEffect, useRef, useCallback, useState } from 'react';

// Global PayPal management
let paypalSDKLoaded = false;
let paypalSDKLoading = false;
let paypalButtonsInstance: any = null;

// Suppress PayPal warnings and errors
const originalConsoleWarn = console.warn;
const originalConsoleError = console.error;

console.warn = (...args) => {
  if (args[0]?.includes?.('global_session_not_found') || 
      args[0]?.includes?.('geolocation') ||
      args[0]?.includes?.('permissions policy') ||
      args[0]?.includes?.('Potential permissions policy violation')) {
    return; // Suppress these specific warnings
  }
  originalConsoleWarn.apply(console, args);
};

console.error = (...args) => {
  if ((args[0]?.includes?.('404') && args[0]?.includes?.('paypalobjects.com')) ||
      (args[0]?.includes?.('GET') && args[0]?.includes?.('ar-EG')) ||
      (args[0]?.includes?.('400') && args[0]?.includes?.('paypal.com')) ||
      (args[0]?.includes?.('ERR_ABORTED') && args[0]?.includes?.('paypal.com'))) {
    return; // Suppress PayPal errors
  }
  originalConsoleError.apply(console, args);
};

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

    const loadSDK = (retryCount = 0) => {
      const script = document.createElement('script');
      
      // Use simpler URL on retry
      if (retryCount === 0) {
        script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD&intent=capture&enable-funding=card&disable-funding=credit,bancontact,blik,eps,giropay,ideal,mercadopago,mybank,p24,sepa,sofort,venmo`;
      } else {
        // Fallback to basic URL
        script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
      }
      
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        paypalSDKLoaded = true;
        paypalSDKLoading = false;
        setIsLoading(false);
        setIsReady(true);
        console.log('PayPal SDK loaded successfully');
      };
      
      script.onerror = () => {
        paypalSDKLoading = false;
        setIsLoading(false);
        console.error('Failed to load PayPal SDK');
        
        // Retry once after a delay with simpler URL
        if (retryCount === 0) {
          console.log('Retrying PayPal SDK load with simpler URL...');
          setTimeout(() => loadSDK(1), 2000);
        }
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
