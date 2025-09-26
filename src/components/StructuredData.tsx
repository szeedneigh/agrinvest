export function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AGRiNVEST",
    "alternateName": "AGRiNVEST Philippines",
    "url": "https://agrinvest.ph",
    "logo": "https://agrinvest.ph/logo.png",
    "description": "Agricultural investment platform connecting Filipino farmers with investors for sustainable growth",
    "foundingDate": "2025",
    "founders": [
      {
        "@type": "Person",
        "name": "AGRiNVEST Team"
      }
    ],
    "industry": "Agricultural Finance",
    "numberOfEmployees": "10-50",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+63-2-123-4567",
        "contactType": "Customer Service",
        "email": "hello@agrinvest.ph",
        "availableLanguage": ["English", "Filipino"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PH",
      "addressLocality": "Manila",
      "addressRegion": "Metro Manila"
    },
    "sameAs": [
      "https://facebook.com/agrinvestph",
      "https://instagram.com/agrinvestph",
      "https://linkedin.com/company/agrinvestph",
      "https://twitter.com/agrinvestph"
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AGRiNVEST",
    "url": "https://agrinvest.ph",
    "description": "Agricultural investment platform for supporting Filipino farmers",
    "inLanguage": "en-PH",
    "isPartOf": {
      "@type": "Organization",
      "name": "AGRiNVEST"
    }
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "AGRiNVEST Investment Platform",
    "provider": {
      "@type": "Organization",
      "name": "AGRiNVEST"
    },
    "description": "Interest-free agricultural investment platform connecting investors with Filipino farmers",
    "serviceType": "Agricultural Investment",
    "areaServed": {
      "@type": "Country",
      "name": "Philippines"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Investors and Farmers"
    },
    "offers": {
      "@type": "Offer",
      "description": "Minimum ₱50 investment with interest-free capital for farmers",
      "price": "50",
      "priceCurrency": "PHP"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceData),
        }}
      />
    </>
  );
}
