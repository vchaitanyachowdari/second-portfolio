import { NextResponse } from 'next/server';
import { getPosts } from '@/app/utils/utils';
import { baseURL } from '@/app/resources';

export async function GET() {
  const posts = getPosts(['src', 'app', 'blog', 'posts']);
  
  const rssItems = posts
    .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
    .slice(0, 20) // Latest 20 posts
    .map(post => `
      <item>
        <title><![CDATA[${post.metadata.title}]]></title>
        <description><![CDATA[${post.metadata.summary || post.metadata.title}]]></description>
        <link>${baseURL}/blog/${post.slug}</link>
        <guid isPermaLink="true">${baseURL}/blog/${post.slug}</guid>
        <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
        <author>your-email@domain.com (Your Name)</author>
        <category>Web Development</category>
        <category>Technology</category>
        ${post.metadata.tags ? post.metadata.tags.map((tag: string) => `<category>${tag}</category>`).join('') : ''}
      </item>
    `).join('');

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
      <channel>
        <title>Portfolio Blog - Web Development & Design</title>
        <description>Latest articles about web development, design, and technology from a full-stack developer's perspective.</description>
        <link>${baseURL}</link>
        <language>en-US</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${baseURL}/feed.xml" rel="self" type="application/rss+xml"/>
        <generator>Next.js Portfolio</generator>
        <webMaster>your-email@domain.com (Your Name)</webMaster>
        <managingEditor>your-email@domain.com (Your Name)</managingEditor>
        <category>Technology</category>
        <category>Web Development</category>
        <category>Design</category>
        <ttl>60</ttl>
        ${rssItems}
      </channel>
    </rss>`;

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=7200',
    },
  });
}