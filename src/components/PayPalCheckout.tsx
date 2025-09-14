import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    paypal: any;
  }
}

interface PayPalCheckoutProps {
  amount: string;
  currency?: string;
  onSuccess?: (details: any) => void;
  onError?: (error: any) => void;
  onCancel?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const PayPalCheckout: React.FC<PayPalCheckoutProps> = ({
  amount,
  currency = 'USD',
  onSuccess,
  onError,
  onCancel,
  className = '',
  style
}) => {
  const paypalRef = useRef<HTMLDivElement>(null);
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<{ type: 'idle' | 'loading' | 'processing' | 'success' | 'error', message?: string }>({ type: 'idle' });

  // Load PayPal SDK
  useEffect(() => {
    if (!amount || parseFloat(amount) <= 0) return;

    const loadPayPalScript = () => {
      // Check if PayPal SDK is already loaded
      if (window.paypal) {
        setIsSDKLoaded(true);
        return;
      }

      // Remove existing PayPal scripts
      const existingScripts = document.querySelectorAll('script[src*="paypal.com/sdk/js"]');
      existingScripts.forEach(script => script.remove());

      // Use your live Client ID directly
      const clientId = 'AVxvJihkm9g5iQWUMlhBNCCu1rKxKL5dkM2VsOuPRBgnsMXM2du4UZks1AAxruY5D7yfjhpUYwtubhY8';

      setPaymentStatus({ type: 'loading', message: 'Loading PayPal...' });

      const script = document.createElement('script');
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=${currency}&intent=capture&vault=false&disable-funding=paylater,venmo&components=buttons`;
      script.async = true;
      
      script.onload = () => {
        if (window.paypal) {
          console.log('PayPal SDK loaded successfully (Live Mode)');
          setIsSDKLoaded(true);
          setPaymentStatus({ type: 'idle' });
        } else {
          setPaymentStatus({ 
            type: 'error', 
            message: 'Failed to initialize PayPal. Please refresh the page.' 
          });
        }
      };
      
      script.onerror = () => {
        setPaymentStatus({ 
          type: 'error', 
          message: 'Failed to load PayPal. Please check your internet connection.' 
        });
      };

      document.head.appendChild(script);
    };

    loadPayPalScript();
  }, [amount, currency]);

  // Render PayPal buttons
  useEffect(() => {
    if (!isSDKLoaded || !paypalRef.current || !amount || parseFloat(amount) <= 0) {
      return;
    }

    // Clear container
    paypalRef.current.innerHTML = '';

    const createOrder = (data: any, actions: any) => {
      setPaymentStatus({ type: 'processing', message: 'Creating order...' });
      
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: parseFloat(amount).toFixed(2),
            currency_code: currency
          }
        }],
        application_context: {
          brand_name: 'Portal Media',
          landing_page: 'NO_PREFERENCE',
          user_action: 'PAY_NOW'
        }
      });
    };

    const onApprove = (data: any, actions: any) => {
      setPaymentStatus({ type: 'processing', message: 'Processing payment...' });
      
      return actions.order.capture().then((details: any) => {
        // Extract payer name
        const payerName = details.payer?.name?.given_name || 'valued customer';
        
        setPaymentStatus({ 
          type: 'success', 
          message: `Payment completed successfully! Thank you, ${payerName}!`
        });
        
        if (onSuccess) {
          onSuccess(details);
        }
      }).catch((error: any) => {
        console.error('Payment capture error:', error);
        setPaymentStatus({ 
          type: 'error', 
          message: 'Payment failed. Please try again.' 
        });
        
        if (onError) {
          onError(error);
        }
      });
    };

    const onPaymentError = (error: any) => {
      console.error('PayPal error:', error);
      setPaymentStatus({ 
        type: 'error', 
        message: 'Payment error occurred. Please try again.' 
      });
      
      if (onError) {
        onError(error);
      }
    };

    const onPaymentCancel = () => {
      setPaymentStatus({ 
        type: 'idle', 
        message: 'Payment was cancelled.' 
      });
      
      if (onCancel) {
        onCancel();
      }
    };

    // Render PayPal buttons
    try {
      window.paypal.Buttons({
        createOrder,
        onApprove,
        onError: onPaymentError,
        onCancel: onPaymentCancel,
        style: {
          layout: 'vertical',
          color: 'gold',
          shape: 'rect',
          label: 'paypal',
          height: 50,
          tagline: false
        }
      }).render(paypalRef.current);
      
      console.log('PayPal buttons rendered successfully (Live Mode)');
    } catch (error) {
      console.error('Error rendering PayPal buttons:', error);
      setPaymentStatus({ 
        type: 'error', 
        message: 'Failed to load payment options. Please refresh the page.' 
      });
    }
  }, [isSDKLoaded, amount, currency, onSuccess, onError, onCancel]);

  if (!amount || parseFloat(amount) <= 0) {
    return (
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-yellow-800 text-center">Please enter a valid amount to proceed with payment.</p>
      </div>
    );
  }

  return (
    <div className={className} style={style}>
      {/* Payment Status */}
      {paymentStatus.type !== 'idle' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg flex items-center space-x-3 mb-4 ${
            paymentStatus.type === 'success'
              ? 'bg-green-50 border border-green-200'
              : paymentStatus.type === 'error'
              ? 'bg-red-50 border border-red-200'
              : 'bg-blue-50 border border-blue-200'
          }`}
        >
          <p className={`text-sm font-medium ${
            paymentStatus.type === 'success'
              ? 'text-green-800'
              : paymentStatus.type === 'error'
              ? 'text-red-800'
              : 'text-blue-800'
          }`}>
            {paymentStatus.message}
          </p>
        </motion.div>
      )}

      {/* PayPal Button Container */}
      <div 
        ref={paypalRef}
        className={`min-h-[60px] ${paymentStatus.type === 'loading' ? 'opacity-50' : ''}`}
      />

      {/* Security Notice */}
      <div className="text-center text-xs text-gray-500 mt-2">
        <p>🔒 Secure payment powered by PayPal</p>
      </div>
    </div>
  );
};

export default PayPalCheckout;