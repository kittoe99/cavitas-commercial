/** Canonical production origin — keep in sync with the Vercel custom domain. */
export const SITE_URL = 'https://www.cavitascommercialcleaning.com';
export const SITE_NAME = 'Cavitas Commercial Cleaning';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/cavitas-commercial-cleaners.png`;
export const SITE_PHONE = '+12067462523';
export const SITE_PHONE_DISPLAY = '(206) 746-2523';

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  /** Optional JSON-LD graph objects (already plain objects) */
  schema?: Record<string, unknown> | Record<string, unknown>[];
};

export const HOME_SEO: PageSeo = {
  path: '/',
  title: 'Cavitas Commercial Cleaning | Office & Janitorial Services',
  description:
    'Commercial cleaning providers, matched to your business. Cavitas connects companies with independent pros for office cleaning, janitorial services, and floor care across the metro area.',
};

export const SERVICE_SEO: Record<string, PageSeo> = {
  '/services/office-cleaning': {
    path: '/services/office-cleaning',
    title: 'Office Cleaning Services | Cavitas Commercial Cleaning',
    description:
      'Match your workplace with independent office cleaning providers. Desks, restrooms, floors, and common areas—scheduled around your hours through Cavitas.',
  },
  '/services/janitorial': {
    path: '/services/janitorial',
    title: 'Janitorial Services | Cavitas Commercial Cleaning',
    description:
      'Match your facility with independent janitorial providers for recurring coverage, supply support, and after-hours cleaning—coordinated through Cavitas.',
  },
  '/services/floor-care': {
    path: '/services/floor-care',
    title: 'Commercial Floor Care | Cavitas Commercial Cleaning',
    description:
      'Match your property with independent floor-care specialists for strip, wax, buff, and carpet extraction. Protect high-traffic commercial surfaces with Cavitas.',
  },
};

export const QUOTE_SEO: PageSeo = {
  path: '/quote',
  title: 'Get a Commercial Cleaning Quote | Cavitas',
  description:
    'Request an online commercial cleaning estimate. Tell Cavitas about your space, schedule, and service needs—we’ll match you with independent providers and confirm pricing.',
};

export const CONTACT_SEO: PageSeo = {
  path: '/contact',
  title: 'Contact Cavitas Commercial Cleaning',
  description:
    'Contact Cavitas Commercial Cleaning 24/7. Call (206) 746-2523 or send a message—we connect businesses with independent commercial cleaning providers.',
};

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized === '/' ? '' : normalized}`;
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: SITE_NAME,
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE,
    description: HOME_SEO.description,
    telephone: SITE_PHONE,
    areaServed: {
      '@type': 'Place',
      name: 'Greater Metro Area',
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    sameAs: [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Commercial cleaning services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Office Cleaning',
            url: absoluteUrl('/services/office-cleaning'),
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Janitorial Services',
            url: absoluteUrl('/services/janitorial'),
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Floor Care',
            url: absoluteUrl('/services/floor-care'),
          },
        },
      ],
    },
  };
}

export function serviceSchema(page: PageSeo, serviceName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_NAME,
      url: SITE_URL,
    },
    description: page.description,
    url: absoluteUrl(page.path),
    areaServed: 'Greater Metro Area',
    serviceType: serviceName,
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
