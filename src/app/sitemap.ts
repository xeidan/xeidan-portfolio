import type { MetadataRoute } from 'next';
import { projects } from '@/content/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://xeidan.com';
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...projects.map((project) => ({ url: `${base}/projects/${project.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 })),
  ];
}
