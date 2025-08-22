import { baseURL } from "@/app/resources";

export default function robots() {
  return {
    rules: [
      // Allow all crawlers including AI bots
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/private/",
          "*.json$",
          "/404",
          "/500"
        ],
      },
      // Specific rules for major AI crawlers
      {
        userAgent: "GPTBot", // OpenAI's web crawler
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        userAgent: "ChatGPT-User", // ChatGPT browsing
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        userAgent: "CCBot", // Common Crawl (used by many AI systems)
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        userAgent: "anthropic-ai", // Claude AI
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        userAgent: "Claude-Web", // Claude web browsing
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      // Google's AI crawlers
      {
        userAgent: "Google-Extended", // Bard and other Google AI
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        userAgent: "Googlebot", // Standard Google crawler
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
        crawlDelay: 1,
      },
      // Other search engines and AI systems
      {
        userAgent: "Bingbot", // Microsoft Bing
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        userAgent: "facebookexternalhit", // Meta/Facebook
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        userAgent: "Twitterbot", // Twitter/X
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        userAgent: "LinkedInBot", // LinkedIn
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
    host: baseURL,
  };
}
