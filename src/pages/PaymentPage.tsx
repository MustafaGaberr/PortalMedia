import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, ArrowLeft, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useToast } from '../contexts/ToastContext';
import { usePayPal } from '../hooks/usePayPal';

const PaymentPage: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { showToast } = useToast();
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');

  // PayPal Client ID
  const PAYPAL_CLIENT_ID = "AVxvJihkm9g5iQWUMlhBNCCu1rKxKL5dkM2VsOuPRBgnsMXM2du4UZks1AAxruY5D7yfjhpUYwtubhY8";
  
  // Use PayPal hook
  const { isReady: paypalReady, isLoading: paypalLoading, containerRef: paypalContainerRef, renderButtons, cleanup } = usePayPal(PAYPAL_CLIENT_ID);

  // Handle PayPal button rendering
  useEffect(() => {
    if (!paypalReady) return;

    const amountValue = parseFloat(amount);
    
    if (amountValue > 0) {
      // Clean up existing buttons first
      cleanup();
      
      // Debounced render to prevent rapid re-renders
      const timeoutId = setTimeout(() => {
        renderButtons({
          createOrder: (_data: unknown, actions: { order: { create: (order: unknown) => Promise<string> } }) => {
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
          onApprove: (_data: unknown, actions: { order: { capture: () => Promise<unknown> } }) => {
            return actions.order.capture().then((details: unknown) => {
              console.log('Payment completed:', details);
              setPaymentStatus('success');
              showToast('success', 'تم الدفع بنجاح! شكراً لك.');
            });
          },
          onError: (err: Error) => {
            console.error('PayPal error:', err);
            setPaymentStatus('error');
            showToast('error', 'فشل في الدفع. يرجى المحاولة مرة أخرى.');
          }
        });
      }, 300);

      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      cleanup();
    }
  }, [amount, description, paypalReady, cleanup, renderButtons]);

  if (paymentStatus === 'success') {
    return (
      <div className={`min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center ${isRTL ? 'rtl' : 'ltr'}`}>
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
            {t('payment.paymentSuccessful')}
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            {t('payment.thankYou')}
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5 mr-3 rtl:ml-3 rtl:mr-0" />
            {t('payment.backToHome')}
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50 pt-24 pb-16 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Home Link */}
        <div className="mb-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
            {t('payment.backToHomeLink')}
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('payment.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('payment.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Details Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('payment.paymentDetails')}</h2>
            
            {/* Amount Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('payment.amountUSD')} *
              </label>
              <div className="relative">
                <DollarSign className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 ${isRTL ? 'right-3' : 'left-3'}`} />
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className={`w-full py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'}`}
                  placeholder="0.00"
                />
              </div>
            </div>

            {/* Description Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('payment.serviceDescription')}
              </label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={t('payment.description')}
              />
            </div>

            {/* Instructions */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-600 mb-2">
                {t('payment.enterAmount')}
              </p>
              <p className="text-sm text-gray-600">
                {t('payment.bothMethods')}
              </p>
            </div>

            {/* PayPal Button Container */}
            <div className="mb-6">
              <div ref={paypalContainerRef} className="w-full"></div>
              {parseFloat(amount) <= 0 && (
                <div className="text-center text-gray-500 text-sm py-4">
                  {t('payment.enterAmountToShow')}
                </div>
              )}
              {paypalLoading && parseFloat(amount) > 0 && (
                <div className="text-center text-gray-500 text-sm py-4">
                  Loading payment options...
                </div>
              )}
            </div>

            {/* Error Message */}
            {paymentStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm text-center">
                  {t('payment.paymentFailed')}
                </p>
                <button
                  onClick={() => setPaymentStatus('idle')}
                  className="w-full mt-2 px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                >
                  {t('payment.tryAgain')}
                </button>
              </div>
            )}
          </div>

          {/* Security Information Cards */}
          <div className="space-y-6">
            {/* Secure Payment Features */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('payment.securePayment')}</h3>
              <div className="space-y-3">
                {[
                  t('payment.sslEncrypted'),
                  t('payment.pciCompliant'),
                  t('payment.support24'),
                  t('payment.instantConfirmation')
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
                <h3 className="text-xl font-bold text-gray-900">{t('payment.secureGuarantee')}</h3>
              </div>
              <p className="text-gray-600 mb-4">
                {t('payment.paymentProcessed')}
              </p>
              <div className="space-y-2">
                {[
                  t('payment.creditCardPayment'),
                  t('payment.multipleOptions'),
                  t('payment.sslProtected')
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