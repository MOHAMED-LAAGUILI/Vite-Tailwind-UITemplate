/* eslint-disable react/prop-types */


export const Seo = ({
  Helmet,
  title,
  lang = "en",
  seoData
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
      <html lang={lang} />
         {/*  <!--  Favicons -->*/}
         <link rel="icon" href={seoData.logo} type="image/x-icon" />
        <link rel="icon" type="image/png" href={seoData.logo} />
        <link rel="apple-touch-icon" href={seoData.logo} />
        <link rel="icon" sizes="16x16" href={seoData.logo} />
        <link rel="icon" sizes="32x32" href={seoData.logo} />
        <link rel="icon" sizes="48x48" href={seoData.logo} />
        <link rel="icon" type="image/png" sizes="192x192" href={seoData.logo} />
        <link rel="mask-icon" href={seoData.logo} color="#EEEEEE" />
        <meta name="msapplication-TileImage" href={seoData.logo} />
      <link rel="icon" type="image/svg+xml" href={seoData.logo} />
   
      <meta name="description" content={seoData.defaultDescription} />
      <meta name="image" content={seoData.logo} />


        {/*  <!--  Dark / LIGHT SWITCH -->*/}
        <link id="dark-theme-style" rel="stylesheet" />
        {/*   <!-- Theme & Mobile Web App Meta --> */}
        <meta name="theme-color" content="#EEEEEE" />
        <meta name="msapplication-navbutton-color" content="#EEEEEE" />
        <meta name="msapplication-TileColor" content="#EEEEEE" />
        <meta
          name="mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="mobile-web-app-capable" content="yes" />

      <meta property="og:url" content={`${seoData.url}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={seoData.defaultDescription} />
      <meta property="og:image" content={seoData.logo} />
      <meta property="og:site_name" content={seoData.defaultTitle} />
      <meta property="fb:app_id" content={seoData.socialLinks.facebook} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={seoData.defaultDescription} />
      <meta name="twitter:image" content={seoData.logo} />
 
      <script type="application/ld+json">{structuredDataOrganization}</script>
      <link rel="publisher" href={seoData.socialLinks.google} />
      
      <meta name="theme-color" content={seoData.themeColor} />
      <meta name="background-color" content={seoData.backgroundColor} />

      <title>{title}</title>

      <meta name="version" content="1" />
        <meta name="category" content="Business" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="topic" content="Business" />
        <meta name="copyright" content="2025" />
        <meta name="owner" content={seoData.author} />


     {/*   <!-- Caching and Performance Meta --> */}
     <meta httpEquiv="Cache-Control" content="max-age=86400, public" />
        <meta httpEquiv="Expires" content="Fri, 10 Aug 2025 20:00:00 GMT" />
        <meta name="revisit-after" content="7 days" />
        <meta name="generator" content="https://vercel.com/" />

         {/*   <!-- Search Engine Bots --> */}
         <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <link rel="canonical" href="https://vercel.com/" />

          {/*   <!-- security meta --> */}
          <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-Powered-By" content={seoData.author} />
    </Helmet>
  );
};
