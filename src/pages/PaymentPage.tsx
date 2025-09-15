import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, ArrowLeft, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

// PayPal SDK will be loaded dynamically
declare global {
  interface Window {
    paypal?: any;
  }
}

const PaymentPage: React.FC = () => {
  const [amount, setAmount] = useState('0.00');
  const [description, setDescription] = useState('Digital Marketing Services');
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');

  // PayPal Client ID
  const PAYPAL_CLIENT_ID = "AVxvJihkm9g5iQWUMlhBNCCu1rKxKL5dkM2VsOuPRBgnsMXM2du4UZks1AAxruY5D7yfjhpUYwtubhY8";

  // Load PayPal SDK
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Initialize PayPal when amount is valid
  useEffect(() => {
    if (parseFloat(amount) > 0 && window.paypal) {
      // Clear previous buttons
      const container = document.getElementById('paypal-button-container');
      if (container) {
        container.innerHTML = '';
      }

      // Create new PayPal buttons
      window.paypal.Buttons({
        createOrder: (_data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount,
                currency_code: 'USD'
              },
              description: description
            }]
          });
        },
        onApprove: (_data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            console.log('Payment completed:', details);
            setPaymentStatus('success');
          });
        },
        onError: (err: any) => {
          console.error('PayPal error:', err);
          setPaymentStatus('error');
        }
      }).render('#paypal-button-container');
    }
  }, [amount, description]);

  if (paymentStatus === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-lg p-12 text-center border max-w-2xl mx-4"
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Thank you! Your payment has been processed successfully.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5 mr-3 rtl:ml-3 rtl:mr-0" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Home Link */}
        <div className="mb-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Secure Payment
          </h1>
          <p className="text-xl text-gray-600">
            Secure Payment Processing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Details Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Details</h2>
            
            {/* Amount Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount (USD) *
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="0.00"
                />
              </div>
            </div>

            {/* Description Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Description
              </label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Digital Marketing Services"
              />
            </div>

            {/* Instructions */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600 mb-2">
                Please enter an amount to proceed with payment
              </p>
              <p className="text-sm text-gray-600">
                Both Credit Card and other payment methods are supported
              </p>
            </div>

            {/* PayPal Button Container */}
            {parseFloat(amount) > 0 && (
              <div className="mb-6">
                <div id="paypal-button-container" className="w-full"></div>
              </div>
            )}

            {/* Error Message */}
            {paymentStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm text-center">
                  Payment failed. Please try again.
                </p>
                <button
                  onClick={() => setPaymentStatus('idle')}
                  className="w-full mt-2 px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>

          {/* Security Information Cards */}
          <div className="space-y-6">
            {/* Secure Payment Features */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure Payment</h3>
              <div className="space-y-3">
                {[
                  'SSL Encrypted Transactions',
                  'PCI DSS Compliant',
                  '24/7 Support',
                  'Instant Confirmation'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 rtl:ml-3 rtl:mr-0 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 100% Secure Guarantee */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-blue-600 mr-3 rtl:ml-3 rtl:mr-0" />
                <h3 className="text-xl font-bold text-gray-900">100% Secure</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Your payment is processed securely through our industry-leading platform.
              </p>
              <div className="space-y-2">
                {[
                  'Credit/Debit Card Payment',
                  'Multiple Payment Options',
                  'SSL Encryption Protected'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-3 rtl:ml-3 rtl:mr-0 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;