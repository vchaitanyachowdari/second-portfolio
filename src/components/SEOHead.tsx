import { Metadata } from 'next';
import { seoConfig, generateStructuredData } from '@/app/seo-config';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  pageType?: 'website' | 'article' | 'portfolio';
  additionalStructuredData?: any;
}

export function generateSEOMetadata({
  title,
  description,
  keywords,
  image,
  url,
  pageType = 'website',
  additionalStructuredData = {}
}: SEOHeadProps = {}): Metadata {
  const seoTitle = title ? `${title} | ${seoConfig.title}` : seoConfig.title;
  const seoDescription = description || seoConfig.description;
  const seoImage = image || seoConfig.openGraph.images[0].url;
  const seoUrl = url || seoConfig.openGraph.url;
  const seoKeywords = keywords ? [...seoConfig.keywords, ...keywords] : seoConfig.keywords;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords.join(', '),
    
    // Open Graph
    openGraph: {
      ...seoConfig.openGraph,
      title: seoTitle,
      description: seoDescription,
      url: seoUrl,
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: title || 'Portfolio',
        },
      ],
    },
    
    // Twitter
    twitter: {
      ...seoConfig.twitter,
      title: seoTitle,
      description: seoDescription,
      images: [seoImage],
    },
    
    // Additional meta tags for AI crawlers
    other: {
      ...seoConfig.aiCrawlerMeta,
      ...seoConfig.additionalMeta,
      'structured-data': JSON.stringify(generateStructuredData(pageType, additionalStructuredData)),
    },
    
    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Verification tags (add your verification codes)
    verification: {
      google: 'your-google-verification-code', // Replace with actual code
      // bing: 'your-bing-verification-code',
      // yandex: 'your-yandex-verification-code',
    },
  };
}

// Component for adding structured data script
export function StructuredDataScript({ 
  pageType = 'website', 
  additionalData = {} 
}: { 
  pageType?: string; 
  additionalData?: any; 
}) {
  const structuredData = generateStructuredData(pageType, additionalData);
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}