import { NextResponse } from 'next/server';
import { getPosts } from '@/app/utils/utils';
import { baseURL } from '@/app/resources';

export async function GET() {
  const posts = getPosts(['src', 'app', 'blog', 'posts']);
  
  const jsonFeed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: 'Portfolio Blog - Web Development & Design',
    description: 'Latest articles about web development, design, and technology from a full-stack developer\'s perspective.',
    home_page_url: baseURL,
    feed_url: `${baseURL}/feed.json`,
    language: 'en-US',
    author: {
      name: 'Your Name', // Replace with actual name
      email: 'your-email@domain.com', // Replace with actual email
      url: baseURL
    },
    items: posts
      .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
      .slice(0, 20)
      .map(post => ({
        id: `${baseURL}/blog/${post.slug}`,
        url: `${baseURL}/blog/${post.slug}`,
        title: post.metadata.title,
        content_html: post.content || '',
        content_text: post.metadata.summary || post.metadata.title,
        summary: post.metadata.summary || post.metadata.title,
        date_published: new Date(post.metadata.publishedAt).toISOString(),
        date_modified: new Date(post.metadata.publishedAt).toISOString(),
        author: {
          name: 'Your Name', // Replace with actual name
          email: 'your-email@domain.com' // Replace with actual email
        },
        tags: post.metadata.tags || ['web-development', 'technology'],
        language: 'en-US'
      }))
  };

  return NextResponse.json(jsonFeed, {
    headers: {
      'Content-Type': 'application/feed+json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=7200',
    },
  });
}