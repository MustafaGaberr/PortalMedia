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
import { useToast } from '../contexts/ToastContext';
import emailjs from '@emailjs/browser';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488"/>
  </svg>
);

const TiktokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const Contact: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { showToast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
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
    
    try {
      const result = await emailjs.sendForm(
        'service_h0ebui6',
        'template_d0usfwp',
        e.currentTarget as HTMLFormElement,
        '6qzJTUZvh6OFG-QcB'
      );

      if (result.status === 200) {
        setFormData({ from_name: '', from_email: '', message: '' });
        showToast('success', 'تم إرسال الرسالة بنجاح!');
      } else {
        showToast('error', 'فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      showToast('error', 'فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
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
      transition: { duration: 0.2 }
    }
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61580536207617', label: 'Facebook', color: 'hover:text-blue-600', target: '_blank' },
    { icon: Instagram, href: 'https://www.instagram.com/portal._.media', label: 'Instagram', color: 'hover:text-pink-500', target: '_blank' },
    { icon: TiktokIcon, href: 'https://www.tiktok.com/@portal._.media', label: 'TikTok', color: 'hover:text-blue-500', target: '_blank' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500', target: '_blank' },
    { icon: WhatsAppIcon, href: 'https://wa.me/970569225413', label: 'WhatsApp', color: 'hover:text-green-500', target: '_blank' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'info@portalksa.com', href: 'mailto:info@portalka.com' },
    { icon: Phone, text: '+970 56 922 5413', href: 'tel:+970569225413' },
    { icon: MapPin, text: t('contact.address'), href: '#' }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 px-6 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #212529, #343a40, #495057)' }}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ backgroundColor: 'var(--gold-light)' }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000" style={{ backgroundColor: 'var(--gold-dark)' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500" style={{ backgroundColor: 'var(--gold-darker)' }}></div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto relative z-10 px-2 sm:px-0"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <MessageCircle className="w-16 h-16 mx-auto" style={{ color: 'var(--gold-light)' }} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contact.getInTouch')} <span className="text-transparent bg-clip-text" style={{ background: 'linear-gradient(to right, var(--gold-light), var(--gold-dark))', WebkitBackgroundClip: 'text' }}>{t('contact.touch')}</span>
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            {t('contact.readyToStart')}<br />
            {t('contact.readyToStartSecond')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start px-2 sm:px-0">
          <motion.div variants={itemVariants}>
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(246, 217, 115, 0.25)",
                borderColor: "rgba(246, 217, 115, 0.3)"
              }}
              transition={{ duration: 0.15 }}
            >
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-white">Send us </span>
                <span style={{ background: 'linear-gradient(to right, var(--gold-light), var(--gold-dark))', WebkitBackgroundClip: 'text' }}>message</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-medium text-white mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200"
                    style={{ '--tw-ring-color': 'var(--gold-light)' } as React.CSSProperties}
                    placeholder="Your Name"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-medium text-white mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200"
                    style={{ '--tw-ring-color': 'var(--gold-light)' } as React.CSSProperties}
                    placeholder="Your Email"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block text-sm font-medium text-white mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 resize-none"
                    style={{ '--tw-ring-color': 'var(--gold-light)' } as React.CSSProperties}
                    placeholder="Your Message"
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2 rtl:space-x-reverse focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent"
                  style={{ 
                    background: 'linear-gradient(to right, var(--gold-light), var(--gold-dark))',
                    color: '#212529',
                    border: '2px solid rgba(246, 217, 115, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, var(--gold-dark), var(--gold-darker))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, var(--gold-light), var(--gold-dark))';
                  }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  animate={isSubmitting ? { scale: [1, 1.01, 1] } : {}}
                  transition={{ repeat: isSubmitting ? Infinity : 0, duration: 0.8 }}
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

          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(246, 217, 115, 0.25)",
                borderColor: "rgba(246, 217, 115, 0.3)"
              }}
              transition={{ duration: 0.15 }}
            >
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-white">Contact </span>
                <span style={{ color: 'var(--gold-light)' }}>Information</span>
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-4 rtl:space-x-reverse text-white transition-colors duration-200 group"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--gold-light)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#ffffff'; // white
                    }}
                    whileHover={{ x: isRTL ? -5 : 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200"
                      style={{ backgroundColor: 'rgba(246, 217, 115, 0.2)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--gold-light)';
                        e.currentTarget.style.color = '#212529';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(246, 217, 115, 0.2)';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.2 }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <span className="text-lg text-white">{item.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(246, 217, 115, 0.25)",
                borderColor: "rgba(246, 217, 115, 0.3)"
              }}
              transition={{ duration: 0.15 }}
            >
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-white">Follow </span>
                <span style={{ color: 'var(--gold-light)' }}>Us</span>
              </h3>
              
              <div className="flex space-x-4 rtl:space-x-reverse">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.target}
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white transition-colors duration-200 border border-white/20 hover:border-current`}
                    whileHover={{ 
                      scale: 1.05, 
                      rotate: 180,
                      boxShadow: "0 10px 20px -5px rgba(246, 217, 115, 0.3)"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--gold-light)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#ffffff'; // white
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-white" />
                  </motion.a>
                ))}
              </div>
              
              <p className="mt-6 text-sm text-white">
                {t('contact.stayConnected')}
              </p>
            </motion.div>

            <motion.div 
              className="backdrop-blur-lg rounded-3xl p-8 border"
              style={{ 
                background: 'linear-gradient(to right, rgba(246, 217, 115, 0.2), rgba(178, 121, 11, 0.2))',
                borderColor: 'rgba(246, 217, 115, 0.3)'
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(246, 217, 115, 0.4)"
              }}
              transition={{ duration: 0.15 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {t('contact.readyToStart')}<br />
                {t('contact.readyToStartSecond')}
              </h3>
              <p className="text-white mb-6">
                {t('contact.discussProject')}
              </p>
              <motion.button
                className="font-semibold py-3 px-6 rounded-xl transition-all duration-200"
                onClick={() => window.open('https://wa.me/970569225413', '_blank')}
                style={{ 
                  background: 'linear-gradient(to right, var(--gold-light), var(--gold-dark))',
                  color: '#212529'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, var(--gold-dark), var(--gold-darker))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, var(--gold-light), var(--gold-dark))';
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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