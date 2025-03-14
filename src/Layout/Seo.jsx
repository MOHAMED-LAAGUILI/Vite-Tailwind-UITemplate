/* eslint-disable react/prop-types */
import Helmet from 'react-helmet';

const seoData = {
  defaultTitle: 'One UI',
  logo: 'https://portfolio.smakosh.com/favicon/favicon-512.png',
  author: 'MOHAMED LAAGUILI',
  url: 'https://laaguili-dev.app.genez.io/',
  legalName: 'MOHAMED LAAGUILI',
  defaultDescription: 'I’m MOHAMED LAAGUILI I’m a FullStack engineer!',
  socialLinks: {
    facebook: 'https://www.facebook.com/profile.php?id=100014521591779',
    github: 'https://www.github.com/MOHAMED-LAAGUILI',
    linkedin: 'https://www.linkedin.com/in/mohamedlaaguili2001/',
    discord: 'https://discord.com/users/1316675038598139936',
  },
  themeColor: '#6b63ff',
  backgroundColor: '#6b63ff',
  address: {
    city: 'City',
    region: 'Region',
    country: 'Country',
    zipCode: 'ZipCode',
  },
  contact: {
    email: 'email',
    phone: 'phone number',
  },
  foundingDate: `2025-${new Date().getFullYear()}`,
};

export const Seo = ({
  title = seoData.defaultTitle,
  description = seoData.defaultDescription,
  location = '',
}) => {
  const structuredDataOrganization = `{
    "@context": "http://schema.org",
    "@type": "Organization",
    "legalName": "${seoData.legalName}",
    "url": "${seoData.url}",
    "logo": "${seoData.logo}",
    "foundingDate": "${seoData.foundingDate}",
    "founders": [{
      "@type": "Person",
      "name": "${seoData.legalName}"
    }],
    "contactPoint": [{
      "@type": "ContactPoint",
      "email": "${seoData.contact.email}",
      "telephone": "${seoData.contact.phone}",
      "contactType": "customer service"
    }],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "${seoData.address.city}",
      "addressRegion": "${seoData.address.region}",
      "addressCountry": "${seoData.address.country}",
      "postalCode": "${seoData.address.zipCode}"
    },
    "sameAs": [
      "${seoData.socialLinks.twitter}",
      "${seoData.socialLinks.google}",
      "${seoData.socialLinks.youtube}",
      "${seoData.socialLinks.linkedin}",
      "${seoData.socialLinks.instagram}",
      "${seoData.socialLinks.github}"
    ]
  }`;

  return (
    <Helmet>

      <meta name="description" content={description} />
      <meta name="image" content={seoData.logo} />

      <meta property="og:url" content={`${seoData.url}${location}/?ref=smakosh.com`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={seoData.logo} />
      <meta property="og:site_name" content={seoData.defaultTitle} />
      <meta property="fb:app_id" content={seoData.socialLinks.facebook} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={seoData.logo} />

      <script type="application/ld+json">{structuredDataOrganization}</script>
      <link rel="publisher" href={seoData.socialLinks.google} />
      
      <meta name="theme-color" content={seoData.themeColor} />
      <meta name="background-color" content={seoData.backgroundColor} />
      <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />

      <title>{title}</title>
      <html lang="en" dir="ltr" />

      
    </Helmet>
  );
};
