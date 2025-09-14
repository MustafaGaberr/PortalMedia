import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Check, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation';
import Payment from '../components/Payment';

const PaymentPage: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { ref, controls } = useScrollAnimation();
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const features = [
    'SSL Encrypted Transactions',
    'PCI DSS Compliant',
    '24/7 Support',
    'Instant Confirmation',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <Link
              to="/"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors mb-6"
            >
              <ArrowLeft 
                className={`w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0 ${isRTL ? 'rotate-180' : ''}`} 
              />
              Back to Home
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('payment.title')}
            </h1>
            <p className="text-xl text-gray-600">
              Secure Payment Processing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Payment Details</h2>

                {/* Amount and Description Inputs */}
                <div className="space-y-6 mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('payment.amount')} (USD) *
                      </label>
                      <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        min="1"
                        step="0.01"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="0.00"
                      />
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('payment.description')}
                      </label>
                      <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Digital Marketing Services"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Integration */}
                {amount && parseFloat(amount) > 0 ? (
                  <div className="border-t border-gray-200 pt-8">
                    <Payment
                      amount={amount}
                      description={description}
                    />
                  </div>
                ) : (
                  <div className="text-center p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                    <p className="text-gray-600">Please enter an amount to proceed with payment</p>
                    <p className="text-sm text-gray-500 mt-2">Both Credit Card and other payment methods are supported</p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Security Features Sidebar */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Secure Payment</h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">100% Secure</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Your payment is processed securely through our industry-leading platform.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>✓ Credit/Debit Card Payment</p>
                  <p>✓ Multiple Payment Options</p>
                  <p>✓ SSL Encryption Protected</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentPage;