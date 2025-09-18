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
        subtitle: 'Comprehensive Digital Solutions for Your Business',
        seo: {
          title: 'Programming & Development',
          description: 'Complete web and mobile development solutions for your business needs.',
          points: [
            'Web Design & Development',
            'Mobile App Development (iOS & Android)',
            'Hosting & Domain Services',
            'Website Performance Optimization'
          ]
        },
        social: {
          title: 'Social Media Management',
          description: 'Comprehensive social media management to build and engage your online community.',
          points: [
            'Facebook, Instagram, TikTok',
            'Monthly Content Calendar',
            'Community Management',
            'Performance Reports'
          ]
        },
        ppc: {
          title: 'Content Creation',
          description: 'Creative and engaging content that drives audience engagement and conversions.',
          points: [
            'Social Media Posts',
            'Reels & Short Videos',
            'Ad/Explainer Scripts',
            'Creative Copywriting'
          ]
        },
        content: {
          title: 'Digital Advertising',
          description: 'Strategic paid advertising campaigns that deliver measurable results and maximize ROI.',
          points: [
            'Paid Ad Campaigns',
            'Audience Targeting',
            'Campaign Optimization',
            'Performance Reports'
          ]
        },
        analytics: {
          title: 'Graphic Design & Branding',
          description: 'Complete visual identity and design solutions that make your brand stand out.',
          points: [
            'Logo & Brand Identity',
            'Social Media Designs',
            'Motion Graphics & Ads',
            'UI/UX Design'
          ]
        },
        branding: {
          title: 'Analytics & Reporting',
          description: 'Data-driven insights and comprehensive reporting to optimize your digital performance.',
          points: [
            'Website Traffic Analysis',
            'Social Media Insights',
            'Ad Campaign Reports',
            'Monthly Strategy Plans'
          ]
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
            title: 'Complete Guide to Web Development: From Design to Launch',
            excerpt: 'Everything you need to know about modern web development, from choosing the right technology stack to optimizing performance.',
            content: 'Web development has evolved dramatically in recent years. With new frameworks, tools, and best practices emerging constantly, staying updated is crucial for success. In this comprehensive guide, we\'ll explore the entire web development process from initial concept to final deployment. We\'ll cover everything from selecting the right programming languages and frameworks to implementing responsive design principles and optimizing for search engines. Whether you\'re a beginner looking to start your journey or an experienced developer wanting to stay current with the latest trends, this guide will provide valuable insights and practical tips to help you build exceptional websites that deliver outstanding user experiences.',
            author: 'Sarah Johnson',
            readTime: '8 min read'
          },
          post2: {
            title: 'Social Media Management: Building Your Brand Online',
            excerpt: 'Learn how to effectively manage your social media presence across all platforms and build a strong online community.',
            content: 'Social media management is more than just posting content. It\'s about building relationships, engaging with your audience, and creating a consistent brand voice across all platforms. In today\'s digital landscape, having a strong social media presence is essential for business success. This comprehensive guide will walk you through the fundamentals of social media management, from developing a content strategy to measuring your success. We\'ll explore platform-specific best practices, content creation techniques, community management strategies, and analytics tools that will help you build a thriving online community and drive meaningful engagement with your target audience.',
            author: 'Ahmed Hassan',
            readTime: '6 min read'
          },
          post3: {
            title: 'Content Creation Mastery: Engaging Your Audience',
            excerpt: 'Discover the secrets of creating compelling content that drives engagement and builds lasting connections with your audience.',
            content: 'Great content is the foundation of any successful digital strategy. Whether it\'s social media posts, blog articles, or video content, quality matters more than quantity. In this detailed exploration of content creation, we\'ll dive deep into the art and science of crafting content that resonates with your audience. From understanding your target demographic to developing a unique brand voice, we\'ll cover everything you need to know to create content that not only captures attention but also drives action. Learn about different content formats, storytelling techniques, visual design principles, and how to repurpose content across multiple platforms for maximum impact.',
            author: 'Maria Garcia',
            readTime: '7 min read'
          },
          post4: {
            title: 'Digital Advertising: Maximizing Your ROI',
            excerpt: 'Master the art of digital advertising with proven strategies that deliver measurable results and maximize your return on investment.',
            content: 'Digital advertising can be complex, but with the right approach, it can be incredibly effective. Learn how to create campaigns that convert, target the right audience, and optimize for maximum ROI. In this comprehensive guide, we\'ll explore the world of digital advertising from strategy development to campaign execution and optimization. We\'ll cover different advertising platforms, audience targeting techniques, ad creative best practices, and advanced optimization strategies. Whether you\'re running Google Ads, Facebook campaigns, or exploring newer platforms like TikTok, this guide will provide you with the knowledge and tools needed to create successful advertising campaigns that drive real business results.',
            author: 'Omar Al-Rashid',
            readTime: '5 min read'
          },
          post5: {
            title: 'Design & Graphics: Creating Visual Impact',
            excerpt: 'Explore the world of graphic design and learn how to create stunning visuals that capture attention and communicate your message effectively.',
            content: 'Visual design plays a crucial role in digital marketing success. From logos to social media graphics, good design can make or break your brand. In this comprehensive exploration of graphic design and branding, we\'ll cover everything from basic design principles to advanced techniques for creating compelling visual content. Learn about color theory, typography, layout design, and how to create a cohesive visual identity that resonates with your target audience. We\'ll also explore modern design trends, tools, and techniques that will help you create professional-quality graphics that enhance your brand\'s online presence and drive engagement.',
            author: 'Lisa Chen',
            readTime: '6 min read'
          },
          post6: {
            title: 'Analytics & Reporting: Making Data-Driven Decisions',
            excerpt: 'Learn how to use analytics and reporting to make informed decisions and continuously improve your digital marketing performance.',
            content: 'Data is the key to understanding what works and what doesn\'t in your digital marketing efforts. Learn how to collect, analyze, and act on data to continuously improve your results. In this detailed guide to analytics and reporting, we\'ll explore the essential metrics every marketer should track, how to set up proper tracking systems, and how to interpret data to make informed decisions. We\'ll cover everything from basic web analytics to advanced attribution modeling, social media insights, and conversion tracking. Discover how to create meaningful reports that provide actionable insights and help you optimize your marketing strategies for better results.',
            author: 'Khalid Al-Mansouri',
            readTime: '5 min read'
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
        address: 'Riyadh, Saudi Arabia',
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
        enterAmountToShow: 'Enter an amount above to show payment options',
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
      chat: {
        header: 'Portal Media Support',
        welcome: 'How can we help you today?',
        placeholder: 'Type your message...',
        backToOptions: 'Back to Options',
        defaultResponse: 'Thank you for your message! Our team will get back to you soon. In the meantime, feel free to explore our services.',
        question1: 'What services do you offer?',
        answer1: 'We offer comprehensive digital marketing services including Programming & Development, Social Media Management, Content Creation, Digital Advertising, Graphic Design & Branding, and Analytics & Reporting. Each service is tailored to your specific business needs!',
        question2: 'How can you help my business grow?',
        answer2: 'We help businesses grow by increasing online visibility, driving qualified traffic, improving conversions, and building strong brand presence across digital channels. Our data-driven approach ensures measurable results.',
        question3: 'What makes you different from competitors?',
        answer3: 'What sets us apart is our data-driven approach, creative excellence, and dedicated team of experts. We focus on delivering measurable results and building long-term partnerships with our clients.',
        question4: 'Do you offer free consultations?',
        answer4: 'Yes! We offer free consultations to discuss your specific needs and how we can help your business grow. Contact us to schedule your free consultation today.',
        question5: 'What is your pricing structure?',
        answer5: 'Our pricing varies based on the services and scope of work. We offer flexible packages to fit different budgets. Contact us for a personalized quote based on your specific needs.',
        question6: 'How long does it take to see results?',
        answer6: 'Results vary depending on the service and industry, but typically you can expect to see initial improvements within 2-4 weeks, with significant results within 2-3 months of consistent implementation.',
        question7: 'Do you work with small businesses?',
        answer7: 'Absolutely! We work with businesses of all sizes, from startups to large enterprises. Our services are scalable and can be customized to fit any budget and business size.',
        question8: 'What industries do you specialize in?',
        answer8: 'We work across various industries including e-commerce, healthcare, technology, real estate, education, and more. Our team has experience in multiple sectors and can adapt our strategies accordingly.',
        question9: 'How do I get started?',
        answer9: 'Getting started is easy! Simply contact us through our website, call us directly, or use this chat. We\'ll schedule a free consultation to discuss your needs and create a customized plan for your business.',
        question10: 'Do you provide ongoing support?',
        answer10: 'Yes! We believe in building long-term partnerships. We provide ongoing support, regular reporting, and continuous optimization to ensure your digital marketing efforts remain effective and up-to-date.'
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
        subtitle: 'حلول رقمية شاملة لعملك',
        seo: {
          title: 'البرمجة والتطوير',
          description: 'حلول تطوير المواقع والتطبيقات الشاملة لاحتياجات عملك.',
          points: [
            'تصميم وبرمجة المواقع',
            'تطوير تطبيقات الموبايل (iOS و Android)',
            'خدمات الاستضافة والدومين',
            'تحسين أداء المواقع'
          ]
        },
        social: {
          title: 'إدارة السوشيال ميديا',
          description: 'إدارة شاملة لوسائل التواصل الاجتماعي لبناء وتفاعل مجتمعك على الإنترنت.',
          points: [
            'فيسبوك، إنستجرام، تيك توك',
            'خطة المحتوى الشهرية',
            'إدارة المجتمع',
            'تقارير الأداء'
          ]
        },
        ppc: {
          title: 'كتابة المحتوى',
          description: 'محتوى إبداعي وجذاب يدفع مشاركة الجمهور والتحويلات.',
          points: [
            'بوستات السوشيال ميديا',
            'الريلز والفيديوهات القصيرة',
            'سكريبتات الإعلانات والشرح',
            'الكتابة الإبداعية'
          ]
        },
        content: {
          title: 'الإعلانات الرقمية',
          description: 'حملات إعلانية مدفوعة استراتيجية تحقق نتائج قابلة للقياس وتعظم العائد على الاستثمار.',
          points: [
            'حملات الإعلانات المدفوعة',
            'استهداف الجمهور',
            'تحسين الحملات',
            'تقارير الأداء'
          ]
        },
        analytics: {
          title: 'التصميم الجرافيكي والبراندينج',
          description: 'حلول الهوية البصرية والتصميم الشاملة التي تجعل علامتك التجارية تبرز.',
          points: [
            'الشعار والهوية التجارية',
            'تصاميم السوشيال ميديا',
            'الموشن جرافيك والإعلانات',
            'تصميم واجهات المستخدم'
          ]
        },
        branding: {
          title: 'التحليلات والتقارير',
          description: 'رؤى مدفوعة بالبيانات وتقارير شاملة لتحسين أدائك الرقمي.',
          points: [
            'تحليل حركة المرور للموقع',
            'رؤى السوشيال ميديا',
            'تقارير حملات الإعلانات',
            'الخطط الاستراتيجية الشهرية'
          ]
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
            title: 'دليل شامل لتطوير المواقع: من التصميم إلى الإطلاق',
            excerpt: 'كل ما تحتاج لمعرفته عن تطوير المواقع الحديثة، من اختيار التقنيات المناسبة إلى تحسين الأداء.',
            content: 'تطوير المواقع تطور بشكل كبير في السنوات الأخيرة. مع ظهور أطر عمل وأدوات وممارسات جديدة باستمرار، البقاء محدثاً أمر بالغ الأهمية للنجاح. في هذا الدليل الشامل، سنستكشف عملية تطوير المواقع بالكامل من المفهوم الأولي إلى النشر النهائي. سنغطي كل شيء من اختيار لغات البرمجة والأطر المناسبة إلى تطبيق مبادئ التصميم المتجاوب وتحسين محركات البحث. سواء كنت مبتدئاً تبحث عن بدء رحلتك أو مطوراً خبيراً تريد البقاء محدثاً بأحدث الاتجاهات، سيوفر لك هذا الدليل رؤى قيمة ونصائح عملية لمساعدتك في بناء مواقع استثنائية توفر تجارب مستخدم متميزة.',
            author: 'سارة أحمد',
            readTime: '8 دقائق قراءة'
          },
          post2: {
            title: 'إدارة السوشيال ميديا: بناء علامتك التجارية على الإنترنت',
            excerpt: 'تعلم كيفية إدارة حضورك على وسائل التواصل الاجتماعي بفعالية عبر جميع المنصات وبناء مجتمع قوي على الإنترنت.',
            content: 'إدارة وسائل التواصل الاجتماعي أكثر من مجرد نشر محتوى. إنها تتعلق ببناء العلاقات والتفاعل مع جمهورك وإنشاء صوت علامة تجارية متسق عبر جميع المنصات. في المشهد الرقمي اليوم، وجود حضور قوي على وسائل التواصل الاجتماعي ضروري لنجاح الأعمال. سيرشدك هذا الدليل الشامل عبر أساسيات إدارة وسائل التواصل الاجتماعي، من تطوير استراتيجية المحتوى إلى قياس نجاحك. سنستكشف أفضل الممارسات الخاصة بكل منصة، تقنيات إنشاء المحتوى، استراتيجيات إدارة المجتمع، وأدوات التحليلات التي ستساعدك في بناء مجتمع مزدهر على الإنترنت وتحقيق تفاعل هادف مع جمهورك المستهدف.',
            author: 'أحمد حسن',
            readTime: '6 دقائق قراءة'
          },
          post3: {
            title: 'إتقان إنشاء المحتوى: جذب جمهورك',
            excerpt: 'اكتشف أسرار إنشاء محتوى مقنع يدفع المشاركة ويبني روابط دائمة مع جمهورك.',
            content: 'المحتوى الرائع هو أساس أي استراتيجية رقمية ناجحة. سواء كان منشورات وسائل التواصل الاجتماعي أو مقالات مدونة أو محتوى فيديو، الجودة مهمة أكثر من الكمية. في هذا الاستكشاف التفصيلي لإنشاء المحتوى، سنتعمق في فن وعلم صياغة محتوى يتردد صداه مع جمهورك. من فهم جمهورك المستهدف إلى تطوير صوت علامة تجارية فريد، سنغطي كل ما تحتاج لمعرفته لإنشاء محتوى لا يلفت الانتباه فحسب، بل يدفع أيضاً إلى العمل. تعلم عن تنسيقات المحتوى المختلفة، تقنيات السرد، مبادئ التصميم البصري، وكيفية إعادة استخدام المحتوى عبر منصات متعددة للحصول على أقصى تأثير.',
            author: 'ماريا غارسيا',
            readTime: '7 دقائق قراءة'
          },
          post4: {
            title: 'الإعلانات الرقمية: تعظيم عائد الاستثمار',
            excerpt: 'أتقن فن الإعلانات الرقمية باستراتيجيات مثبتة تحقق نتائج قابلة للقياس وتعظم عائد استثمارك.',
            content: 'الإعلانات الرقمية يمكن أن تكون معقدة، ولكن بالنهج الصحيح، يمكن أن تكون فعالة بشكل لا يصدق. تعلم كيفية إنشاء حملات تحول، تستهدف الجمهور الصحيح، وتحسن لأقصى عائد على الاستثمار. في هذا الدليل الشامل، سنستكشف عالم الإعلانات الرقمية من تطوير الاستراتيجية إلى تنفيذ الحملة والتحسين. سنغطي منصات الإعلان المختلفة، تقنيات استهداف الجمهور، أفضل ممارسات الإبداع الإعلاني، واستراتيجيات التحسين المتقدمة. سواء كنت تدير إعلانات جوجل، حملات فيسبوك، أو تستكشف منصات أحدث مثل تيك توك، سيوفر لك هذا الدليل المعرفة والأدوات اللازمة لإنشاء حملات إعلانية ناجحة تحقق نتائج أعمال حقيقية.',
            author: 'عمر الراشد',
            readTime: '5 دقائق قراءة'
          },
          post5: {
            title: 'التصميم والجرافيك: خلق تأثير بصري',
            excerpt: 'استكشف عالم التصميم الجرافيكي وتعلم كيفية إنشاء صور مذهلة تجذب الانتباه وتوصل رسالتك بفعالية.',
            content: 'التصميم البصري يلعب دوراً حاسماً في نجاح التسويق الرقمي. من الشعارات إلى رسوم وسائل التواصل الاجتماعي، التصميم الجيد يمكن أن ينجح أو يفشل علامتك التجارية. في هذا الاستكشاف الشامل للتصميم الجرافيكي والبراندينج، سنغطي كل شيء من مبادئ التصميم الأساسية إلى التقنيات المتقدمة لإنشاء محتوى بصري مقنع. تعلم عن نظرية الألوان، الطباعة، تصميم التخطيط، وكيفية إنشاء هوية بصرية متماسكة تتردد صدى مع جمهورك المستهدف. سنستكشف أيضاً اتجاهات التصميم الحديثة، الأدوات، والتقنيات التي ستساعدك في إنشاء رسوم عالية الجودة تعزز حضور علامتك التجارية على الإنترنت وتدفع التفاعل.',
            author: 'ليزا تشين',
            readTime: '6 دقائق قراءة'
          },
          post6: {
            title: 'التحليلات والتقارير: اتخاذ قرارات مدفوعة بالبيانات',
            excerpt: 'تعلم كيفية استخدام التحليلات والتقارير لاتخاذ قرارات مدروسة وتحسين أداء التسويق الرقمي باستمرار.',
            content: 'البيانات هي مفتاح فهم ما يعمل وما لا يعمل في جهود التسويق الرقمي الخاصة بك. تعلم كيفية جمع وتحليل والتصرف بناءً على البيانات لتحسين نتائجك باستمرار. في هذا الدليل التفصيلي للتحليلات والتقارير، سنستكشف المقاييس الأساسية التي يجب على كل مسوق تتبعها، كيفية إعداد أنظمة التتبع المناسبة، وكيفية تفسير البيانات لاتخاذ قرارات مدروسة. سنغطي كل شيء من التحليلات الأساسية للمواقع إلى نمذجة الإسناد المتقدمة، رؤى وسائل التواصل الاجتماعي، وتتبع التحويلات. اكتشف كيفية إنشاء تقارير ذات معنى توفر رؤى قابلة للتنفيذ وتساعدك في تحسين استراتيجيات التسويق الخاصة بك للحصول على نتائج أفضل.',
            author: 'خالد المنصوري',
            readTime: '5 دقائق قراءة'
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
        address: 'الرياض، المملكة العربية السعودية',
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
        enterAmountToShow: 'أدخل مبلغاً أعلاه لإظهار خيارات الدفع',
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
      chat: {
        header: 'دعم بورتال ميديا',
        welcome: 'كيف يمكننا مساعدتك اليوم؟',
        placeholder: 'اكتب رسالتك...',
        backToOptions: 'العودة للخيارات',
        defaultResponse: 'شكراً لرسالتك! سيتواصل معك فريقنا قريباً. في هذه الأثناء، لا تتردد في استكشاف خدماتنا.',
        question1: 'ما هي الخدمات التي تقدمونها؟',
        answer1: 'نقدم خدمات تسويق رقمي شاملة تشمل البرمجة والتطوير، إدارة وسائل التواصل الاجتماعي، إنشاء المحتوى، الإعلانات الرقمية، التصميم الجرافيكي والبراندينج، والتحليلات والتقارير. كل خدمة مُصممة خصيصاً لاحتياجات عملك!',
        question2: 'كيف يمكنكم مساعدة عملي على النمو؟',
        answer2: 'نساعد الأعمال على النمو من خلال زيادة الظهور على الإنترنت، وجذب زيارات مؤهلة، وتحسين التحويلات، وبناء حضور قوي للعلامة التجارية عبر القنوات الرقمية. نهجنا المبني على البيانات يضمن نتائج قابلة للقياس.',
        question3: 'ما الذي يميزكم عن المنافسين؟',
        answer3: 'ما يميزنا هو نهجنا المبني على البيانات، والتميز الإبداعي، وفريق الخبراء المتفاني. نركز على تحقيق نتائج قابلة للقياس وبناء شراكات طويلة المدى مع عملائنا.',
        question4: 'هل تقدمون استشارات مجانية؟',
        answer4: 'نعم! نقدم استشارات مجانية لمناقشة احتياجاتك المحددة وكيف يمكننا مساعدة عملك على النمو. اتصل بنا لجدولة استشارتك المجانية اليوم.',
        question5: 'ما هو هيكل التسعير لديكم؟',
        answer5: 'تختلف أسعارنا حسب الخدمات ونطاق العمل. نقدم حزم مرنة تناسب الميزانيات المختلفة. اتصل بنا للحصول على عرض سعر مخصص حسب احتياجاتك.',
        question6: 'كم من الوقت يستغرق ظهور النتائج؟',
        answer6: 'تختلف النتائج حسب الخدمة والصناعة، لكن عادة يمكنك توقع رؤية تحسينات أولية خلال 2-4 أسابيع، مع نتائج كبيرة خلال 2-3 أشهر من التنفيذ المستمر.',
        question7: 'هل تعملون مع الشركات الصغيرة؟',
        answer7: 'بالطبع! نعمل مع الشركات من جميع الأحجام، من الشركات الناشئة إلى المؤسسات الكبيرة. خدماتنا قابلة للتوسع ويمكن تخصيصها لتناسب أي ميزانية وحجم عمل.',
        question8: 'ما هي الصناعات التي تتخصصون فيها؟',
        answer8: 'نعمل عبر صناعات مختلفة تشمل التجارة الإلكترونية، الرعاية الصحية، التكنولوجيا، العقارات، التعليم، والمزيد. فريقنا لديه خبرة في قطاعات متعددة ويمكنه تكييف استراتيجياتنا وفقاً لذلك.',
        question9: 'كيف أبدأ؟',
        answer9: 'البدء سهل! ببساطة اتصل بنا عبر موقعنا، أو اتصل بنا مباشرة، أو استخدم هذه المحادثة. سنقوم بجدولة استشارة مجانية لمناقشة احتياجاتك وإنشاء خطة مخصصة لعملك.',
        question10: 'هل تقدمون دعماً مستمراً؟',
        answer10: 'نعم! نحن نؤمن ببناء شراكات طويلة المدى. نقدم دعماً مستمراً، تقارير منتظمة، وتحسيناً مستمراً لضمان بقاء جهود التسويق الرقمي فعالة ومحدثة.'
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