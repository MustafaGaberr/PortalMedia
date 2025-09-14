import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Loader, CreditCard, Shield } from 'lucide-react';

interface PaymentStatus {
  type: 'idle' | 'processing' | 'success' | 'error';
  message?: string;
}

interface PaymentProps {
  amount?: string;
  description?: string;
}

const Payment: React.FC<PaymentProps> = ({ amount: initialAmount = '50.00', description: initialDescription = 'Web Development Services' }) => {
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>({ type: 'idle' });
  const [paymentMethod, setPaymentMethod] = useState<'card' | null>(null);
  const [amount, setAmount] = useState(initialAmount);
  const [description, setDescription] = useState(initialDescription);

  const handlePayment = () => {
    // Simulate payment processing
    setPaymentStatus({ type: 'processing', message: 'Processing payment...' });
    
    setTimeout(() => {
      setPaymentStatus({ 
        type: 'success', 
        message: 'Payment completed successfully! Thank you for your purchase.' 
      });
    }, 2000);
  };

  if (paymentStatus.type === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
        <div className="max-w-md mx-auto p-8 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Payment Successful!</h2>
            <p className="text-gray-300 mb-6">
              Thank you for your payment. A confirmation email has been sent to your registered email address.
            </p>
            <button 
              onClick={() => setPaymentStatus({ type: 'idle' })}
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all"
            >
              Make Another Payment
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-4">
            <Shield className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Secure Payment</h1>
          <p className="text-gray-400">Complete your transaction safely</p>
        </div>

        {/* Payment Details */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 mb-6">
          <div className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-gray-300 mb-2">
                Service Description
              </label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What are you paying for?"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
              />
            </div>
            <label className="block text-lg font-medium text-gray-300">
              Enter Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-yellow-400">$</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-600 rounded-xl text-3xl font-bold text-black placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 transition-all text-right"
              />
            </div>
          </div>
        </div>

        {/* Payment Method Selection */}
        <div className="space-y-4 mb-6">
          <button
            onClick={() => setPaymentMethod('card')}
            className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between group ${
              paymentMethod === 'card'
                ? 'border-yellow-500 bg-yellow-500/10'
                : 'border-gray-600 bg-gray-800 hover:border-yellow-500/50 hover:bg-yellow-500/5'
            }`}
          >
            <div className="flex items-center">
              <div className={`p-3 rounded-xl mr-4 transition-colors ${
                paymentMethod === 'card' ? 'bg-yellow-500' : 'bg-gray-700 group-hover:bg-yellow-500/20'
              }`}>
                <CreditCard className={`w-6 h-6 ${
                  paymentMethod === 'card' ? 'text-black' : 'text-white'
                }`} />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-white">Credit or Debit Card</h3>
                <p className="text-sm text-gray-400">Visa, Mastercard, American Express</p>
              </div>
            </div>
            {paymentMethod === 'card' && (
              <CheckCircle className="w-6 h-6 text-yellow-500" />
            )}
          </button>
        </div>

        {/* Payment Form */}
        {paymentMethod && (
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 mb-6">
            <>
              <h3 className="text-lg font-semibold text-white mb-4">Card Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                  />
                </div>
              </div>
            </>
          </div>
        )}

        {/* Payment Status */}
        {paymentStatus.type !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg flex items-center space-x-3 mb-4 ${
              paymentStatus.type === 'success' ? 'bg-green-50 border border-green-200' :
              paymentStatus.type === 'error' ? 'bg-red-50 border border-red-200' :
              'bg-blue-50 border border-blue-200'
            }`}
          >
            {paymentStatus.type === 'success' && <CheckCircle className="w-5 h-5 text-green-600" />}
            {paymentStatus.type === 'error' && <XCircle className="w-5 h-5 text-red-600" />}
            {(paymentStatus.type === 'processing') && 
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

        {/* Pay Button */}
        {paymentMethod && (
          <button 
            onClick={handlePayment}
            disabled={paymentStatus.type === 'processing' || !amount || parseFloat(amount) <= 0}
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-black disabled:text-gray-400 font-semibold py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:hover:scale-100 flex items-center justify-center"
          >
            {paymentStatus.type === 'processing' ? (
              <>
                <Loader className="w-5 h-5 animate-spin mr-2" />
                Processing...
              </>
            ) : (
              `Pay $${parseFloat(amount).toFixed(2)}`
            )}
          </button>
        )}

        {/* Security Footer */}
        <div className="flex items-center justify-center mt-6 text-sm text-gray-400">
          <Shield className="w-4 h-4 mr-2" />
          <span>Your payment information is secure and encrypted</span>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center justify-center space-x-6 mt-4">
          <div className="px-3 py-1 bg-gray-800 rounded-lg border border-gray-600">
            <span className="text-xs text-gray-400">SSL Secured</span>
          </div>
          <div className="px-3 py-1 bg-gray-800 rounded-lg border border-gray-600">
            <span className="text-xs text-gray-400">PCI Compliant</span>
          </div>
          <div className="px-3 py-1 bg-gray-800 rounded-lg border border-gray-600">
            <span className="text-xs text-gray-400">256-bit Encryption</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;