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
      setTimeout(() => {
        setMessages([
          { type: 'bot', content: t('chatbot.greeting') },
          { type: 'bot', content: t('chatbot.backToMain') }
        ]);
      }, 300);
    }
  };

  const clearMessages = () => {
    setMessages([{ type: 'bot', content: t('chatbot.greeting') }]);
    setCurrentView('main');
  };

  const sendMessage = () => {
    if (message.trim()) {
      setMessages(prev => [...prev, { type: 'user', content: message }]);
      setMessage('');
      
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
      
      setMessages(prev => [
        ...prev, 
        { type: 'bot', content: t(`chatbot.responses.${responseKey}`) },
        { type: 'bot', content: t('chatbot.quickRepliesTitle') }
      ]);
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
          className={`fixed bottom-28 z-50 w-80 h-96 bg-white rounded-3xl shadow-elegant border border-gray-200 flex flex-col animate-scale-in ${
            language === 'ar' ? 'left-6' : 'right-6'
          }`}
        >
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 rounded-t-3xl bg-gradient-primary relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                {currentView !== 'main' && (
                  <button
                    onClick={goBack}
                    className="p-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm hover:scale-110"
                    title={t('chatbot.backToMainMenu')}
                  >
                    <ArrowLeft className={`w-5 h-5 drop-shadow-sm transition-transform duration-200 ${
                      language === 'ar' ? 'rotate-180' : ''
                    }`} />
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
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <button
                  onClick={clearMessages}
                  className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm hover:scale-110"
                  title="Clear Chat"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                <button
                  onClick={toggleChat}
                  className="p-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm hover:scale-110"
                >
                  <X className="w-5 h-5 drop-shadow-sm" />
                </button>
              </div>
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
                  className={`max-w-xs p-3 rounded-2xl shadow-md ${
                    msg.type === 'user'
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white border border-primary-400'
                      : 'bg-gray-100 text-gray-800 border border-gray-200'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}

            {/* Quick Replies */}
            {currentView === 'main' && (
              messages.length === 1 || 
              messages.length === 2 || 
              (messages.length >= 3 && messages[messages.length - 1].content === t('chatbot.quickRepliesTitle'))
            ) && (
              <div className="space-y-2">
                <p className="text-xs text-gray-500 text-center">
                  {t('chatbot.quickRepliesTitle')}
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {['services', 'business', 'different', 'getStarted'].map((replyKey, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(replyKey)}
                      className="text-xs h-8 px-3 py-1 rounded-lg border border-primary-500/30 text-primary-600 hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-600 hover:text-white hover:border-primary-400 transition-all duration-200 text-left focus:outline-none focus:ring-2 focus:ring-primary-500/50 shadow-sm hover:shadow-md"
                    >
                      {t(`chatbot.quickReplies.${replyKey}`)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-3xl">
            <div className="flex space-x-2 rtl:space-x-reverse">
              <input
                type="text"
                placeholder={t('chatbot.placeholder')}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                className="flex-1 px-4 py-3 text-sm bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 shadow-sm placeholder-gray-400"
              />
              <button
                onClick={sendMessage}
                disabled={!message.trim()}
                className="px-4 py-3 btn-primary text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-md hover:shadow-lg border border-primary-400"
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