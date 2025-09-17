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
        viewAll: 'View All Posts',
        backToBlog: 'Back to Blog',
        articleNotFound: 'Article Not Found',
        loading: 'Loading articles...',
        posts: {
          post1: {
            title: 'The Future of Digital Marketing in 2024',
            excerpt: 'Discover the latest trends and technologies that will shape digital marketing strategies in the coming year.',
            content: 'Digital marketing is evolving at an unprecedented pace. With new technologies emerging and consumer behaviors shifting, businesses must adapt their strategies to stay competitive...',
            author: 'Sarah Johnson',
            readTime: '5 min read'
          },
          post2: {
            title: 'Social Media ROI: How to Measure Success',
            excerpt: 'Learn the most effective ways to measure and optimize your social media marketing return on investment.',
            content: 'Measuring social media ROI can be challenging, but with the right metrics and tools, you can demonstrate clear value...',
            author: 'Ahmed Hassan',
            readTime: '4 min read'
          },
          post3: {
            title: 'SEO Best Practices for 2024',
            excerpt: 'Stay ahead with the latest SEO strategies and techniques that actually work in today\'s search landscape.',
            content: 'Search engine optimization continues to evolve. Here are the proven strategies that will help your website rank higher...',
            author: 'Maria Garcia',
            readTime: '6 min read'
          },
          post4: {
            title: 'Content Marketing That Converts',
            excerpt: 'Create compelling content that drives engagement and converts visitors into customers.',
            content: 'Great content is the foundation of any successful digital marketing strategy. Learn how to create content that resonates...',
            author: 'Omar Al-Rashid',
            readTime: '5 min read'
          },
          post5: {
            title: 'PPC Campaign Optimization Tips',
            excerpt: 'Maximize your pay-per-click advertising results with these proven optimization techniques.',
            content: 'PPC advertising can be highly effective when done right. Here are the key strategies to optimize your campaigns...',
            author: 'Lisa Chen',
            readTime: '4 min read'
          },
          post6: {
            title: 'Building a Strong Brand Identity',
            excerpt: 'Develop a memorable brand that resonates with your target audience and stands out from competitors.',
            content: 'A strong brand identity is crucial for business success. Learn how to create a brand that customers will remember...',
            author: 'Khalid Al-Mansouri',
            readTime: '7 min read'
          },
          post7: {
            title: 'Email Marketing Strategies That Work',
            excerpt: 'Boost your email marketing performance with these proven strategies and best practices.',
            content: 'Email marketing remains one of the most effective digital marketing channels. Here\'s how to make it work for you...',
            author: 'Jennifer Smith',
            readTime: '5 min read'
          },
          post8: {
            title: 'Data-Driven Marketing Decisions',
            excerpt: 'Use analytics and data insights to make smarter marketing decisions and improve your results.',
            content: 'Data is the key to successful marketing. Learn how to collect, analyze, and act on marketing data...',
            author: 'Youssef Al-Zahra',
            readTime: '6 min read'
          }
        }
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
        amount: 'Amount',
        description: 'Service Description',
        payNow: 'Pay Now',
        paymentDetails: 'Payment Details',
        amountUSD: 'Amount (USD)',
        serviceDescription: 'Service Description',
        enterAmount: 'Please enter an amount to proceed with payment',
        bothMethods: 'Both Credit Card and other payment methods are supported',
        securePayment: 'Secure Payment',
        sslEncrypted: 'SSL Encrypted Transactions',
        pciCompliant: 'PCI DSS Compliant',
        support24: '24/7 Support',
        instantConfirmation: 'Instant Confirmation',
        secureGuarantee: '100% Secure',
        paymentProcessed: 'Your payment is processed securely through our industry-leading platform.',
        creditCardPayment: 'Credit/Debit Card Payment',
        multipleOptions: 'Multiple Payment Options',
        sslProtected: 'SSL Encryption Protected',
        paymentSuccessful: 'Payment Successful!',
        thankYou: 'Thank you! Your payment has been processed successfully.',
        backToHome: 'Back to Home',
        paymentFailed: 'Payment failed. Please try again.',
        tryAgain: 'Try Again',
        backToHomeLink: 'Back to Home'
      },
      // Footer
      footer: {
        description: 'Portal Media - Your trusted partner in digital marketing excellence.',
        quickLinks: 'Quick Links',
        servicesTitle: 'Services',
        contactInfo: 'Contact Info',
        rights: '© 2025 Portal Media. All rights reserved.'
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
        viewAll: 'عرض جميع المقالات',
        backToBlog: 'العودة للمدونة',
        articleNotFound: 'المقال غير موجود',
        loading: 'جاري تحميل المقالات...',
        posts: {
          post1: {
            title: 'مستقبل التسويق الرقمي في 2024',
            excerpt: 'اكتشف أحدث الاتجاهات والتقنيات التي ستشكل استراتيجيات التسويق الرقمي في العام القادم.',
            content: 'التسويق الرقمي يتطور بوتيرة غير مسبوقة. مع ظهور تقنيات جديدة وتغير سلوكيات المستهلكين، يجب على الشركات تكييف استراتيجياتها للبقاء في المقدمة...',
            author: 'سارة أحمد',
            readTime: '5 دقائق قراءة'
          },
          post2: {
            title: 'عائد الاستثمار لوسائل التواصل الاجتماعي: كيفية قياس النجاح',
            excerpt: 'تعلم الطرق الأكثر فعالية لقياس وتحسين عائد الاستثمار في تسويق وسائل التواصل الاجتماعي.',
            content: 'يمكن أن يكون قياس عائد الاستثمار لوسائل التواصل الاجتماعي تحديًا، ولكن بالمعايير والأدوات الصحيحة، يمكنك إثبات القيمة الواضحة...',
            author: 'أحمد حسن',
            readTime: '4 دقائق قراءة'
          },
          post3: {
            title: 'أفضل ممارسات تحسين محركات البحث لعام 2024',
            excerpt: 'ابق في المقدمة مع أحدث استراتيجيات وتقنيات تحسين محركات البحث التي تعمل فعلاً في بيئة البحث اليوم.',
            content: 'يستمر تحسين محركات البحث في التطور. إليك الاستراتيجيات المثبتة التي ستساعد موقعك على الترتيب الأعلى...',
            author: 'ماريا غارسيا',
            readTime: '6 دقائق قراءة'
          },
          post4: {
            title: 'تسويق المحتوى الذي يحول الزوار إلى عملاء',
            excerpt: 'أنشئ محتوى مقنعاً يدفع المشاركة ويحول الزوار إلى عملاء.',
            content: 'المحتوى الرائع هو أساس أي استراتيجية تسويق رقمي ناجحة. تعلم كيفية إنشاء محتوى يتردد صداه...',
            author: 'عمر الراشد',
            readTime: '5 دقائق قراءة'
          },
          post5: {
            title: 'نصائح تحسين حملات الإعلان المدفوع',
            excerpt: 'قم بتحسين نتائج إعلانات الدفع مقابل النقر مع هذه التقنيات المثبتة للتحسين.',
            content: 'يمكن أن يكون الإعلان المدفوع فعالاً جداً عند القيام به بشكل صحيح. إليك الاستراتيجيات الرئيسية لتحسين حملاتك...',
            author: 'ليزا تشين',
            readTime: '4 دقائق قراءة'
          },
          post6: {
            title: 'بناء هوية تجارية قوية',
            excerpt: 'طور علامة تجارية لا تُنسى تتردد صدى مع جمهورك المستهدف وتبرز من المنافسين.',
            content: 'الهوية التجارية القوية ضرورية لنجاح الأعمال. تعلم كيفية إنشاء علامة تجارية سيتذكرها العملاء...',
            author: 'خالد المنصوري',
            readTime: '7 دقائق قراءة'
          },
          post7: {
            title: 'استراتيجيات تسويق البريد الإلكتروني التي تعمل',
            excerpt: 'عزز أداء تسويق البريد الإلكتروني مع هذه الاستراتيجيات والممارسات المثبتة.',
            content: 'يظل تسويق البريد الإلكتروني أحد أكثر قنوات التسويق الرقمي فعالية. إليك كيفية جعله يعمل لصالحك...',
            author: 'جينيفر سميث',
            readTime: '5 دقائق قراءة'
          },
          post8: {
            title: 'قرارات التسويق المبنية على البيانات',
            excerpt: 'استخدم التحليلات ورؤى البيانات لاتخاذ قرارات تسويقية أذكى وتحسين نتائجك.',
            content: 'البيانات هي مفتاح التسويق الناجح. تعلم كيفية جمع وتحليل والتصرف بناءً على بيانات التسويق...',
            author: 'يوسف الزهراء',
            readTime: '6 دقائق قراءة'
          }
        }
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
        amount: 'المبلغ',
        description: 'وصف الخدمة',
        payNow: 'ادفع الآن',
        paymentDetails: 'تفاصيل الدفع',
        amountUSD: 'المبلغ (دولار أمريكي)',
        serviceDescription: 'وصف الخدمة',
        enterAmount: 'يرجى إدخال مبلغ للمتابعة',
        bothMethods: 'كل من بطاقات الائتمان وطرق الدفع الأخرى مدعومة',
        securePayment: 'دفع آمن',
        sslEncrypted: 'معاملات مشفرة بـ SSL',
        pciCompliant: 'متوافق مع PCI DSS',
        support24: 'دعم على مدار الساعة',
        instantConfirmation: 'تأكيد فوري',
        secureGuarantee: '100% آمن',
        paymentProcessed: 'معالجة الدفع بشكل آمن من خلال منصتنا الرائدة في الصناعة',
        creditCardPayment: 'دفع بالبطاقة الائتمانية/الخصم',
        multipleOptions: 'خيارات دفع متعددة',
        sslProtected: 'محمي بتشفير SSL',
        paymentSuccessful: 'تم الدفع بنجاح!',
        thankYou: 'شكراً لك! تم معالجة دفعتك بنجاح.',
        backToHome: 'العودة للرئيسية',
        paymentFailed: 'فشل الدفع. يرجى المحاولة مرة أخرى.',
        tryAgain: 'حاول مرة أخرى',
        backToHomeLink: 'العودة للرئيسية'
      },
      // Footer
      footer: {
        description: 'بورتال ميديا - شريكك الموثوق في التميز بالتسويق الرقمي.',
        quickLinks: 'روابط سريعة',
        servicesTitle: 'الخدمات',
        contactInfo: 'معلومات الاتصال',
        rights: '© 2025 بورتال ميديا. جميع الحقوق محفوظة.'
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