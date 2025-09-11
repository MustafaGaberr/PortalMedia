import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Loader, CreditCard } from 'lucide-react';

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
  type: 'idle' | 'processing' | 'success' | 'error';
  message?: string;
  details?: any;
}

// Load PayPal SDK dynamically for LIVE mode
const loadPayPalSDK = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Remove any existing PayPal scripts first
    const existingScripts = document.querySelectorAll('script[src*="paypal.com/sdk/js"]');
    existingScripts.forEach(script => script.remove());
    
    // Clear any existing PayPal instance
    if (window.paypal) {
      delete window.paypal;
    }

    // Get client ID from environment variable (LIVE mode)
    const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
    
    if (!clientId) {
      reject(new Error('PayPal Client ID not configured'));
      return;
    }

    // Create script element for LIVE PayPal SDK with explicit live mode parameters
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD&intent=capture&vault=false&components=buttons,card-fields&disable-funding=paylater,venmo`;
    script.async = true;
    
    script.onload = () => {
      if (window.paypal) {
        console.log('PayPal SDK loaded successfully in LIVE mode');
        console.log('PayPal environment:', window.paypal);
        console.log('SDK URL used:', script.src);
        resolve();
      } else {
        reject(new Error('PayPal SDK failed to load'));
      }
    };
    
    script.onerror = () => {
      reject(new Error('Failed to load PayPal SDK'));
    };

    // Append to head
    document.head.appendChild(script);
  });
};

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
  const [isSDKReady, setIsSDKReady] = useState(false);

  useEffect(() => {
    // Load PayPal SDK
    const initializePayPal = async () => {
      try {
        await loadPayPalSDK();
        setIsSDKReady(true);
      } catch (error) {
        console.error('Failed to load PayPal SDK:', error);
        setPaymentStatus({ 
          type: 'error', 
          message: 'Failed to load PayPal. Please refresh the page.' 
        });
      }
    };
    
    initializePayPal();
  }, []);

  useEffect(() => {
    if (!isSDKReady || !paypalRef.current || !amount || disabled || parseFloat(amount) <= 0) {
      return;
    }

    // Clear any existing PayPal buttons
    paypalRef.current.innerHTML = '';
    setPaymentStatus({ type: 'idle' });

    const createOrder = async () => {
      try {
        setPaymentStatus({ type: 'processing', message: 'Creating order...' });
        
        const response = await fetch('/api/create-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: parseFloat(amount).toFixed(2),
            currency: 'USD',
            description: description || 'Portal Media Services',
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const orderData = await response.json();
        
        if (!orderData.id) {
          throw new Error('Invalid order response');
        }

        return orderData.id;
      } catch (error) {
        console.error('Create order error:', error);
        setPaymentStatus({ 
          type: 'error', 
          message: `Failed to create order: ${error instanceof Error ? error.message : 'Unknown error'}` 
        });
        throw error;
      }
    };

    const onApprove = async (data: any) => {
      try {
        setPaymentStatus({ type: 'processing', message: 'Processing payment...' });

        // Capture the payment through backend
        const response = await fetch(`/api/capture-order/${data.orderID}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const details = await response.json();
        
        // Extract payer name from the response
        const payerName = details.payer?.name?.given_name || 
                         details.payment_source?.paypal?.name?.given_name || 
                         details.payer?.name?.surname ||
                         'valued customer';
        
        setPaymentStatus({ 
          type: 'success', 
          message: `Payment successful! Thank you, ${payerName}!`,
          details 
        });

        if (onSuccess) {
          onSuccess(details);
        }
        
      } catch (error) {
        console.error('Payment capture error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Payment failed';
        setPaymentStatus({ type: 'error', message: errorMessage });
        
        if (onError) {
          onError(error);
        }
      }
    };

    const onPaymentError = (error: any) => {
      console.error('PayPal payment error:', error);
      const errorMessage = error?.message || 'Payment failed';
      setPaymentStatus({ type: 'error', message: errorMessage });
      
      if (onError) {
        onError(error);
      }
    };

    const onPaymentCancel = () => {
      setPaymentStatus({ type: 'idle', message: 'Payment cancelled' });
      
      if (onCancel) {
        onCancel();
      }
    };

    // Render PayPal Smart Buttons (includes both PayPal and Card options)
    console.log('Rendering PayPal buttons with Client ID:', import.meta.env.VITE_PAYPAL_CLIENT_ID?.substring(0, 10) + '...');
    console.log('PayPal SDK environment check:', window.paypal.version || 'Unknown');
    
    window.paypal
      .Buttons({
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
        },
        // Enable both PayPal and card funding sources
        fundingSource: undefined, // This allows both PayPal and card options
      })
      .render(paypalRef.current);

  }, [isSDKReady, amount, description, disabled, onSuccess, onError, onCancel]);

  if (!isSDKReady) {
    return (
      <div className="flex items-center justify-center p-8 bg-gray-50 rounded-lg">
        <Loader className="w-6 h-6 animate-spin text-blue-600" />
        <span className="ml-2 text-gray-600">Loading PayPal...</span>
      </div>
    );
  }

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
        <p className="text-gray-600">Choose your preferred payment method below</p>
      </div>

      {/* Payment Options Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">PP</span>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900">Pay with PayPal</h4>
              <p className="text-sm text-blue-700">Use your PayPal account</p>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <CreditCard className="w-8 h-8 text-green-600" />
            <div>
              <h4 className="font-semibold text-green-900">Pay with Card</h4>
              <p className="text-sm text-green-700">Visa, MasterCard, etc.</p>
            </div>
          </div>
        </div>
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
          {paymentStatus.type === 'processing' && <Loader className="w-5 h-5 animate-spin text-blue-600" />}
          
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

      {/* PayPal Smart Buttons Container */}
      <div 
        id="paypal-button-container"
        ref={paypalRef}
        className={`${disabled ? 'opacity-50 pointer-events-none' : ''}`}
      />

      {/* Amount Display */}
      <div className="text-center p-4 bg-gray-50 rounded-lg">
        <div className="text-lg font-semibold text-gray-900">
          Total: <span className="text-blue-600">${parseFloat(amount).toFixed(2)} USD</span>
        </div>
        {description && (
          <div className="text-sm text-gray-600 mt-1">{description}</div>
        )}
      </div>

      {/* Security Notice */}
      <div className="text-center text-xs text-gray-500">
        <p>🔒 Your payment is secured by PayPal's industry-leading encryption</p>
        <p className="font-semibold text-red-600">⚠️ LIVE MODE: This is a real transaction and will be processed immediately</p>
        <p className="text-blue-600">Client ID: {import.meta.env.VITE_PAYPAL_CLIENT_ID ? `${import.meta.env.VITE_PAYPAL_CLIENT_ID.substring(0, 8)}...` : 'Not configured'}</p>
      </div>
    </div>
  );
};

export default Payment;