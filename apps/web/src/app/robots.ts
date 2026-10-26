import { MetadataRoute } from 'next';

const DISALLOWED = ['/admin/', '/api/'];

/**
 * AI answer engines are an intentional acquisition channel for a B2B export
 * business, so their crawlers are allowed explicitly rather than left to the
 * wildcard rule — several of them only honour a directive naming them.
 */
const AI_CRAWLERS = [
  'GPTBot', // OpenAI — ChatGPT training
  'OAI-SearchBot', // OpenAI — ChatGPT search results
  'ChatGPT-User', // OpenAI — user-initiated browsing
  'ClaudeBot', // Anthropic — Claude
  'Claude-User',
  'PerplexityBot', // Perplexity
  'Perplexity-User',
  'Google-Extended', // Google — Gemini / AI Overviews grounding
  'Applebot-Extended', // Apple Intelligence
  'CCBot', // Common Crawl — feeds many downstream models
  'meta-externalagent'
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOWED
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: DISALLOWED
      }))
    ],
    sitemap: 'https://leloimetal.com/sitemap.xml',
    host: 'https://leloimetal.com'
  };
}
