import { Service, Testimonial, FAQItem } from './types';

export const WHATSAPP_NUMBER = "+971509641753"; // Placeholder

export const SERVICES: Service[] = [
  {
    id: 'home-cleaning',
    title: { en: 'Home Cleaning', ar: 'تنظيف المنزل' },
    description: { en: 'Regular cleaning services for your villa or apartment in Dubai.', ar: 'خدمات تنظيف منتظمة لفيلاك أو شقتك في دبي.' },
    icon: 'Home'
  },
  {
    id: 'deep-cleaning',
    title: { en: 'Deep Cleaning', ar: 'تنظيف عميق' },
    description: { en: 'Intensive cleaning for every nook and cranny of your space.', ar: 'تنظيف مكثف لكل زاوية وركن في مساحتك.' },
    icon: 'Sparkles'
  },
  {
    id: 'move-in-out',
    title: { en: 'Move In/Out Cleaning', ar: 'تنظيف الانتقال' },
    description: { en: 'Hassle-free cleaning before you move in or after you move out.', ar: 'تنظيف خالٍ من المتاعب قبل الانتقال أو بعده.' },
    icon: 'Truck'
  },
  {
    id: 'airbnb-cleaning',
    title: { en: 'Airbnb Cleaning', ar: 'تنظيف إير بي إن بي' },
    description: { en: 'Fast turnaround cleaning specialized for short-term rentals.', ar: 'تنظيف سريع متخصص للإيجارات قصيرة الأجل.' },
    icon: 'Calendar'
  },
  {
    id: 'office-cleaning',
    title: { en: 'Office Cleaning', ar: 'تنظيف المكاتب' },
    description: { en: 'Professional cleaning to keep your workplace sparkling.', ar: 'تنظيف احترافي للحفاظ على تألق مكان عملك.' },
    icon: 'Building2'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah J.',
    location: 'Dubai Marina',
    text: { 
      en: 'Elite Sparkle is simply the best. They are punctual, thorough, and very professional. Recommended!', 
      ar: 'إيليت سباركل هي الأفضل ببساطة. إنهم منضبطون ودقيقون ومحترفون للغاية. موصى به!' 
    },
    rating: 5
  },
  {
    id: '2',
    name: 'Ahmed K.',
    location: 'Downtown Dubai',
    text: { 
      en: 'Great attention to detail. My apartment has never looked this clean. The gold standard in Dubai.', 
      ar: 'اهتمام كبير بالتفاصيل. شقتي لم تبدُ بهذا النظافة من قبل. المعيار الذهبي في دبي.' 
    },
    rating: 5
  },
  {
    id: '3',
    name: 'Elena R.',
    location: 'JVC',
    text: { 
      en: 'The mother-daughter story touched my heart. You can really feel the care they put into their work.', 
      ar: 'قصة الأم والابنة لمست قلبي. يمكنك حقاً الشعور بالعناية التي يضعونها في عملهم.' 
    },
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: '1',
    question: { en: 'What is your pricing?', ar: 'ما هي أسعاركم؟' },
    answer: { 
      en: 'Our rates start from 35 AED per hour. We offer competitive packages for deep cleaning.', 
      ar: 'تبدأ أسعارنا من 35 درهم إماراتي في الساعة. نحن نقدم باقات تنافسية للتنظيف العميق.' 
    }
  },
  {
    id: '2',
    question: { en: 'Do you provide cleaning supplies?', ar: 'هل توفرون أدوات التنظيف؟' },
    answer: { 
      en: 'By default, we ask clients to provide supplies, but we can bring our premium eco-friendly materials for a small extra fee.', 
      ar: 'بشكل افتراضي، نطلب من العملاء توفير الأدوات، ولكن يمكننا إحضار موادنا المتميزة الصديقة للبيئة مقابل رسوم إضافية بسيطة.' 
    }
  },
  {
    id: '3',
    question: { en: 'Can I book for the same day?', ar: 'هل يمكنني الحجز لنفس اليوم؟' },
    answer: { 
      en: 'Yes, if we have availability! WhatsApp us for immediate confirmation.', 
      ar: 'نعم، إذا كان لدينا شاغر! راسلنا عبر الواتساب للحصول على تأكيد فوري.' 
    }
  }
];

export const SERVICE_AREAS = [
  'Dubai Marina', 'JVC', 'Downtown Dubai', 'Business Bay', 'Deira', 'JLT', 'Palm Jumeirah', 'Arabian Ranches', 'Mirdif', 'Al Barsha'
];

export const PRICING = [
  {
    id: 'basic',
    name: { en: 'Essential Clean', ar: 'التنظيف الأساسي' },
    price: '35',
    period: { en: 'per hour', ar: 'لكل ساعة' },
    features: [
      { en: 'Bathroom & Kitchen', ar: 'الحمام والمطبخ' },
      { en: 'Dusting & Mopping', ar: 'مسح الغبار والتنظيف' },
      { en: 'Linen Change', ar: 'تغيير الشراشف' },
      { en: 'Vetted Professional', ar: 'محترف معتمد' }
    ],
    recommended: false
  },
  {
    id: 'pro',
    name: { en: 'Deep Sparkle', ar: 'التألق العميق' },
    price: '299',
    period: { en: 'per session', ar: 'للجلسة الواحدة' },
    features: [
      { en: 'Everything in Essential', ar: 'كل ما في الأساسي' },
      { en: 'Oven & Fridge Interior', ar: 'تنظيف الفرن والثلاجة من الداخل' },
      { en: 'Inside Cabinets', ar: 'تنظيف الخزائن من الداخل' },
      { en: 'Grout Scrubbing', ar: 'فرك الفواصل وفتحات التهوية' }
    ],
    recommended: true
  },
  {
    id: 'airbnb',
    name: { en: 'Guest Ready', ar: 'جاهزية الضيوف' },
    price: '199',
    period: { en: 'turnaround', ar: 'لكل دورة' },
    features: [
      { en: 'Inventory Check', ar: 'فحص المخزون' },
      { en: 'Laundry Management', ar: 'إدارة الغسيل' },
      { en: 'Toiletries Restock', ar: 'إعادة تعبئة مستلزمات الحمام' },
      { en: 'Photo Verification', ar: 'التحقق بالصور' }
    ],
    recommended: false
  }
];

export const PROCESS_STEPS = [
  {
    id: 1,
    title: { en: 'Seamless Booking', ar: 'حجز سلس' },
    desc: { en: 'Message us on WhatsApp or fill the form in seconds.', ar: 'راسلنا عبر واتساب أو املأ النموذج في ثوانٍ.' },
    icon: 'MessageCircle'
  },
  {
    id: 2,
    title: { en: 'Elite Match', ar: 'مطابقة النخبة' },
    desc: { en: 'We assign our most suitable expert for your specific needs.', ar: 'نقوم بتعيين خبيرنا الأكثر ملاءمة لاحتياجاتك الخاصة.' },
    icon: 'CheckCircle2'
  },
  {
    id: 3,
    title: { en: 'Premium Service', ar: 'خدمة متميزة' },
    desc: { en: 'Relax as we transform your space with precision.', ar: 'استرخِ بينما نقوم بتحويل مساحتك بكل دقة.' },
    icon: 'Sparkles'
  },
  {
    id: 4,
    title: { en: 'Direct Feedback', ar: 'ملاحظات مباشرة' },
    desc: { en: 'We only finish when you are 100% sparkling satisfied.', ar: 'لا ننتهي إلا عندما تكون راضياً بنسبة 100٪.' },
    icon: 'Star'
  }
];
