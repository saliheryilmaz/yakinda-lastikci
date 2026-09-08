export type FaqItem = {
  question: string;
  answer: string;
};

export type ServicePage = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  summary: string;
  intent: string;
  benefits: string[];
  steps: string[];
  faqs: FaqItem[];
};

export type ServiceArea = {
  slug: string;
  district: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  emergencyNote: string;
  localContext: string;
  nearby: string[];
  faqs: FaqItem[];
};

export type GuideArticle = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  sections: Array<{
    heading: string;
    body: string;
  }>;
};

