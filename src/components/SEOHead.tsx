import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  canonicalUrl?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = "/lovable-uploads/8e5f3992-1b96-4aa9-a095-98f4d9fdeb74.webp",
  twitterTitle,
  twitterDescription,
  canonicalUrl
}) => {
  const { t, i18n } = useTranslation();
  
  // Use provided values or fall back to translations
  const pageTitle = title || t('seo.title');
  const pageDescription = description || t('seo.description');
  const pageKeywords = keywords || t('seo.keywords');
  const pageOgTitle = ogTitle || t('seo.ogTitle');
  const pageOgDescription = ogDescription || t('seo.ogDescription');
  const pageTwitterTitle = twitterTitle || t('seo.twitterTitle');
  const pageTwitterDescription = twitterDescription || t('seo.twitterDescription');
  
  // Get current language for og:locale
  const locale = i18n.language === 'fr' ? 'fr_FR' : 'en_US';
  const alternateLocale = i18n.language === 'fr' ? 'en_US' : 'fr_FR';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={i18n.language} />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={pageOgTitle} />
      <meta property="og:description" content={pageOgDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={locale} />
      <meta property="og:locale:alternate" content={alternateLocale} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@lovable_dev" />
      <meta name="twitter:title" content={pageTwitterTitle} />
      <meta name="twitter:description" content={pageTwitterDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="Performance Marketing Agency" />
    </Helmet>
  );
};

export default SEOHead;
