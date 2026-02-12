import { site } from "@/lib/content";

export const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": site.brand,
  "description": site.description,
  "email": site.email,
  "telephone": site.phonePrimary,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Milano, 25",
    "addressLocality": "Crema",
    "postalCode": "26013",
    "addressRegion": "CR",
    "addressCountry": "IT"
  },
  "areaServed": ["Crema", "Lodi", "Provincia di Cremona", "Lombardia"],
};
