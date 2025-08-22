// SEO Configuration for AI Crawlers and Search Engines
import { baseURL } from "@/app/resources";

export const seoConfig = {
  // Basic SEO
  title: "Portfolio - Full Stack Developer & Designer",
  description: "Professional portfolio showcasing full-stack development, UI/UX design, and innovative web solutions. Explore my projects, blog posts, and technical expertise.",
  keywords: [
    "full stack developer",
    "web developer",
    "UI/UX designer", 
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "portfolio",
    "web design",
    "frontend developer",
    "backend developer",
    "software engineer",
    "JavaScript developer",
    "modern web development",
    "responsive design",
    "user experience",
    "web applications"
  ],
  
  // Open Graph for social media and AI crawlers
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseURL,
    siteName: "Professional Portfolio",
    title: "Portfolio - Full Stack Developer & Designer",
    description: "Professional portfolio showcasing full-stack development, UI/UX design, and innovative web solutions.",
    images: [
      {
        url: `${baseURL}/images/og/home.jpg`,
        width: 1200,
        height: 630,
        alt: "Portfolio Homepage",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Full Stack Developer & Designer",
    description: "Professional portfolio showcasing full-stack development, UI/UX design, and innovative web solutions.",
    images: [`${baseURL}/images/og/home.jpg`],
    creator: "@yourusername", // Replace with actual Twitter handle
  },
  
  // Structured Data for AI understanding
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Your Name", // Replace with actual name
    "jobTitle": "Full Stack Developer & Designer",
    "description": "Professional full-stack developer and designer specializing in modern web technologies and user experience design.",
    "url": baseURL,
    "sameAs": [
      "https://github.com/yourusername", // Replace with actual profiles
      "https://linkedin.com/in/yourusername",
      "https://twitter.com/yourusername"
    ],
    "knowsAbout": [
      "Web Development",
      "Full Stack Development", 
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "UI/UX Design",
      "Frontend Development",
      "Backend Development",
      "Database Design",
      "API Development",
      "Responsive Design",
      "User Experience",
      "Software Engineering"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer",
      "occupationLocation": {
        "@type": "Place",
        "name": "Remote/Global" // Update with your location
      }
    }
  },
  
  // AI Crawler specific metadata
  aiCrawlerMeta: {
    "ai-content-declaration": "This portfolio contains original work and projects by the developer",
    "content-type": "professional-portfolio",
    "content-category": "technology,web-development,design",
    "content-language": "en",
    "content-freshness": "regularly-updated",
    "crawl-priority": "high",
    "index-policy": "index,follow",
  },
  
  // Additional meta tags for better discoverability
  additionalMeta: {
    "theme-color": "#000000",
    "color-scheme": "dark light",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "msapplication-TileColor": "#000000",
  }
};

// Function to generate JSON-LD structured data
export function generateStructuredData(pageType: string = "website", additionalData: any = {}) {
  const baseStructuredData = {
    ...seoConfig.structuredData,
    ...additionalData
  };
  
  if (pageType === "article") {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      ...baseStructuredData,
      "author": {
        "@type": "Person",
        "name": seoConfig.structuredData.name
      },
      "publisher": {
        "@type": "Person", 
        "name": seoConfig.structuredData.name
      }
    };
  }
  
  if (pageType === "portfolio") {
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      ...baseStructuredData,
      "creator": {
        "@type": "Person",
        "name": seoConfig.structuredData.name
      }
    };
  }
  
  return baseStructuredData;
}