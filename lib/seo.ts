import type { Metadata } from 'next';
import type { FaqItem } from '@/types/content';
import { absoluteUrl, siteConfig } from '@/config/site';

export function createMetadata({
  title,
  description,
  path = '/',
  canonicalPath,
  noindex = false,
}: {
  title: string;
  description: string;
  path?: string;
  canonicalPath?: string;
  noindex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const canonical = absoluteUrl(canonicalPath || path);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.displayName,
      locale: 'tr_TR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.displayName,
    url: siteConfig.domain,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.domain}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.displayName,
    url: siteConfig.domain,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phoneDisplay,
      contactType: 'customer service',
      areaServed: 'Istanbul',
      availableLanguage: ['tr'],
    },
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: siteConfig.displayName,
    url: siteConfig.domain,
    telephone: siteConfig.phoneDisplay,
    image: absoluteUrl(siteConfig.image),
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressCountry: siteConfig.country,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    areaServed: {
      '@type': 'City',
      name: 'Istanbul',
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; href: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType: name,
    areaServed: {
      '@type': 'City',
      name: 'Istanbul',
    },
    provider: {
      '@type': 'Organization',
      name: siteConfig.displayName,
      url: siteConfig.domain,
    },
    url: absoluteUrl(path),
  };
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema({
  title,
  description,
  date,
  path,
}: {
  title: string;
  description: string;
  date: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    author: {
      '@type': 'Organization',
      name: siteConfig.displayName,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.displayName,
    },
    mainEntityOfPage: absoluteUrl(path),
  };
}
