import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { guides } from '@/data/guides';
import { serviceAreas } from '@/data/service-areas';
import { services } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ['/', '/rehber', '/iletisim', '/kvkk-gizlilik-politikasi', '/kullanim-sartlari', '/cerez-politikasi'];
  const routes = [
    ...staticRoutes,
    ...services.map((service) => `/${service.slug}`),
    ...serviceAreas.map((area) => `/istanbul/${area.slug}`),
    ...guides.map((guide) => `/rehber/${guide.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route.startsWith('/istanbul') ? 0.8 : 0.7,
  }));
}

