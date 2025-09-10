import React, { useState } from 'react';
import { MessageCircle, X, Send, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ChatBot: React.FC = () => {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ type: 'bot' | 'user', content: string }>>([]);
  const [currentView, setCurrentView] = useState<'main' | 'services' | 'contact'>('main');

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setCurrentView('main');
    if (!isOpen && messages.length === 0) {
      setMessages([{ type: 'bot', content: t('chatbot.greeting') }]);
    }
  };

  const goBack = () => {
    if (currentView !== 'main') {
      setCurrentView('main');
    }
  };

  const sendMessage = () => {
    if (message.trim()) {
      setMessages(prev => [...prev, { type: 'user', content: message }]);
      setMessage('');
      
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          type: 'bot', 
          content: t('chatbot.responses.default')
        }]);
      }, 1000);
    }
  };

  const handleQuickReply = (replyKey: string) => {
    const reply = t(`chatbot.quickReplies.${replyKey}`);
    setMessages(prev => [...prev, { type: 'user', content: reply }]);
    
    // Simulate bot response based on quick reply
    setTimeout(() => {
      let responseKey = 'default';
      if (replyKey === 'services') {
        responseKey = 'services';
        setCurrentView('services');
      } else if (replyKey === 'business') {
        responseKey = 'business';
      } else if (replyKey === 'different') {
        responseKey = 'different';
      } else if (replyKey === 'getStarted') {
        responseKey = 'getStarted';
        setCurrentView('contact');
      }
      
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: t(`chatbot.responses.${responseKey}`)
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div 
        className={`fixed bottom-6 z-50 ${language === 'ar' ? 'left-6' : 'right-6'}`}
      >
        <button
          onClick={toggleChat}
          className="btn-primary w-16 h-16 rounded-full shadow-glow hover:scale-110 transition-all duration-300 animate-pulse-glow focus:outline-none focus:ring-4 focus:ring-primary/30 flex items-center justify-center relative z-10"
        >
          {isOpen ? (
            <X className="w-7 h-7 text-white drop-shadow-lg relative z-10" />
          ) : (
            <MessageCircle className="w-7 h-7 text-white drop-shadow-lg relative z-10" />
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className={`fixed bottom-28 z-50 w-80 h-96 glass rounded-3xl shadow-elegant border border-white/20 flex flex-col animate-scale-in ${
            language === 'ar' ? 'left-6' : 'right-6'
          }`}
        >
          {/* Chat Header */}
          <div className="p-4 border-b border-white/20 rounded-t-3xl bg-gradient-primary relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                {currentView !== 'main' && (
                  <button
                    onClick={goBack}
                    className="p-1 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm"
                  >
                    <ArrowLeft className={`w-4 h-4 drop-shadow-sm ${language === 'ar' ? 'rotate-180' : ''}`} />
                  </button>
                )}
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <MessageCircle className="w-4 h-4 text-white drop-shadow-sm" />
                </div>
                <div>
                  <h3 className="font-semibold text-white drop-shadow-sm">
                    {currentView === 'main' ? t('chatbot.title') : 
                     currentView === 'services' ? t('chatbot.servicesTitle') :
                     t('chatbot.contactTitle')}
                  </h3>
                  <p className="text-xs text-white/90 drop-shadow-sm">
                    {t('chatbot.onlineStatus')}
                  </p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="p-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm"
              >
                <X className="w-5 h-5 drop-shadow-sm" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-2xl shadow-soft backdrop-blur-sm ${
                    msg.type === 'user'
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white border border-primary-400/50'
                      : 'bg-white/80 text-gray-800 border border-gray-200/50'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}

            {/* Quick Replies */}
            {messages.length === 1 && currentView === 'main' && (
              <div className="space-y-2">
                <p className="text-xs text-gray-500 text-center">
                  {t('chatbot.quickRepliesTitle')}
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {['services', 'business', 'different', 'getStarted'].map((replyKey, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(replyKey)}
                      className="text-xs h-8 px-3 py-1 rounded-lg border border-primary-500/30 text-primary-600 hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-600 hover:text-white hover:border-primary-400 transition-all duration-200 text-left focus:outline-none focus:ring-2 focus:ring-primary-500/50 shadow-sm hover:shadow-md backdrop-blur-sm"
                    >
                      {t(`chatbot.quickReplies.${replyKey}`)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/20 glass-dark rounded-b-3xl">
            <div className="flex space-x-2 rtl:space-x-reverse">
              <input
                type="text"
                placeholder={t('chatbot.placeholder')}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                className="flex-1 px-4 py-3 text-sm bg-white/80 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 backdrop-blur-sm shadow-sm placeholder-gray-400"
              />
              <button
                onClick={sendMessage}
                disabled={!message.trim()}
                className="px-4 py-3 btn-primary text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50 shadow-soft hover:shadow-lg backdrop-blur-sm border border-primary-400/50"
              >
                <Send className="w-5 h-5 drop-shadow-sm" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;