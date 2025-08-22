import { getPosts } from "@/app/utils/utils";
import { baseURL, routes as routesConfig } from "@/app/resources";

export default async function sitemap() {
  const currentDate = new Date().toISOString();
  
  // Blog posts with enhanced metadata
  const blogs = getPosts(["src", "app", "blog", "posts"]).map((post) => ({
    url: `${baseURL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt || currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Work/Portfolio projects with enhanced metadata
  const works = getPosts(["src", "app", "work", "projects"]).map((post) => ({
    url: `${baseURL}/work/${post.slug}`,
    lastModified: post.metadata.publishedAt || currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Resource posts with enhanced metadata
  const resources = getPosts(["src", "app", "resource", "posts"]).map((post) => ({
    url: `${baseURL}/resource/${post.slug}`,
    lastModified: post.metadata.publishedAt || currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Main routes with priority and frequency for AI crawlers
  const activeRoutes = Object.keys(routesConfig).filter((route) => 
    routesConfig[route as keyof typeof routesConfig]
  );

  const routes = activeRoutes.map((route) => {
    let priority = 0.5;
    let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'monthly';
    
    // Set higher priority for important pages
    if (route === '/') {
      priority = 1.0;
      changeFrequency = 'weekly';
    } else if (route === '/about' || route === '/work' || route === '/contact') {
      priority = 0.9;
      changeFrequency = 'monthly';
    } else if (route === '/blog' || route === '/tech-stack') {
      priority = 0.8;
      changeFrequency = 'weekly';
    } else if (route === '/services' || route === '/tools') {
      priority = 0.7;
      changeFrequency = 'monthly';
    }
    
    return {
      url: `${baseURL}${route !== "/" ? route : ""}`,
      lastModified: currentDate,
      changeFrequency,
      priority,
    };
  });

  // Combine all URLs with proper sorting by priority
  const allUrls = [...routes, ...works, ...blogs, ...resources];
  
  // Sort by priority (highest first) for better crawler understanding
  return allUrls.sort((a, b) => (b.priority || 0) - (a.priority || 0));
}
