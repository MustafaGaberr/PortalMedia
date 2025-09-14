import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Loader } from 'lucide-react';

declare global {
  interface Window {
    paypal: any;
  }
}

interface PaymentProps {
  amount: string;
  description?: string;
  onSuccess?: (details: any) => void;
  onError?: (error: any) => void;
  onCancel?: () => void;
  disabled?: boolean;
}

interface PaymentStatus {
  type: 'idle' | 'loading' | 'processing' | 'success' | 'error';
  message?: string;
  details?: any;
}

const Payment: React.FC<PaymentProps> = ({
  amount,
  description = '',
  onSuccess,
  onError,
  onCancel,
  disabled = false
}) => {
  const paypalRef = useRef<HTMLDivElement>(null);
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>({ type: 'idle' });
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);

  // Load PayPal SDK
  useEffect(() => {
    const loadPayPalScript = () => {
      // Remove existing PayPal scripts
      const existingScripts = document.querySelectorAll('script[src*="paypal.com/sdk/js"]');
      existingScripts.forEach(script => script.remove());

      // Clear existing PayPal instance
      if (window.paypal) {
        delete window.paypal;
      }

      const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
      
      if (!clientId) {
        setPaymentStatus({ 
          type: 'error', 
          message: 'PayPal configuration error. Please contact support.' 
        });
        return;
      }

      setPaymentStatus({ type: 'loading', message: 'Loading PayPal...' });

      const script = document.createElement('script');
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD&intent=capture&vault=false&disable-funding=paylater,venmo&components=buttons`;
      script.async = true;
      
      script.onload = () => {
        if (window.paypal) {
          console.log('PayPal SDK loaded successfully (Live Mode Only)');
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
  }, []);

  // Render PayPal buttons
  useEffect(() => {
    if (!isSDKLoaded || !paypalRef.current || !amount || parseFloat(amount) <= 0 || disabled) {
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
            currency_code: 'USD'
          },
          description: description || 'Portal Media Services'
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
          message: `Payment completed successfully! Thank you, ${payerName}!`,
          details 
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
          color: 'blue',
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
  }, [isSDKLoaded, amount, description, disabled, onSuccess, onError, onCancel]);

  if (!amount || parseFloat(amount) <= 0) {
    return (
      <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-yellow-800 text-center">Please enter a valid amount to proceed with payment.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Payment Header */}
      <div className="text-center pb-4 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Your Payment</h3>
        <p className="text-gray-600">Secure payment powered by PayPal</p>
      </div>

      {/* Amount Display */}
      <div className="text-center p-4 bg-gray-50 rounded-lg">
        <div className="text-2xl font-bold text-gray-900">
          ${parseFloat(amount).toFixed(2)} USD
        </div>
        {description && (
          <div className="text-sm text-gray-600 mt-1">{description}</div>
        )}
      </div>

      {/* Payment Status */}
      {paymentStatus.type !== 'idle' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg flex items-center space-x-3 ${
            paymentStatus.type === 'success'
              ? 'bg-green-50 border border-green-200'
              : paymentStatus.type === 'error'
              ? 'bg-red-50 border border-red-200'
              : 'bg-blue-50 border border-blue-200'
          }`}
        >
          {paymentStatus.type === 'success' && <CheckCircle className="w-5 h-5 text-green-600" />}
          {paymentStatus.type === 'error' && <XCircle className="w-5 h-5 text-red-600" />}
          {(paymentStatus.type === 'loading' || paymentStatus.type === 'processing') && 
            <Loader className="w-5 h-5 animate-spin text-blue-600" />}
          
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
        className={`min-h-[60px] ${disabled ? 'opacity-50 pointer-events-none' : ''}`}
      />

      {/* Security Notice */}
      <div className="text-center text-xs text-gray-500">
        <p>🔒 Your payment is secured by PayPal's encryption technology</p>
      </div>
    </div>
  );
};

export default Payment;