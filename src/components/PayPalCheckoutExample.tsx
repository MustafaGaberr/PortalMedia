import React, { useState } from 'react';
import PayPalCheckout from './PayPalCheckout';

const PayPalCheckoutExample: React.FC = () => {
  const [amount, setAmount] = useState('10.00');
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const handlePaymentSuccess = (details: any) => {
    console.log('Payment successful!', details);
    setPaymentCompleted(true);
    
    // Here you can redirect to a thank-you page or show a success message
    // For example: window.location.href = '/thank-you';
  };

  const handlePaymentError = (error: any) => {
    console.error('Payment error:', error);
    // Handle error (show message to user, etc.)
  };

  const handlePaymentCancel = () => {
    console.log('Payment cancelled');
    // Handle cancellation (show message to user, etc.)
  };

  if (paymentCompleted) {
    return (
      <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h2>
        <p className="text-gray-700 mb-6">
          Thank you for your payment. A confirmation email has been sent to your registered email address.
        </p>
        <button 
          onClick={() => setPaymentCompleted(false)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Make Another Payment
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Complete Your Purchase</h1>
      
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
          Amount (USD)
        </label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0.01"
          step="0.01"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter amount"
        />
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Method</h2>
        <div className="border-2 border-blue-500 rounded-lg p-4">
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">PayPal</h3>
              <p className="text-sm text-gray-600">Pay securely with your PayPal account</p>
            </div>
          </div>
        </div>
      </div>

      <PayPalCheckout
        amount={amount}
        currency="USD"
        onSuccess={handlePaymentSuccess}
        onError={handlePaymentError}
        onCancel={handlePaymentCancel}
        className="mt-6"
      />
    </div>
  );
};

export default PayPalCheckoutExample;