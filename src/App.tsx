/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Star, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  Home,
  Sparkles,
  Truck,
  Calendar,
  Building2,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';
import { Language, Service, Testimonial, FAQItem } from './types';
import { SERVICES, TESTIMONIALS, FAQS, SERVICE_AREAS, WHATSAPP_NUMBER, PRICING, PROCESS_STEPS } from './constants';

const translations = {
  en: {
    heroTitle: "Trusted Home Cleaning Services in Dubai",
    heroSub: "Reliable, affordable, and professional cleaners at your convenience. Experience the elite standard of cleanliness.",
    bookWhatsApp: "Book Now on WhatsApp",
    getQuote: "Get a Free Quote",
    ourServices: "Our Specialized Services",
    whyChooseUs: "Why Choose Us",
    aboutUsTitle: "Our Heart & Heritage",
    aboutUsStory: "Elite Sparkle is more than just a business; it's a family legacy. Founded by a mother and daughter duo, we bring a personal touch to every home we clean. With years of experience and a deep commitment to excellence, we treat your home like our own.",
    testimonialsTitle: "What Our Clients Say",
    serviceAreasTitle: "Areas We Serve in Dubai",
    bookingTitle: "Ready for a Sparkling Home?",
    bookingSubtitle: "Fill out the form below or message us directly.",
    nameLabel: "Your Name",
    locationLabel: "Location",
    serviceLabel: "Select Service",
    dateLabel: "Preferred Date",
    sendRequest: "Send Booking Request",
    requestSent: "Request Sent Successfully!",
    requestSuccessDesc: "Our team will contact you within 30 minutes to confirm your booking.",
    faqTitle: "Frequently Asked Questions",
    footerTagline: "Elevating the standard of cleaning in Dubai, one home at a time.",
    contactUs: "Contact Us",
    followUs: "Follow Us",
    allRights: "All Rights Reserved",
    qualityCleaners: "vetted & Trusted Cleaners",
    flexibleSchedule: "Flexible Scheduling",
    fairPricing: "Affordable & Fair Pricing",
    attentionToDetail: "Precision & Care",
    professionalService: "Professional & Discrete",
    trustBadge: "100% Satisfaction Guaranteed",
    pricingTitle: "Elite Packages",
    pricingSub: "Choose a plan that fits your lifestyle. Premium quality guaranteed.",
    processTitle: "The Elite Experience",
    processSub: "How we ensure your home sparkles with zero hassle.",
    aed: "AED"
  },
  ar: {
    heroTitle: "خدمات تنظيف منزلية موثوقة في دبي",
    heroSub: "عمال تنظيف موثوقون وبأسعار معقولة ومحترفون لراحتك. اختبر مستوى النخبة في النظافة.",
    bookWhatsApp: "احجز الآن عبر واتساب",
    getQuote: "احصل على عرض سعر مجاني",
    ourServices: "خدماتنا المتخصصة",
    whyChooseUs: "لماذا تختارنا",
    aboutUsTitle: "قلبنا وتراثنا",
    aboutUsStory: "إيليت سباركل هي أكثر من مجرد عمل تجاري؛ إنها إرث عائلي. أسستها أم وابنتها، ونحن نضفي لمسة شخصية على كل منزل ننظفه. مع سنوات من الخبرة والتزام عميق بالتميز، نتعامل مع منزلك كأنه منزلنا.",
    testimonialsTitle: "ماذا يقول عملاؤنا",
    serviceAreasTitle: "المناطق التي نخدمها في دبي",
    bookingTitle: "هل أنت مستعد لمنزل متألق؟",
    bookingSubtitle: "املأ النموذج أدناه أو راسلنا مباشرة.",
    nameLabel: "اسمك",
    locationLabel: "الموقع",
    serviceLabel: "اختر الخدمة",
    dateLabel: "التاريخ المفضل",
    sendRequest: "إرسال طلب الحجز",
    requestSent: "تم إرسال الطلب بنجاح!",
    requestSuccessDesc: "سيتصل بك فريقنا في غضون 30 دقيقة لتأكيد حجزك.",
    faqTitle: "الأسئلة الشائعة",
    footerTagline: "رفع معايير التنظيف في دبي، منزلاً تلو الآخر.",
    contactUs: "اتصل بنا",
    followUs: "تابعنا",
    allRights: "جميع الحقوق محفوظة",
    qualityCleaners: "عمال تنظيف معتمدون وموثوقون",
    flexibleSchedule: "جدولة مرنة",
    fairPricing: "أسعار عادلة ومعقولة",
    attentionToDetail: "الدقة والعناية",
    professionalService: "خدمة احترافية وسرية",
    trustBadge: "ضمان الرضا بنسبة 100%",
    pricingTitle: "باقات النخبة",
    pricingSub: "اختر الباقة التي تناسب أسلوب حياتك. جودة ممتازة مضمونة.",
    processTitle: "تجربة النخبة",
    processSub: "كيف نضمن تألق منزلك دون أي عناء.",
    aed: "درهم"
  }
};

