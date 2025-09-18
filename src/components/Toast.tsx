import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, X } from 'lucide-react';

export interface ToastProps {
  id: string;
  type: 'success' | 'error';
  message: string;
  duration?: number;
  onClose: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({ id, type, message, duration = 4000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  const isSuccess = type === 'success';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-4 right-4 z-50 max-w-sm w-full"
    >
      <div
        className={`
          relative p-4 rounded-xl shadow-lg border backdrop-blur-lg
          ${isSuccess 
            ? 'bg-green-500/90 border-green-400/50 text-white' 
            : 'bg-red-500/90 border-red-400/50 text-white'
          }
        `}
      >
        <div className="flex items-start space-x-3 rtl:space-x-reverse">
          <div className="flex-shrink-0">
            {isSuccess ? (
              <CheckCircle className="w-6 h-6 text-green-100" />
            ) : (
              <XCircle className="w-6 h-6 text-red-100" />
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">
              {isSuccess ? 'تم الإرسال بنجاح!' : 'فشل في الإرسال'}
            </p>
            <p className="text-sm opacity-90 mt-1">
              {message}
            </p>
          </div>
          
          <button
            onClick={() => onClose(id)}
            className="flex-shrink-0 p-1 rounded-lg hover:bg-white/20 transition-colors duration-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 rounded-b-xl overflow-hidden">
          <motion.div
            className={`h-full ${isSuccess ? 'bg-green-200' : 'bg-red-200'}`}
            initial={{ width: '100%' }}
            animate={{ width: '0%' }}
            transition={{ duration: duration / 1000, ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Toast;
