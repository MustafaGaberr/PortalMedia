import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Facebook, 
  Linkedin, 
  Instagram,
  MessageCircle 
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Custom WhatsApp Icon Component
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488"/>
  </svg>
);

const Contact: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    alert(t('contact.successMessage'));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: WhatsAppIcon, href: '#', label: 'WhatsApp', color: 'hover:text-green-500' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'info@portalmedia.com', href: 'mailto:info@portalmedia.com' },
    { icon: Phone, text: '+972 52 617 7174', href: 'tel:+972526177174' },
    { icon: MapPin, text: t('contact.address'), href: '#' }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <MessageCircle className="w-16 h-16 text-blue-400 mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contact.getInTouch')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{t('contact.touch')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('contact.readyToStart')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                borderColor: "rgba(59, 130, 246, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.sendMessage')}</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder={t('contact.messagePlaceholder')}
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  animate={isSubmitting ? { scale: [1, 1.02, 1] } : {}}
                  transition={{ repeat: isSubmitting ? Infinity : 0, duration: 1 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>{t('contact.sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t('contact.send')}</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Information */}
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                borderColor: "rgba(59, 130, 246, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.contactInformation')}</h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-4 rtl:space-x-reverse text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
                    whileHover={{ x: isRTL ? -10 : 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-6 h-6" />
                    </motion.div>
                    <span className="text-lg">{item.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                borderColor: "rgba(59, 130, 246, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.follow')}</h3>
              
              <div className="flex space-x-4 rtl:space-x-reverse">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-colors duration-300 border border-white/20 hover:border-current`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 360,
                      boxShadow: "0 10px 20px -5px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
              
              <p className="text-gray-400 mt-6 text-sm">
                {t('contact.stayConnected')}
              </p>
            </motion.div>

            {/* CTA Box */}
            <motion.div 
              className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-3xl p-8 border border-blue-400/30"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)"
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">{t('contact.readyToStart')}</h3>
              <p className="text-gray-300 mb-6">
                {t('contact.discussProject')}
              </p>
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('contact.scheduleCall')}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;