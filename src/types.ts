export type Language = 'en' | 'ar';

export interface Service {
  id: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: { en: string; ar: string };
  rating: number;
}

export interface FAQItem {
  id: string;
  question: { en: string; ar: string };
  answer: { en: string; ar: string };
}