const IconComponent = ({ name, size = 24, className = "" }: { name: string, size?: number, className?: string }) => {
  const icons: Record<string, any> = { Home, Sparkles, Truck, Calendar, Building2, MessageCircle, CheckCircle2, Star };
  const LucideIcon = icons[name] || Home;
  return <LucideIcon size={size} className={className} />;
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  
  const t = translations[lang];

  const isRtl = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=Hello%20Elite%20Sparkle!%20I'd%20like%20to%20book%20a%20cleaning%20service.`, '_blank');
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStatus('loading');
    setTimeout(() => {
      setBookingStatus('success');
      setTimeout(() => setBookingStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className={`min-h-screen bg-beige overflow-x-hidden ${isRtl ? 'font-serif' : 'font-sans'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-beige/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-navy font-semibold uppercase tracking-widest text-xs">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollTo('hero')}>
            <svg width="40" height="40" viewBox="0 0 100 100" className="text-gold fill-current">
              <path d="M50 5 L95 40 V90 H5 V40 L50 5 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M50 20 L80 45 V85 H20 V45 L50 20 Z" fill="currentColor" opacity="0.2"/>
              <circle cx="50" cy="52" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M50 40 V64 M38 52 H62" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M85 15 L88 22 L95 25 L88 28 L85 35 L82 28 L75 25 L82 22 Z" fill="currentColor"/>
            </svg>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tighter leading-none">Elite Sparkle</span>
              <span className="text-[8px] tracking-[0.4em] text-gold">DUBAI</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo('services')} className="luxury-underline">Services</button>
            <button onClick={() => scrollTo('about')} className="luxury-underline">About</button>
            <button onClick={() => scrollTo('contact')} className="luxury-underline">Contact</button>
            <button 
              onClick={toggleLang} 
              className="flex items-center space-x-2 bg-navy text-gold px-4 py-2 rounded-full hover:bg-navy/90 transition-colors"
            >
              <Globe size={14} className={isRtl ? 'ml-2' : ''} />
              <span>{lang === 'en' ? 'Arabic' : 'English'}</span>
            </button>
            <button onClick={openWhatsApp} className="bg-gold text-navy px-6 py-2 rounded-full hover:bg-gold-light transition-colors shadow-lg shadow-gold/20">
              {t.bookWhatsApp}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleLang} className="p-2 text-navy">
              <Globe size={20} />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-navy">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-beige border-t border-navy/10 shadow-xl p-8 flex flex-col space-y-6 md:hidden"
            >
              <button onClick={() => scrollTo('services')} className="text-xl serif italic">{isRtl ? 'خدماتنا' : 'Services'}</button>
              <button onClick={() => scrollTo('about')} className="text-xl serif italic">{isRtl ? 'عن الشركة' : 'About'}</button>
              <button onClick={() => scrollTo('contact')} className="text-xl serif italic">{isRtl ? 'اتصل بنا' : 'Contact'}</button>
              <button onClick={openWhatsApp} className="bg-gold text-navy py-4 rounded-full font-bold text-center">
                {t.bookWhatsApp}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center bg-navy text-beige text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
              alt="Luxury Dubai Penthouse" 
              className="w-full h-full object-cover opacity-50 shadow-inner"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-transparent to-navy"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl px-6"
        >
          <div className="flex justify-center mb-8">
            <motion.div 
              initial={{ rotate: -15, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
              className="bg-gold/20 backdrop-blur-md p-3 rounded-2xl border border-gold/30"
            >
              <Sparkles className="text-gold" size={32} />
            </motion.div>
          </div>
          <h1 className="text-6xl md:text-8xl serif italic leading-none mb-8 tracking-tight">
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto text-beige/80 leading-relaxed">
            {t.heroSub}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={openWhatsApp}
              className="group w-full sm:w-auto bg-gold text-navy px-12 py-6 rounded-full font-bold text-xl hover:bg-gold-light transition-all transform hover:scale-105 shadow-2xl shadow-gold/30 flex items-center justify-center space-x-4"
            >
              <MessageCircle size={24} className={isRtl ? 'ml-4' : ''} />
              <span>{t.bookWhatsApp}</span>
            </button>
            <button 
              onClick={() => scrollTo('booking')}
              className="w-full sm:w-auto border-2 border-beige/40 bg-white/5 backdrop-blur-md px-12 py-6 rounded-full font-bold text-xl hover:bg-white/10 transition-all"
            >
              {t.getQuote}
            </button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold">{isRtl ? 'اكتشف المزيد' : 'Experience'}</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
        </motion.div>
      </section>

      {/* Trust Stats */}
      <section className="bg-white border-y border-navy/5 py-16 px-6 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 lg:gap-24 text-navy">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center text-gold">
              <ShieldCheck size={28} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none">100%</span>
              <span className="text-[10px] uppercase tracking-widest text-navy/40 mt-1 font-bold">{t.qualityCleaners}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center text-gold">
              <Clock size={28} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none">24/7</span>
              <span className="text-[10px] uppercase tracking-widest text-navy/40 mt-1 font-bold">{t.flexibleSchedule}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center text-gold">
              <Zap size={28} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none">{isRtl ? 'أسعار مميزة' : 'Elite Pack'}</span>
              <span className="text-[10px] uppercase tracking-widest text-navy/40 mt-1 font-bold">{t.fairPricing}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Portfolio / Gallery Section */}
      <section className="py-24 bg-beige-dark px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-gold uppercase tracking-[0.3em] text-sm font-bold block mb-4">{isRtl ? 'نظرة على جودتنا' : 'A Glimpse of Perfection'}</span>
              <h2 className="text-5xl md:text-6xl serif italic text-navy leading-tight">{isRtl ? 'المنازل الأكثر تميزاً في دبي' : 'Servicing Dubai’s Most Prestigious Homes'}</h2>
            </div>
            <button className="text-sm font-bold uppercase tracking-widest luxury-underline py-2">{isRtl ? 'عرض المعرض كاملاً' : 'View Full Gallery'}</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px]">
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-8 relative overflow-hidden rounded-[40px] group"
            >
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000" alt="Penthouse Cleaning" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-all"></div>
              <div className="absolute bottom-10 left-10 text-beige">
                <span className="text-[10px] uppercase tracking-widest font-bold text-gold">Dubai Marina</span>
                <h4 className="text-3xl serif italic">The Marina Penthouse</h4>
              </div>
            </motion.div>
            
            <div className="md:col-span-4 flex flex-col gap-6">
              <motion.div 
                whileHover={{ scale: 0.98 }}
                className="h-1/2 relative overflow-hidden rounded-[40px] group"
              >
                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all" alt="Villa Cleaning" referrerPolicy="no-referrer" />
                <div className="absolute bottom-8 left-8">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gold">Palm Jumeirah</span>
                  <h4 className="text-2xl serif italic text-white">Island Estate</h4>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 0.98 }}
                className="h-1/2 relative overflow-hidden rounded-[40px] group bg-navy flex items-center justify-center p-12 text-center border-4 border-gold/10"
              >
                <div>
                  <h4 className="text-2xl serif italic text-gold mb-4">{isRtl ? 'رعاية القصور' : 'Estate Management'}</h4>
                  <p className="text-xs text-beige/50 leading-relaxed font-light italic">
                    {isRtl ? 'خبرة متخصصة في العناية بالرخام والحرير والأثاث الفاخر.' : 'Specialized care for marble, silk fabrics, and bespoke designer furniture.'}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold block mb-4">{t.processTitle}</span>
            <h2 className="text-4xl md:text-5xl serif italic text-navy mb-4">{t.processSub}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-beige rounded-2xl flex items-center justify-center text-navy group-hover:bg-gold group-hover:text-white transition-all duration-500 mb-8 relative z-10 shadow-lg">
                  <IconComponent name={step.icon} size={32} />
                  <span className="absolute -top-4 -right-4 w-8 h-8 bg-navy text-gold rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">
                    {step.id}
                  </span>
                </div>
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-[2px] bg-gradient-to-r from-gold/20 to-transparent -z-0"></div>
                )}
                <h4 className="text-xl serif font-bold mb-3 text-navy">{step.title[lang]}</h4>
                <p className="text-navy/50 text-sm font-medium leading-relaxed">{step.desc[lang]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl serif italic text-navy mb-4">{t.ourServices}</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-10 rounded-2xl border border-navy/5 shadow-sm hover:shadow-xl hover:shadow-navy/5 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-beige-dark -mr-12 -mt-12 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-navy text-gold rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-navy transition-colors shadow-lg">
                  <IconComponent name={service.icon} size={32} />
                </div>
                <h3 className="text-2xl serif font-bold mb-4 text-navy">{service.title[lang]}</h3>
                <p className="text-navy/60 leading-relaxed mb-6 font-medium">
                  {service.description[lang]}
                </p>
                <button 
                  onClick={openWhatsApp}
                  className="flex items-center text-gold font-bold uppercase tracking-widest text-xs hover:text-navy transition-colors"
                >
                  {isRtl ? 'احجز الآن' : 'Book Now'} <ArrowRight size={14} className={`${isRtl ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Us (Family Story) */}
      <section id="about" className="py-24 bg-navy text-beige relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-bold block">{isRtl ? 'قصتنا' : 'Our Story'}</span>
            <h2 className="text-5xl md:text-6xl serif italic">{t.aboutUsTitle}</h2>
            <p className="text-lg leading-relaxed text-beige/70 font-light italic">
              "{t.aboutUsStory}"
            </p>
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-gold p-1">
                  <img src="https://i.pravatar.cc/150?u=mother" className="w-full h-full rounded-full object-cover" alt="Founder" />
                </div>
                <span className="text-[10px] mt-2 uppercase tracking-widest text-gold">{isRtl ? 'الأم' : 'Mother'}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-gold p-1">
                  <img src="https://i.pravatar.cc/150?u=daughter" className="w-full h-full rounded-full object-cover" alt="Co-founder" />
                </div>
                <span className="text-[10px] mt-2 uppercase tracking-widest text-gold">{isRtl ? 'الابنة' : 'Daughter'}</span>
              </div>
            </div>
            <button onClick={openWhatsApp} className="inline-flex items-center space-x-3 bg-gold text-navy px-8 py-4 rounded-full font-bold hover:bg-gold-light transition-all">
              <span>{isRtl ? 'تحدث إلى العائلة' : 'Speak to the Family'}</span>
              <MessageCircle size={18} className={isRtl ? 'mr-2' : ''} />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden border-4 border-gold/20 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?q=80&w=1974&auto=format&fit=crop" alt="Family cleaning service" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
            </div>
            {/* SEO Overlay Box */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-2xl hidden md:block max-w-[280px]">
              <div className="flex items-center space-x-2 text-gold mb-2">
                <CheckCircle2 size={24} />
                <span className="font-bold text-navy">{isRtl ? 'موثوق في دبي' : 'Trusted in Dubai'}</span>
              </div>
              <p className="text-xs text-navy/60 font-medium">
                {isRtl ? 'تنظيف القصور والشقق في دبي مارينا ووسط المدينة منذ عام 2018.' : 'Cleaning villas and apartments in Dubai Marina and Downtown since 2018.'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold block mb-4">{t.pricingTitle}</span>
            <h2 className="text-4xl md:text-5xl serif italic text-navy mb-4">{t.pricingSub}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {PRICING.map((plan, idx) => (
              <motion.div 
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-10 rounded-[40px] border-2 ${plan.recommended ? 'border-gold bg-navy text-white' : 'border-navy/5 bg-beige/30 text-navy'} transition-transform hover:scale-[1.02] duration-500 shadow-xl`}
              >
                {plan.recommended && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gold text-navy px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold">
                    {isRtl ? 'الأكثر طلباً' : 'Most Popular'}
                  </div>
                )}
                <h4 className={`text-xl font-bold uppercase tracking-widest mb-2 ${plan.recommended ? 'text-gold' : 'text-navy/40'}`}>
                  {plan.name[lang]}
                </h4>
                <div className="flex items-baseline space-x-2 mb-8">
                  <span className={`text-5xl serif italic ${plan.recommended ? 'text-beige' : 'text-navy'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm opacity-60 font-bold ${isRtl ? 'mr-2' : ''}`}>
                    {t.aed} / {plan.period[lang]}
                  </span>
                </div>
                <div className="space-y-4 mb-10">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-3 text-sm font-medium">
                      <CheckCircle2 size={16} className={`text-gold flex-shrink-0 ${isRtl ? 'ml-3' : ''}`} />
                      <span className="opacity-80">{feature[lang]}</span>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={openWhatsApp}
                  className={`w-full py-4 rounded-full font-bold transition-all ${plan.recommended ? 'bg-gold text-navy hover:bg-gold-light' : 'bg-navy text-gold hover:bg-navy/90 shadow-lg'}`}
                >
                  {isRtl ? 'ابدأ الآن' : 'Get Started'}
                </button>
              </motion.div>
            ))}
          </div>
          
          <p className="mt-12 text-center text-navy/40 text-[10px] uppercase tracking-widest font-bold italic">
            * {isRtl ? 'تطبق الشروط والأحكام. قد تختلف الأسعار حسب حجم المنزل والحالة.' : 'T&Cs apply. Pricing may vary based on property size and condition.'}
          </p>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative group cursor-pointer overflow-hidden rounded-[32px] border-8 border-white shadow-2xl">
            <div className="flex w-[200%] h-[400px]">
              <div className="w-1/2 relative">
                <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Before" />
                <div className="absolute top-4 left-4 bg-navy/80 text-gold px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-full">Before</div>
              </div>
              <div className="w-1/2 relative">
                <img src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover border-l-4 border-gold" alt="After" />
                <div className="absolute top-4 left-4 bg-gold text-navy px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-full">After</div>
              </div>
            </div>
            <motion.div 
              initial={{ x: "0%" }}
              whileHover={{ x: "-50%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 bg-transparent flex"
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-navy/90 text-gold px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {isRtl ? 'اسحب لرؤية الفرق' : 'Hover to see the magic'}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-bold block">{isRtl ? 'النتيجة' : 'The Result'}</span>
            <h2 className="text-4xl md:text-5xl serif italic text-navy">{isRtl ? 'التحول المذهل' : 'Breathtaking Transformations'}</h2>
            <p className="text-navy/60 leading-relaxed font-medium">
              {isRtl ? 'نحن لا ننظف فقط، نحن نحول مساحتك. من الزوايا المهملة إلى الأسطح المتألقة، انتباهنا للتفاصيل هو ما يميزنا.' : 'We don’t just clean; we transform your space. From neglected corners to sparkling surfaces, our attention to detail is what sets us apart as Dubai’s premier choice.'}
            </p>
            <ul className="space-y-3">
              {[
                isRtl ? 'إزالة البقع المستعصية' : 'Removal of stubborn stains',
                isRtl ? 'تلميع الأسطح الفاخرة' : 'Polishing of luxury surfaces',
                isRtl ? 'تعقيم المناطق عالية اللمس' : 'Sanitization of high-touch areas'
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-sm font-bold text-navy/80">
                  <CheckCircle2 size={16} className={`text-gold ${isRtl ? 'ml-3' : ''}`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl serif italic text-navy mb-4">{t.testimonialsTitle}</h2>
            <div className="flex justify-center space-x-1 text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testi, idx) => (
              <motion.div 
                key={testi.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl border border-navy/5 shadow-lg shadow-navy/[0.02]"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h4 className="font-bold text-navy">{testi.name}</h4>
                    <span className="text-[10px] uppercase tracking-widest text-navy/40">{testi.location}</span>
                  </div>
                  <div className="text-gold flex space-x-0.5">
                    {[...Array(testi.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                </div>
                <p className="text-navy/70 leading-relaxed italic">"{testi.text[lang]}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-24 px-6 relative bg-navy text-beige">
        <div className="max-w-3xl mx-auto bg-white rounded-[40px] overflow-hidden shadow-2xl grid grid-cols-1">
          <div className="p-12 text-navy">
            <AnimatePresence mode="wait">
              {bookingStatus === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="py-12 text-center flex flex-col items-center"
                >
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-4xl serif italic mb-4">{t.requestSent}</h2>
                  <p className="text-navy/60 font-medium mb-10 max-w-sm mx-auto">
                    {t.requestSuccessDesc}
                  </p>
                  <button 
                    onClick={() => setBookingStatus('idle')}
                    className="bg-navy text-gold px-12 py-4 rounded-full font-bold uppercase tracking-widest text-[10px]"
                  >
                    {isRtl ? 'حجز جديد' : 'New Booking'}
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 className="text-4xl serif italic mb-2 text-center">{t.bookingTitle}</h2>
                  <p className="text-navy/60 text-sm text-center mb-10">{t.bookingSubtitle}</p>

                  <form className="space-y-6" onSubmit={handleBooking}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 ml-1">{t.nameLabel}</label>
                        <input required type="text" placeholder="John Doe" className="w-full bg-beige/50 border border-navy/10 rounded-xl p-4 focus:outline-none focus:border-gold transition-colors" />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 ml-1">{t.locationLabel}</label>
                        <input required type="text" placeholder="Dubai Marina" className="w-full bg-beige/50 border border-navy/10 rounded-xl p-4 focus:outline-none focus:border-gold transition-colors" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 ml-1">{t.serviceLabel}</label>
                        <select className="w-full bg-beige/50 border border-navy/10 rounded-xl p-4 focus:outline-none focus:border-gold transition-colors">
                          {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title[lang]}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 ml-1">{t.dateLabel}</label>
                        <input required type="date" className="w-full bg-beige/50 border border-navy/10 rounded-xl p-4 focus:outline-none focus:border-gold transition-colors" />
                      </div>
                    </div>
                    <button 
                      type="submit"
                      disabled={bookingStatus === 'loading'}
                      className="w-full bg-navy text-gold py-5 rounded-full font-bold text-lg hover:bg-navy/90 transition-all flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {bookingStatus === 'loading' ? (
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        >
                          <Sparkles size={24} />
                        </motion.div>
                      ) : (
                        <>
                          <span>{t.sendRequest}</span>
                          <ArrowRight size={20} className={isRtl ? 'mr-3 rotate-180' : 'ml-3'} />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-12 flex items-center justify-center space-x-4 border-t border-navy/5 pt-8">
              <span className="text-xs uppercase tracking-widest font-bold text-navy/40">{isRtl ? 'أو عبر' : 'Or via'}</span>
              <button 
                onClick={openWhatsApp}
                className="flex items-center space-x-2 text-green-600 font-bold hover:scale-105 transition-transform"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas (SEO) */}
      <section className="py-24 px-6 bg-beige-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-gold uppercase tracking-[0.3em] text-sm font-bold block mb-2">{isRtl ? 'محلي' : 'Local'}</span>
              <h2 className="text-4xl md:text-5xl serif italic text-navy">{t.serviceAreasTitle}</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {SERVICE_AREAS.map((area, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-navy/60 group cursor-default">
                <MapPin size={14} className="text-gold group-hover:scale-125 transition-transform" />
                <span className="text-xs font-semibold uppercase tracking-widest">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl serif italic text-center text-navy mb-16">{t.faqTitle}</h2>
        <div className="space-y-4">
          {FAQS.map(faq => (
            <div key={faq.id} className="bg-white rounded-2xl border border-navy/5 overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-navy">
                  <span>{faq.question[lang]}</span>
                  <ChevronDown className="group-open:rotate-180 transition-transform text-gold" />
                </summary>
                <div className="px-6 pb-6 text-navy/60 leading-relaxed font-medium">
                  {faq.answer[lang]}
                </div>
              </details>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-navy text-beige py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <svg width="48" height="48" viewBox="0 0 100 100" className="text-gold fill-current">
                <path d="M50 5 L95 40 V90 H5 V40 L50 5 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M50 20 L80 45 V85 H20 V45 L50 20 Z" fill="currentColor" opacity="0.2"/>
                <circle cx="50" cy="52" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M50 40 V64 M38 52 H62" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M85 15 L88 22 L95 25 L88 28 L85 35 L82 28 L75 25 L82 22 Z" fill="currentColor"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tighter leading-none">Elite Sparkle</span>
                <span className="text-[10px] tracking-[0.4em] text-gold font-bold">DUBAI</span>
              </div>
            </div>
            <p className="text-beige/50 text-sm leading-relaxed">
              {t.footerTagline}
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest font-bold text-gold">{isRtl ? 'روابط سريعة' : 'Quick Links'}</h4>
            <div className="flex flex-col space-y-4 text-sm font-medium">
              <button onClick={() => scrollTo('services')} className="hover:text-gold text-left transition-colors whitespace-nowrap">{isRtl ? 'خدماتنا' : 'Our Services'}</button>
              <button onClick={() => scrollTo('about')} className="hover:text-gold text-left transition-colors whitespace-nowrap">{isRtl ? 'قصتنا' : 'Our Story'}</button>
              <button onClick={() => scrollTo('booking')} className="hover:text-gold text-left transition-colors whitespace-nowrap">{isRtl ? 'احجز الآن' : 'Book a Clean'}</button>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest font-bold text-gold">{t.contactUs}</h4>
            <div className="flex flex-col space-y-4 text-sm font-medium">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gold" />
                <span>{WHATSAPP_NUMBER}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle size={16} className="text-gold" />
                <span>info@elitesparkle.ae</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-gold" />
                <span>Business Bay, Dubai, UAE</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest font-bold text-gold">{t.followUs}</h4>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full border border-beige/20 flex items-center justify-center hover:bg-gold hover:text-navy transition-all cursor-pointer">
                <span className="font-bold">Ig</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-beige/20 flex items-center justify-center hover:bg-gold hover:text-navy transition-all cursor-pointer">
                <span className="font-bold">Fb</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-beige/10 mt-24 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-beige/30 font-bold">
          <span>&copy; {new Date().getFullYear()} Elite Sparkle Dubai. {t.allRights}</span>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <motion.button 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={openWhatsApp}
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all flex items-center justify-center group"
      >
        <MessageCircle size={32} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap px-0 group-hover:px-4 font-bold">
          {lang === 'en' ? 'Chat with us' : 'تحدث معنا'}
        </span>
      </motion.button>
    </div>
  );
}
