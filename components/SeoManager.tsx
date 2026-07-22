import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  DEFAULT_OG_IMAGE,
  HOME_SEO,
  QUOTE_SEO,
  SERVICE_SEO,
  SITE_NAME,
  absoluteUrl,
  organizationSchema,
  type PageSeo,
} from '../seo';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id: string, data: unknown) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function applySeo(page: PageSeo, graph?: unknown[]) {
  const url = absoluteUrl(page.path);
  document.title = page.title;

  upsertMeta('name', 'description', page.description);
  upsertMeta('name', 'title', page.title);
  upsertMeta('name', 'robots', 'index, follow');
  upsertMeta('property', 'og:type', page.path === '/' ? 'website' : 'article');
  upsertMeta('property', 'og:site_name', SITE_NAME);
  upsertMeta('property', 'og:title', page.title);
  upsertMeta('property', 'og:description', page.description);
  upsertMeta('property', 'og:url', url);
  upsertMeta('property', 'og:image', DEFAULT_OG_IMAGE);
  upsertMeta('name', 'twitter:card', 'summary_large_image');
  upsertMeta('name', 'twitter:title', page.title);
  upsertMeta('name', 'twitter:description', page.description);
  upsertMeta('name', 'twitter:image', DEFAULT_OG_IMAGE);
  upsertLink('canonical', url);

  if (graph?.length) {
    upsertJsonLd('seo-jsonld', { '@context': 'https://schema.org', '@graph': graph });
  }
}

export function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      applySeo(HOME_SEO, [organizationSchema()]);
      return;
    }

    if (pathname === '/quote') {
      applySeo(QUOTE_SEO);
      return;
    }

    const page = SERVICE_SEO[pathname];
    if (!page) {
      document.title = SITE_NAME;
      upsertMeta('name', 'robots', 'noindex, follow');
      upsertLink('canonical', absoluteUrl('/'));
      return;
    }

    applySeo(page);
  }, [pathname]);

  return null;
}

/** Merge extra schema (Service, FAQ, Breadcrumb) into the page JSON-LD graph. */
export function useServicePageSchema(schemas: unknown[]) {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = SERVICE_SEO[pathname];
    if (!page) return;

    applySeo(page);

    const cleaned = schemas.map((s) => {
      if (s && typeof s === 'object' && '@context' in (s as object)) {
        const clone = { ...(s as Record<string, unknown>) };
        delete clone['@context'];
        return clone;
      }
      return s;
    });

    upsertJsonLd('seo-jsonld', {
      '@context': 'https://schema.org',
      '@graph': cleaned,
    });
  }, [pathname, schemas]);
}
