/**
 * SEO Optimization Utilities
 * Provides helpers for improving SEO with structured data and meta tags
 */

interface SchemaOrganization {
  name: string;
  url: string;
  logo?: string;
  description?: string;
}

interface SchemaLocalBusiness {
  name: string;
  address: string;
  phone: string;
  url: string;
  email?: string;
  priceRange?: string;
}

interface SchemaProduct {
  name: string;
  description: string;
  image?: string;
  price?: string;
  currency?: string;
  availability?: string;
  rating?: number;
  ratingCount?: number;
}

/**
 * Create and inject organization structured data
 */
export const injectOrganizationSchema = (data: SchemaOrganization): void => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    url: data.url,
    ...(data.logo && { logo: data.logo }),
    ...(data.description && { description: data.description }),
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Create and inject local business structured data
 */
export const injectLocalBusinessSchema = (data: SchemaLocalBusiness): void => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: data.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address,
      addressCountry: "KE",
    },
    telephone: data.phone,
    url: data.url,
    ...(data.email && { email: data.email }),
    ...(data.priceRange && { priceRange: data.priceRange }),
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Create and inject product structured data
 */
export const injectProductSchema = (data: SchemaProduct): void => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data.name,
    description: data.description,
    ...(data.image && { image: data.image }),
    ...(data.price &&
      data.currency && {
      offers: {
        "@type": "Offer",
        price: data.price,
        priceCurrency: data.currency,
        ...(data.availability && { availability: data.availability }),
      },
    }),
    ...(data.rating &&
      data.ratingCount && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: data.rating,
        ratingCount: data.ratingCount,
      },
    }),
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Generate and add appropriate meta tags for better SEO
 */
export const addSEOMeta = (name: string, content: string): void => {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
};

/**
 * Generate and add OpenGraph meta tags
 */
export const addOpenGraphMeta = (property: string, content: string): void => {
  let meta = document.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
};

/**
 * Generate robot directives for search engine optimization
 */
export const setRobotDirectives = (
  index: boolean = true,
  follow: boolean = true,
  imageIndex: boolean = true,
  snippet: boolean = true,
  videoPreview: boolean = true
): void => {
  const directives = [
    index ? "index" : "noindex",
    follow ? "follow" : "nofollow",
    imageIndex ? "imageindexable" : "noimageindex",
    snippet ? "max-snippet:-1" : "max-snippet:0",
    videoPreview ? "max-video-preview:-1" : "max-video-preview:0",
  ];

  addSEOMeta("robots", directives.join(", "));
};

/**
 * Add breadcrumb schema for better navigation understanding
 */
export const injectBreadcrumbSchema = (
  breadcrumbs: Array<{ name: string; url: string }>
): void => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `https://morisentreprises.com${item.url}`,
    })),
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Add Contact Point schema for better contact visibility
 */
export const injectContactPointSchema = (
  contactType: string,
  telephone: string,
  email?: string
): void => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    contactType: contactType,
    telephone: telephone,
    ...(email && { email: email }),
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Add CollectionPage schema for product category pages
 */
export const injectCollectionPageSchema = (
  name: string,
  description: string,
  url: string,
  itemCount?: number
): void => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: name,
    description: description,
    url: url,
    ...(itemCount && { numberOfItems: itemCount }),
    mainEntity: {
      "@type": "ItemList",
      name: name,
      ...(itemCount && { numberOfItems: itemCount }),
    },
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-collection-schema", "true");
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Add WebPage schema with specific meta information
 */
export const injectWebPageSchema = (
  title: string,
  description: string,
  url: string,
  image?: string,
  datePublished?: string,
  dateModified?: string
): void => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    ...(image && { image: image }),
    ...(datePublished && { datePublished: datePublished }),
    ...(dateModified && { dateModified: dateModified }),
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-webpage-schema", "true");
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Add FAQ schema for frequently asked questions
 */
export const injectFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
): void => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-faq-schema", "true");
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Add ImageObject schema for images with metadata
 */
export const injectImageSchema = (
  url: string,
  name: string,
  description?: string,
  width?: number,
  height?: number
): void => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    url: url,
    name: name,
    ...(description && { description: description }),
    ...(width && { width: width }),
    ...(height && { height: height }),
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

interface AggregateOfferSchemaProps {
  name: string;
  description: string;
  priceCurrency?: string;
  lowPrice?: string;
  highPrice?: string;
  offerCount?: number;
  image?: string;
  url?: string;
  brand?: string;
  seller?: {
    name: string;
    url: string;
    address?: string;
  };
  priceValidUntil?: string;
  category?: string;
}

/**
 * Add AggregateOffer schema for product listings with multiple offers
 * Enhanced with image, URL, seller info, and brand for better Google visibility
 */
export const injectAggregateOfferSchema = (
  name: string,
  description: string,
  priceCurrency: string = "KES",
  lowPrice?: string,
  highPrice?: string,
  offerCount?: number,
  options?: Omit<AggregateOfferSchemaProps, "name" | "description" | "priceCurrency" | "lowPrice" | "highPrice" | "offerCount">
): void => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: name,
    description: description,
    ...(options?.image && { image: options.image }),
    ...(options?.url && { url: options.url }),
    ...(options?.brand && { brand: { "@type": "Brand", name: options.brand } }),
    ...(options?.category && { category: options.category }),
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: priceCurrency,
      ...(lowPrice && { lowPrice: lowPrice }),
      ...(highPrice && { highPrice: highPrice }),
      ...(offerCount && { offerCount: offerCount }),
      availability: "https://schema.org/InStock",
      ...(options?.priceValidUntil && { priceValidUntil: options.priceValidUntil }),
      ...(options?.seller && {
        seller: {
          "@type": "Organization",
          name: options.seller.name,
          url: options.seller.url,
          ...(options.seller.address && {
            address: {
              "@type": "PostalAddress",
              streetAddress: options.seller.address,
            },
          }),
        },
      }),
    },
  };

  // Add seller at product level if provided (for richer schema)
  if (options?.seller) {
    schema.seller = {
      "@type": "Organization",
      name: options.seller.name,
      url: options.seller.url,
      ...(options.seller.address && {
        address: {
          "@type": "PostalAddress",
          streetAddress: options.seller.address,
        },
      }),
    };
  }

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-aggregate-offer", "true");
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Add Service schema for business services
 */
export const injectServiceSchema = (
  name: string,
  description: string,
  url: string,
  provider: string = "Moris Entreprises",
  areaServed?: string[]
): void => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    url: url,
    provider: {
      "@type": "Organization",
      name: provider,
      url: "https://morisentreprises.com",
    },
    ...(areaServed && {
      areaServed: areaServed.map((area) => ({
        "@type": "Place",
        name: area,
      })),
    }),
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-service-schema", "true");
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};
