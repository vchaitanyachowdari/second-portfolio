import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isAICrawler } from '@/app/ai-crawler-config';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const url = request.nextUrl.clone();
  
  // Enhanced handling for AI crawlers
  if (isAICrawler(userAgent)) {
    // Add special headers for AI crawlers
    const response = NextResponse.next();
    
    // Indicate content is optimized for AI consumption
    response.headers.set('X-AI-Optimized', 'true');
    response.headers.set('X-Content-Type', 'portfolio-website');
    response.headers.set('X-Last-Updated', new Date().toISOString());
    
    // Add cache headers for better crawl efficiency
    response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=7200');
    
    return response;
  }
  
  // Handle protected routes
  const protectedPaths = ['/work/automate-design-handovers-with-a-figma-to-code-pipeline'];
  
  if (protectedPaths.some(path => url.pathname.startsWith(path))) {
    // Check for authentication cookie or header
    const isAuthenticated = request.cookies.get('portfolio-auth')?.value === 'true';
    
    if (!isAuthenticated) {
      // Redirect to authentication page
      url.pathname = '/api/authenticate';
      url.searchParams.set('redirect', request.nextUrl.pathname);
      return NextResponse.redirect(url);
    }
  }
  
  // Add security headers for all requests
  const response = NextResponse.next();
  
  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  // Performance headers
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (robots file)
     * - sitemap.xml (sitemap file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};