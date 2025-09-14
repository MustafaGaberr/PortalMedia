import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Loader } from 'lucide-react';

declare global {
  interface Window {
    paypal: any;
  }
}

interface PayPalButtonProps {
  amount: string;
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

// Securely load PayPal SDK dynamically
const loadPayPalSDK = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if already loaded
    if (window.paypal) {
      resolve();
      return;
    }

    // Get client ID from environment variable (safe for frontend)
    const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
    
    if (!clientId) {
      reject(new Error('PayPal Client ID not configured'));
      return;
    }

    // Create script element
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD&intent=capture&vault=false&disable-funding=paylater,venmo`;
    script.async = true;
    
    script.onload = () => {
      if (window.paypal) {
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

const PayPalButton: React.FC<PayPalButtonProps> = ({
  amount,
  onSuccess,
  onError,
  onCancel,
  disabled = false
}) => {
  const paypalRef = useRef<HTMLDivElement>(null);
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>({ type: 'idle' });
  const [isSDKReady, setIsSDKReady] = useState(false);

  useEffect(() => {
    // Load PayPal SDK dynamically
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

        // Capture the payment through our backend
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
                         'valued customer';
        
        setPaymentStatus({ 
          type: 'success', 
          message: `Payment successful! Thank you, ${payerName}!`,
          details 
        });

        if (onSuccess) {
          onSuccess(details);
        }

        // Show success alert with payer name
        alert(`Payment successful! Thank you, ${payerName}!`);
        
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

    // Render PayPal button
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
        },
      })
      .render(paypalRef.current);

  }, [isSDKReady, amount, disabled, onSuccess, onError, onCancel]);

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
        <p className="text-yellow-800 text-center">Please enter a valid amount to proceed with PayPal payment.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
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

      {/* PayPal Button Container */}
      <div 
        ref={paypalRef}
        className={`${disabled ? 'opacity-50 pointer-events-none' : ''}`}
      />

      {/* Amount Display */}
      <div className="text-center text-sm text-gray-600">
        Amount: <span className="font-semibold">${parseFloat(amount).toFixed(2)} USD</span>
      </div>
    </div>
  );
};

export default PayPalButton;