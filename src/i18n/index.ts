import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: 'Home',
        about: 'About Us',
        services: 'Services',
        blog: 'Blog',
        team: 'Team',
        contact: 'Contact',
        payment: 'Payment'
      },
      // Hero Section
      hero: {
        title: 'Portal Media',
        subtitle: 'Digital Marketing & Advertising Excellence',
        description: 'Transform your brand with our cutting-edge digital marketing strategies. We create compelling campaigns that drive results and elevate your business to new heights.',
        cta: 'Get Started Today',
        learnMore: 'Learn More'
      },
      // About Section
      about: {
        title: 'About Portal Media',
        subtitle: 'Your Partner in Digital Success',
        description: 'We are a leading digital marketing agency specializing in comprehensive advertising solutions. Our team combines creativity with data-driven strategies to deliver exceptional results for businesses of all sizes.',
        experience: 'Years of Experience',
        clients: 'Happy Clients',
        projects: 'Successful Projects',
        awards: 'Industry Awards'
      },
      // Services
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive Digital Solutions',
        seo: {
          title: 'SEO Optimization',
          description: 'Boost your search rankings with our advanced SEO strategies and technical expertise.'
        },
        social: {
          title: 'Social Media Marketing',
          description: 'Engage your audience across all social platforms with targeted campaigns.'
        },
        ppc: {
          title: 'PPC Advertising',
          description: 'Maximize ROI with our data-driven pay-per-click advertising campaigns.'
        },
        content: {
          title: 'Content Creation',
          description: 'Compelling content that tells your brand story and converts visitors.'
        },
        analytics: {
          title: 'Analytics & Insights',
          description: 'Deep insights and analytics to optimize your marketing performance.'
        },
        branding: {
          title: 'Brand Development',
          description: 'Build a strong brand identity that resonates with your target audience.'
        }
      },
      // Blog
      blog: {
        title: 'Latest Insights',
        subtitle: 'Stay Updated with Digital Marketing Trends',
        readMore: 'Read More',
        viewAll: 'View All Posts'
      },
      // Team
      team: {
        title: 'Meet Our Team',
        subtitle: 'The Creative Minds Behind Portal Media'
      },
      // Contact
      contact: {
        title: 'Get In Touch',
        subtitle: 'Ready to Start Your Project?',
        getInTouch: 'Get In',
        touch: 'Touch',
        readyToStart: 'Ready to start your next project? Let\'s create something amazing together.',
        sendMessage: 'Send us a message',
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Your Message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'your@email.com',
        messagePlaceholder: 'Tell us about your project...',
        send: 'Send Message',
        sending: 'Sending...',
        successMessage: 'Thank you for your message! We\'ll get back to you soon.',
        contactInformation: 'Contact Information',
        follow: 'Follow Us',
        stayConnected: 'Stay connected with us for the latest updates and behind-the-scenes content.',
        discussProject: 'Let\'s discuss your project and bring your vision to life.',
        scheduleCall: 'Schedule a Call',
        address: '123 Business Ave, Riyadh, Saudi Arabia',
        whatsapp: 'WhatsApp Us'
      },
      // Payment
      payment: {
        title: 'Secure Payment',
        subtitle: 'Choose Your Payment Method',
        visa: 'Pay with Visa',
        paypal: 'Pay with PayPal',
        amount: 'Amount',
        description: 'Service Description',
        payNow: 'Pay Now'
      },
      // Footer
      footer: {
        description: 'Portal Media - Your trusted partner in digital marketing excellence.',
        quickLinks: 'Quick Links',
        servicesTitle: 'Services',
        contactInfo: 'Contact Info',
        rights: '© 2024 Portal Media. All rights reserved.'
      },
      // Chatbot
      chatbot: {
        tooltip: 'Chat with us',
        title: 'Portal Media Chat',
        onlineStatus: 'Online now',
        greeting: 'Hello! 👋 I\'m here to help you learn more about Portal Media\'s services. How can I assist you today?',
        placeholder: 'Type your message...',
        quickRepliesTitle: 'Quick replies:',
        quickReplies: {
          services: 'Tell me about your services',
          business: 'How can you help my business?',
          different: 'What makes you different?',
          getStarted: 'I want to get started'
        },
        backButton: 'Back',
        backToMain: 'Let\'s go back to the main menu. How else can I help you?',
        backToMainMenu: 'Back to Main Menu',
        servicesTitle: 'Our Services',
        contactTitle: 'Contact Us',
        responses: {
          services: 'We offer comprehensive digital marketing services including SEO, social media marketing, content creation, analytics, paid advertising, and mobile marketing. Each service is tailored to your specific business needs!',
          business: 'We help businesses grow by increasing online visibility, driving qualified traffic, improving conversions, and building strong brand presence across digital channels.',
          different: 'What sets us apart is our data-driven approach, creative excellence, and dedicated team of experts. We focus on delivering measurable results and building long-term partnerships.',
          getStarted: 'Excellent! I\'d love to connect you with our team. Please use the contact form or call us directly. We offer free consultations to discuss your specific needs.',
          default: 'Thank you for your message! One of our experts will get back to you shortly. In the meantime, feel free to explore our services.'
        }
      }
    }
  },
  ar: {
    translation: {
      // Navigation
      nav: {
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'خدماتنا',
        blog: 'المدونة',
        team: 'الفريق',
        contact: 'اتصل بنا',
        payment: 'الدفع'
      },
      // Hero Section
      hero: {
        title: 'بورتال ميديا',
        subtitle: 'التميز في التسويق الرقمي والإعلان',
        description: 'حوّل علامتك التجارية من خلال استراتيجيات التسويق الرقمي المتطورة لدينا. نحن ننشئ حملات مقنعة تحقق النتائج وترفع عملك إلى آفاق جديدة.',
        cta: 'ابدأ اليوم',
        learnMore: 'اعرف المزيد'
      },
      // About Section
      about: {
        title: 'عن بورتال ميديا',
        subtitle: 'شريكك في النجاح الرقمي',
        description: 'نحن وكالة تسويق رقمي رائدة متخصصة في حلول الإعلان الشاملة. يجمع فريقنا بين الإبداع والاستراتيجيات المدفوعة بالبيانات لتحقيق نتائج استثنائية للشركات من جميع الأحجام.',
        experience: 'سنوات من الخبرة',
        clients: 'عميل سعيد',
        projects: 'مشروع ناجح',
        awards: 'جائزة في المجال'
      },
      // Services
      services: {
        title: 'خدماتنا',
        subtitle: 'حلول رقمية شاملة',
        seo: {
          title: 'تحسين محركات البحث',
          description: 'عزز ترتيبك في البحث من خلال استراتيجيات تحسين محركات البحث المتقدمة والخبرة التقنية.'
        },
        social: {
          title: 'التسويق عبر وسائل التواصل الاجتماعي',
          description: 'تفاعل مع جمهورك عبر جميع المنصات الاجتماعية من خلال حملات مستهدفة.'
        },
        ppc: {
          title: 'إعلانات الدفع بالنقرة',
          description: 'اعظم العائد على الاستثمار من خلال حملات الإعلان بالدفع لكل نقرة المدفوعة بالبيانات.'
        },
        content: {
          title: 'إنشاء المحتوى',
          description: 'محتوى مقنع يحكي قصة علامتك التجارية ويحول الزوار.'
        },
        analytics: {
          title: 'التحليلات والرؤى',
          description: 'رؤى وتحليلات عميقة لتحسين أداء التسويق الخاص بك.'
        },
        branding: {
          title: 'تطوير العلامة التجارية',
          description: 'بناء هوية علامة تجارية قوية تتردد صداها مع جمهورك المستهدف.'
        }
      },
      // Blog
      blog: {
        title: 'أحدث الرؤى',
        subtitle: 'ابق محدثاً مع اتجاهات التسويق الرقمي',
        readMore: 'اقرأ المزيد',
        viewAll: 'عرض جميع المقالات'
      },
      // Team
      team: {
        title: 'تعرف على فريقنا',
        subtitle: 'العقول الإبداعية وراء بورتال ميديا'
      },
      // Contact
      contact: {
        title: 'تواصل معنا',
        subtitle: 'مستعد لبدء مشروعك؟',
        getInTouch: 'تواصل',
        touch: 'معنا',
        readyToStart: 'مستعد لبدء مشروعك القادم؟ لنخلق شيئاً مذهلاً معاً.',
        sendMessage: 'أرسل لنا رسالة',
        name: 'الاسم الكامل',
        email: 'عنوان البريد الإلكتروني',
        phone: 'رقم الهاتف',
        message: 'رسالتك',
        namePlaceholder: 'اسمك',
        emailPlaceholder: 'your@email.com',
        messagePlaceholder: 'أخبرنا عن مشروعك...',
        send: 'إرسال الرسالة',
        sending: 'جاري الإرسال...',
        successMessage: 'شكراً لرسالتك! سنتواصل معك قريباً.',
        contactInformation: 'معلومات الاتصال',
        follow: 'تابعنا',
        stayConnected: 'ابق متصلاً معنا للحصول على آخر التحديثات والمحتوى الحصري.',
        discussProject: 'لنناقش مشروعك ونحول رؤيتك إلى حقيقة.',
        scheduleCall: 'جدولة مكالمة',
        address: '123 شارع الأعمال، الرياض، المملكة العربية السعودية',
        whatsapp: 'واتساب'
      },
      // Payment
      payment: {
        title: 'الدفع الآمن',
        subtitle: 'اختر طريقة الدفع',
        visa: 'الدفع بفيزا',
        paypal: 'الدفع بباي بال',
        amount: 'المبلغ',
        description: 'وصف الخدمة',
        payNow: 'ادفع الآن'
      },
      // Footer
      footer: {
        description: 'بورتال ميديا - شريكك الموثوق في التميز بالتسويق الرقمي.',
        quickLinks: 'روابط سريعة',
        servicesTitle: 'الخدمات',
        contactInfo: 'معلومات الاتصال',
        rights: '© 2024 بورتال ميديا. جميع الحقوق محفوظة.'
      },
      // Chatbot
      chatbot: {
        tooltip: 'تحدث معنا',
        title: 'محادثة بورتال ميديا',
        onlineStatus: 'متاح الآن',
        greeting: 'مرحباً! 👋 أنا هنا لمساعدتك في التعرف على خدمات بورتال ميديا. كيف يمكنني مساعدتك اليوم؟',
        placeholder: 'اكتب رسالتك...',
        quickRepliesTitle: 'إجابات سريعة:',
        quickReplies: {
          services: 'أخبرني عن خدماتكم',
          business: 'كيف يمكنكم مساعدة عملي؟',
          different: 'ما الذي يميزكم؟',
          getStarted: 'أريد البدء'
        },
        backButton: 'العودة',
        backToMain: 'لنعود إلى القائمة الرئيسية. كيف يمكنني مساعدتك أيضاً؟',
        backToMainMenu: 'العودة للقائمة الرئيسية',
        servicesTitle: 'خدماتنا',
        contactTitle: 'اتصل بنا',
        responses: {
          services: 'نقدم خدمات تسويق رقمي شاملة تشمل تحسين محركات البحث، تسويق وسائل التواصل الاجتماعي، إنشاء المحتوى، التحليلات، الإعلان المدفوع، والتسويق المحمول. كل خدمة مُصممة خصيصاً لاحتياجات عملك!',
          business: 'نساعد الأعمال على النمو من خلال زيادة الظهور على الإنترنت، وجذب زيارات مؤهلة، وتحسين التحويلات، وبناء حضور قوي للعلامة التجارية عبر القنوات الرقمية.',
          different: 'ما يميزنا هو نهجنا المبني على البيانات، والتميز الإبداعي، وفريق الخبراء المتفاني. نركز على تحقيق نتائج قابلة للقياس وبناء شراكات طويلة المدى.',
          getStarted: 'ممتاز! أحب أن أصلك بفريقنا. يرجى استخدام نموذج الاتصال أو الاتصال بنا مباشرة. نقدم استشارات مجانية لمناقشة احتياجاتك المحددة.',
          default: 'شكراً لرسالتك! سيتواصل معك أحد خبرائنا قريباً. في هذه الأثناء، لا تتردد في استكشاف خدماتنا.'
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
  });

export default i18n;