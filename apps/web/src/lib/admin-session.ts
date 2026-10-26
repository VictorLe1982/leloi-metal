/**
 * Name of the HTTP-only cookie holding the staff portal JWT.
 *
 * Kept out of the route handlers because Next.js forbids route modules from
 * exporting anything other than the HTTP verb handlers and route config.
 * Mirrored in middleware.ts, which cannot import from app/ at the edge.
 */
export const ADMIN_SESSION_COOKIE = 'leloi_session';

export const ADMIN_SESSION_MAX_AGE_SECONDS = 60 * 60 * 8; // one staff working session
