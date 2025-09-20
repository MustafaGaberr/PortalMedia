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
            title: 'How to Turn Instagram into an Endless Sales Engine?',
            excerpt: 'Instagram is no longer just a platform for visual sharing; it\'s a full-fledged e-commerce ecosystem brimming with endless opportunities. Turning followers into buyers isn\'t luck—it\'s the result of a carefully crafted strategy.',
            content: '1- Audience Targeting: Not Just Selection, but Building a "Buyer Persona"\n\nForget about targeting "women between 25 and 35." That\'s shallow targeting with weak results. Instead, create a detailed Buyer Persona.\n\n    • Ask deep questions: What challenges do they face? What are their goals? What values do they believe in? What are their fears?\n\n    • Use data smartly: Leverage tools like Instagram Insights and Audience Insights in Ads Manager to analyze your current audience\'s behavior. Don\'t just look at numbers—understand what\'s behind them. What type of content sparks the most engagement? At what times are they most active?\n\n2- Content: From Display to Added Value\n\nInstagram now favors content that delivers real value, not just product showcases.\n\n    • Use platform features: Leverage Reels for quick, educational, and fun content. Instead of only showing the final product, show how it\'s used or the results it brings.\n\n    • Cinematic photos and videos: Focus on professional lighting, creative angles, and storytelling visuals.\n\n    • Emotion-driven stories: Don\'t just sell the product, sell the end result. Does your product save time? Boost confidence? Solve a problem? Focus on the feelings it creates in the customer\'s life.\n\n3- Instagram Ads: The Power of Advanced Targeting\n\nOrganic reach alone won\'t skyrocket your sales. Ads give you full control over audience targeting.\n\n    • Retargeting: The #1 sales-boosting strategy. Target people who visited your website or interacted with your account but didn\'t buy. Remind them with tailored ads.\n\n    • Lookalike Audiences: Upload your existing customers (or website visitors) to Ads Manager, and let it find new audiences with similar behaviors and interests. This tool is pure gold.\n\n4- Influencer Partnerships: Strategic Collaboration\n\nInfluencer collaborations are no longer just "promotions." They\'re bridges of trust to new audiences.\n\n    • Choose carefully: Don\'t chase large follower counts. Find niche influencers who share your values and target audience.\n\n    • Verify authenticity: Use external tools to check engagement rates and fake followers.\n\n5- Data Analysis: Your Success Compass\n\nOperating without analysis is working blind. Every step must be data-driven.\n\n    • Track everything: Use Facebook Pixel on your website to monitor visitor actions—who added to cart, who completed purchase.\n\n    • Run A/B tests: Test ad formats, copy, and visuals to find what works best.\n\nConclusion: Success on Instagram means shifting from "just posting content" to building a fully integrated sales strategy centered on customer understanding, value delivery, and continuous analysis.',
            author: 'Portal Media Team',
            readTime: '8 min read'
          },
          post2: {
            title: 'Artificial Intelligence (AI) in Personalized Marketing',
            excerpt: 'In today\'s noisy communication channels, it\'s no longer enough to reach your audience—you need to speak directly to them. This is where AI shines. It\'s not just a futuristic tool, but a fundamental engine driving personalized marketing and giving brands an unmatched competitive edge.',
            content: '1- Deep Customer Understanding: From Data to Insights\n\nEffective marketing begins with understanding. Traditionally, analyzing customer data was slow and tedious. Today, AI processes massive data in seconds, providing precise and valuable insights.\n\n    • Digital behavior analysis: AI tracks user activity across websites and social media—what pages they visit, products they view, and time spent—to predict interests and future preferences.\n\n    • Sentiment analysis: AI can scan thousands of reviews and comments to understand customer feelings toward your brand, helping you make quick marketing decisions and solve issues before they escalate.\n\n2- Automated Personalization: Tailored Messaging for Each Person\n\nPersonalized marketing is more than using someone\'s name. With AI, you can now design unique campaigns, content, and offers for every customer—boosting engagement and conversions.\n\n    • Smart email: Instead of bulk emails, AI can send recommendations based on a customer\'s purchase history or behavior, greatly increasing open and click-through rates.\n\n    • Dynamic content: AI-powered websites can automatically adjust based on visitors. For example, a visitor interested in digital marketing sees relevant articles, while another focused on apps sees completely different content.\n\n3- Challenges and the Future of Personalized Marketing\n\nWhile AI brings huge benefits, it also raises data privacy challenges. Brands must build trust through transparency about how data is used.\n\nThe future of personalization is moving toward generative AI, which can create unique content—ad copy, images, even short videos—opening new possibilities for marketers.\n\nConclusion: AI isn\'t just modern tech; it\'s your partner in building stronger, more sustainable relationships with customers. The question is—are you ready to invest in this revolution?',
            author: 'Portal Media Team',
            readTime: '6 min read'
          },
          post3: {
            title: 'The Psychology of Social Media: How to Understand and Influence Your Audience\'s Mind',
            excerpt: 'In a world overflowing with posts and ads, marketing is no longer just about presenting a product—it\'s about mastering the psychology of human behavior. Understanding the psychology of social media is your compass to build emotional bonds and turn followers into loyal customers.',
            content: '1- The Language of Persuasion: Six Principles of Influence\n\nInfluence isn\'t random—it\'s built on proven psychological principles you can apply to your campaigns:\n\n    • Reciprocity: Offer free value (guides, exclusive tips), and people will feel compelled to give back—through purchases or engagement.\n\n    • Scarcity: Creating urgency ("limited-time offer" or "last item available") triggers fear of missing out and pushes quick decisions.\n\n    • Social proof: People trust what others trust. Use positive reviews, sales numbers, and influencer testimonials to strengthen credibility.\n\n2- Storytelling: Turning Emotions into Sales\n\nThe human brain is wired for stories. Instead of facts, tell stories that immerse your audience.\n\n    • Make the customer the hero: Show how your product/service helps them overcome challenges and achieve success.\n\n    • Focus on the experience, not just features: Don\'t just list product specs—highlight how it makes users feel (confident, efficient, relieved).\n\n3- The Psychology of Colors and Visual Design\n\nVisuals influence more than attention—they shape subconscious reactions.\n\n    • Colors: Blue builds trust, red sparks excitement, green conveys growth and health.\n\n    • Human faces: Showing faces in ads builds emotional connection. People naturally empathize with faces, increasing trust.\n\nConclusion: The psychology of social media is the language of power. When you understand how your audience thinks, you craft messages that don\'t just reach eyes—they touch hearts and minds, creating unshakable loyalty.',
            author: 'Portal Media Team',
            readTime: '7 min read'
          },
          post4: {
            title: 'Customer Data Analysis: The Secret Between Limited and Explosive Growth',
            excerpt: 'In today\'s competitive world, numbers aren\'t just statistics—they\'re stories of your customers\' journeys, preferences, and even future intentions. Companies that only collect data without digging deeper miss out on the most valuable asset: insights that fuel real growth.',
            content: '1- Beyond Numbers: Understanding the Pulse of Your Audience\n\nBasic analytics tells you what happened. Deep analysis tells you why it happened—unlocking real control over growth.\n\n    • Decoding customer behavior: Every click, search, and second on your website tells a story. Deep journey analysis connects the dots: When do customers tend to leave? What prevents checkout? Solving these pain points turns weaknesses into strengths.\n\n    • Unmatched personalization: There\'s no such thing as an "average" customer. Through behavioral segmentation, you categorize users by real actions—discount seekers, loyal buyers, or new customers—each with a tailored message for maximum response.\n\n2- Predicting the Future: From Interaction to Forecasting\n\nAnalysis isn\'t only about the past—it\'s your tool for predicting what\'s next.\n\n    • Churn prediction: Imagine knowing who\'s likely to leave before they actually do. AI algorithms can flag warning signs, giving you time to intervene with special offers or support to retain them.\n\n    • Laser-focused ads: Instead of wasting money on broad targeting, deep analysis helps you reach prospects who resemble your most valuable customers—boosting sales while cutting costs.\n\nConclusion: Deep customer data analysis isn\'t optional—it\'s essential. It\'s the compass guiding decisions and ensuring every move is rooted in facts, not guesses. The question is—are you ready to unlock your data\'s hidden treasure chest?',
            author: 'Portal Media Team',
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
            title: 'كيف تحوّل إنستغرام إلى محرك مبيعات لا يتوقف؟',
            excerpt: 'لم يعد إنستغرام منصة للمشاركة المرئية فحسب، بل هو نظام بيئي متكامل للتجارة الإلكترونية يزخر بفرص لا حصر لها، فتحويل المتابعين إلى مشترين ليس مجرد حظ، بل هو نتيجة استراتيجية دقيقة ومحكمة.',
            content: '1- استهداف الجمهور ليس مجرد تحديد، بل بناء "شخصية العميل"\n\nيجب عليك أن تنسَ فكرة استهداف "النساء بين 25 و 35 عامًا". فهذا استهداف سطحي لا يجلب نتائج، بدلاً من ذلك ابدأ بإنشاء "شخصية العميل المثالي" (Buyer Persona).\n\n    • اطرح أسئلة عميقة: ما هي التحديات التي يواجهها؟ ما هي أهدافه؟ ما هي القيم التي يؤمن بها؟ ما هي مخاوفه؟\n\n    • استخدم البيانات بذكاء: استغل أدوات مثل Instagram Insights وAudience Insights في مدير الإعلانات (Ads Manager) لتحليل سلوك جمهورك الحالي، لا تنظر إلى الأرقام فحسب، بل افهم ما وراءها، أي نوع من المحتوى يثير التفاعل الأكبر؟ في أي الأوقات يكونون أكثر نشاطًا؟\n\n2- المحتوى: من مجرد عرض إلى "قيمة مضافة"\n\nإنستغرام اليوم يفضل المحتوى الذي يقدم قيمة حقيقية، لا مجرد عرض للمنتج.\n\n    • استغل ميزات المنصة: استخدم Reels لتقديم محتوى تعليمي سريع وممتع، على سبيل المثال، بدلاً من عرض المنتج النهائي، اعرض طريقة استخدامه أو النتائج التي يحققها.\n\n    • صور وفيديوهات بجودة سينمائية: لا تكتفِ بالوضوح العالي، ركز على الإضاءة الاحترافية، والزوايا المبتكرة، والتكوين الجمالي الذي يحكي قصة.\n\n    • القصص التي تثير المشاعر: لا تبيع المنتج، بل بع "النتيجة النهائية"، هل منتجك يوفر الوقت؟ يمنح الثقة؟ يحل مشكلة معقدة؟ ركز على المشاعر التي يخلقها في حياة العميل.\n\n3- إعلانات إنستغرام: قوة الاستهداف المتقدم\n\nالوصول العضوي وحده لن يضاعف مبيعاتك، إعلانات إنستغرام هي الأداة التي تمنحك السيطرة الكاملة على الوصول إلى جمهورك.\n\n    • إعادة الاستهداف (Retargeting): هذه هي أهم استراتيجية لزيادة المبيعات، استهدف الأشخاص الذين زاروا موقعك الإلكتروني أو تفاعلوا مع حسابك، لكنهم لم يشتروا، ذكّرهم بمنتجاتك من خلال إعلانات مخصصة.\n\n    • استخدام الـ "Lookalike Audiences": ارفع قائمة بعملاء حاليين (أو من زاروا موقعك) إلى مدير الإعلانات، واطلب منه أن يجد لك جمهورًا جديدًا يشبههم في السلوك والاهتمامات، هذه الأداة هي كنز حقيقي.\n\n4- التعاون مع المؤثرين: الشراكة الاستراتيجية\n\nالشراكات مع المؤثرين لم تعد مجرد "ترويج"، إنها بناء جسر من الثقة مع جمهور جديد.\n\n    • اختر بعناية: لا تنجذب إلى الأعداد الكبيرة للمتابعين، ابحث عن مؤثرين متخصصين (Niche Influencers) يشاركونك نفس القيم والجمهور المستهدف.\n\n    • تحقق من التفاعل الحقيقي: استخدم أدوات تحليل خارجية للتحقق من نسبة التفاعل (Engagement Rate) وعدد المتابعين الوهميين.\n\n5- تحليل البيانات: بوصلة النجاح\n\nالعمل بدون تحليل هو عمل أعمى، كل خطوة تتخذها يجب أن تكون مدعومة بالبيانات.\n\n    • تتبع كل شيء: استخدم Facebook Pixel على موقعك الإلكتروني لتتبع سلوك الزوار، كم منهم أضاف منتجًا إلى السلة؟ كم منهم أتم الشراء؟\n\n    • اجرِ اختبارات A/B: اختبر أشكالًا مختلفة من الإعلانات، النصوص، والصور لمعرفة الأداء الأفضل.\n\nختاماً، النجاح على إنستغرام يتطلب منك التحول من مجرد "نشر محتوى" إلى "بناء استراتيجية مبيعات متكاملة" تركز على فهم العميل، وتقديم القيمة، والتحليل المستمر للنتائج.',
            author: 'فريق بورتال ميديا',
            readTime: '8 دقائق قراءة'
          },
          post2: {
            title: 'الذكاء الاصطناعي (AI) في التسويق الشخصي',
            excerpt: 'في عصر تزدحم فيه قنوات التواصل، لم يعد كافيًا مجرد الوصول إلى جمهورك؛ بل يجب الوصول إليهم برسالة تتحدث إليهم شخصيًا، وهنا يبرز دور الذكاء الاصطناعي (AI)، فهو ليس مجرد أداة مستقبلية، بل هو محرك أساسي يُحدث ثورة في التسويق الشخصي ويمنح علامتك التجارية ميزة تنافسية لا تُضاهى.',
            content: '1- فهم العميل بعمق: من البيانات إلى الرؤى\n\nالتسويق الفعّال يبدأ بالفهم، التقليديًا كانت عملية تحليل بيانات العملاء بطيئة ومجهدة، أما اليوم يستطيع الذكاء الاصطناعي تحليل كميات هائلة من البيانات في لحظات، مما يوفر رؤى دقيقة وقيمة.\n\n    • تحليل السلوك الرقمي: أنظمة الذكاء الاصطناعي تتتبع سلوك المستخدمين على المواقع الإلكترونية ووسائل التواصل الاجتماعي، من خلال تحليل الصفحات التي يزورونها، المنتجات التي يشاهدونها، والوقت الذي يقضونه، يمكن التنبؤ باهتماماتهم وتفضيلاتهم المستقبلية.\n\n    • تحليل المشاعر (Sentiment Analysis): هل تعلم أن الذكاء الاصطناعي يمكنه قراءة آلاف التعليقات والمراجعات لفهم ما يشعر به العملاء تجاه علامتك التجارية؟ هذا التحليل يساعد في اتخاذ قرارات تسويقية سريعة وفعالة والاستجابة للمشاكل قبل أن تتفاقم.\n\n2- التخصيص الآلي: رسائل مصممة لكل شخص\n\nلا يقتصر التسويق الشخصي على مجرد ذكر اسم العميل، بفضل الذكاء الاصطناعي، يمكن الآن تصميم حملات تسويقية ومحتوى وعروض خاصة لكل عميل على حدة، مما يعزز من معدلات التفاعل والتحويل.\n\n    • البريد الإلكتروني الذكي: بدلًا من إرسال رسائل جماعية، يمكن للذكاء الاصطناعي إرسال رسائل تحتوي على توصيات لمنتجات بناءً على تاريخ شراء العميل أو سلوكه السابق، مما يزيد بشكل كبير من معدلات فتح الرسائل والنقر عليها.\n\n    • المحتوى الديناميكي: يمكن للمواقع الإلكترونية المدعومة بالذكاء الاصطناعي تغيير محتواها تلقائيًا لتناسب الزائر، على سبيل المثال، قد تعرض الصفحة الرئيسية لزائر مهتم بالتسويق الإلكتروني مقالات عن هذا الموضوع، بينما تعرض لآخر مهتم بالتطبيقات محتوى مختلفًا تمامًا.\n\n3- تحديات ومستقبل التسويق الشخصي\n\nعلى الرغم من الفوائد الكبيرة، يواجه استخدام الذكاء الاصطناعي في التسويق تحديات تتعلق بخصوصية البيانات، يجب على الشركات بناء ثقة مع عملائها من خلال الشفافية حول كيفية استخدام بياناتهم.\n\nمستقبل التسويق الشخصي يتجه نحو التكامل مع الذكاء الاصطناعي التوليدي (Generative AI)، الذي يمكنه إنشاء محتوى فريد ومبتكر بشكل آلي، مثل النصوص الإعلانية، أو الصور، أو حتى مقاطع الفيديو القصيرة، مما يفتح آفاقًا جديدة للمسوقين.\n\nختاماً، الذكاء الاصطناعي ليس مجرد تقنية حديثة؛ بل هو الشريك الذي سيمكنك من بناء علاقات أقوى وأكثر استدامة مع عملائك، فهل أنت مستعد للاستثمار في هذه الثورة؟',
            author: 'فريق بورتال ميديا',
            readTime: '6 دقائق قراءة'
          },
          post3: {
            title: 'سيكولوجيا السوشيال ميديا: كيف تفهم وتؤثر في عقول جمهورك؟',
            excerpt: 'في عالم يكتظ بالمنشورات والإعلانات، لم يعد التسويق مجرد عرض لمنتج، بل أصبح فنًا لفهم العقل البشري، إنَّ الجانب النفسي للسوشيال ميديا هو البوصلة التي توجه استراتيجياتك، وتساعدك على تحويل المتابعين إلى عملاء مخلصين من خلال بناء روابط عاطفية عميقة.',
            content: '1- لغة الإقناع: مبادئ التأثير الستة في السوشيال ميديا\n\nلا يعتمد التأثير على الحظ، بل على مبادئ نفسية مثبتة، يمكنك توظيفها لتعزيز حملاتك التسويقية:\n\n    • التبادل (Reciprocity): قدم قيمة مجانية لجمهورك (مثل دليل مجاني، أو نصائح حصرية)، وهذا سيجعلهم يشعرون بالرغبة في رد الجميل لك من خلال الشراء أو التفاعل.\n\n    • الندرة (Scarcity): خلق إحساس بأن منتجك أو خدمتك محدودة (مثل "عرض لفترة محدودة" أو "آخر قطعة متاحة") يحفز الشعور بالخوف من الفوات، مما يدفع العميل لاتخاذ قرار الشراء بسرعة.\n\n    • الدليل الاجتماعي (Social Proof): الناس يثقون بما يثق به الآخرون، استخدم مراجعات العملاء الإيجابية، أرقام المبيعات، وشهادات المؤثرين لتعزيز مصداقيتك.\n\n2- فن السرد القصصي (Storytelling): تحويل المشاعر إلى مبيعات\n\nالعقل البشري مصمم ليتفاعل مع القصص، بدلاً من إلقاء الحقائق، اروِ قصة تجعل جمهورك يعيش تجربة.\n\n    • بناء بطل القصة: اجعل عميلك هو بطل القصة الذي يواجه تحديًا، اظهر كيف أن منتجك أو خدمتك ليست مجرد حل، بل هي الأداة التي مكنته من تحقيق النجاح أو التغلب على المشكلة.\n\n    • التركيز على التجربة، لا المنتج: لا تصف مميزات المنتج فقط، ركز على الشعور الذي يمنحه هذا المنتج للمستخدم، هل يمنحه الثقة؟ هل يوفر له الوقت؟ هذه المشاعر هي ما يدفع قرار الشراء.\n\n3- سيكولوجية الألوان والتصميم المرئي\n\nالصور والمحتوى البصري لا يجذب العين فحسب، بل يؤثر على اللاوعي.\n\n    • تأثير الألوان: الألوان لها تأثير نفسي مباشر، استخدم الأزرق لبناء الثقة والموثوقية، الأحمر لإثارة الحماس، والأخضر لإعطاء شعور بالنمو والصحة.\n\n    • استخدام الوجوه البشرية: إظهار وجوه بشرية في إعلاناتك وصورك يربط جمهورك بك عاطفياً، يفضل العقل البشري رؤية الوجوه، ويشعر بالتعاطف والثقة تجاهها.\n\nختاماً: سيكولوجيا السوشيال ميديا هي لغة القوة، عندما تفهم كيف يفكر جمهورك، يمكنك صياغة رسائل لا تصل إلى عيونهم فقط، بل إلى قلوبهم وعقولهم، مما يضمن لك ولاءً لا يتزعزع.',
            author: 'فريق بورتال ميديا',
            readTime: '7 دقائق قراءة'
          },
          post4: {
            title: 'تحليل بيانات العملاء: السر الذي يفرق بين النمو المحدود والنمو الهائل',
            excerpt: 'في عصر تتنافس فيه الشركات على كل عميل، لم تعد الأرقام مجرد إحصاءات، إنها قصة كاملة عن رحلة عملائك، وتفضيلاتهم، وحتى نواياهم المستقبلية، الشركات التي تكتفي بجمع البيانات دون الغوص في أعماقها، تترك على الطاولة أثمن الأصول: الرؤى التي تحول الأعمال التجارية.',
            content: '1- تجاوز الأرقام: فهم النبض الحي للجمهور\n\nالتحليل السطحي يخبرك "ماذا" حدث، أما التحليل العميق فيخبرك "لماذا" حدث، وهو ما يمنحك القوة الحقيقية للتحكم في نموك.\n\n    • فك شفرة سلوك العميل: هل تعلم أن كل نقرة، وكل عملية بحث، وكل ثانية يقضيها العميل على موقعك تحكي قصة؟ التحليل العميق لرحلة العميل يجمع هذه الأجزاء المتفرقة ليُظهِر لك الصورة الكاملة، متى يميل العميل للمغادرة؟ ما الذي يمنعه من إتمام عملية الشراء؟ الإجابة على هذه الأسئلة تمنحك فرصة لتحويل نقاط الضعف إلى نقاط قوة.\n\n    • تخصيص ليس له مثيل: لا توجد فئة "متوسطة" من العملاء، كل عميل فريد من نوعه، من خلال التقسيم السلوكي (Behavioral Segmentation)، يمكنك تصنيف جمهورك إلى شرائح بناءً على سلوكهم الحقيقي، وليس على فرضيات، عملاء يبحثون عن الخصومات، أو عملاء مخلصين، أو عملاء جدد: لكل منهم رسالته التسويقية الخاصة التي تضمن أعلى نسبة استجابة.\n\n2- استشراف المستقبل: من التفاعل إلى التنبؤ\n\nلا يقتصر دور التحليل العميق على فهم الماضي، بل هو أداتك للتنبؤ بالمستقبل.\n\n    • استباق التخلي عن الخدمة (Churn Prediction): تخيل أنك تستطيع التنبؤ بمن سيغادر من عملائك قبل أن يغادر بالفعل. باستخدام خوارزميات الذكاء الاصطناعي (AI)، يمكننا تحديد العلامات التي تُشير إلى أن العميل على وشك التوقف عن الشراء، هذا يمنحك الوقت الكافي لتقديم عرض مخصص أو دعم استثنائي لضمان الاحتفاظ به.\n\n    • توجيه الإعلانات بدقة الليزر: بدلاً من إهدار الميزانية على إعلانات عامة، يتيح لك التحليل العميق استهداف العملاء المحتملين الذين يمتلكون خصائص مشابهة لعملائك الأكثر قيمة، هذه الاستراتيجية لا تزيد المبيعات فقط، بل تقلل التكلفة وتزيد من عائد الاستثمار بشكل هائل.\n\nختاماً: التحليل العميق لبيانات العملاء ليس مجرد خيار، بل هو ضرورة قصوى للشركات التي تسعى للنمو، إنها البوصلة التي توجه قراراتك، وتضمن أن كل خطوة تخطوها نحو الأمام مبنية على حقائق لا على تخمينات، فهل أنت مستعد لفتح صندوق كنوز البيانات الخاص بك؟',
            author: 'فريق بورتال ميديا',
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