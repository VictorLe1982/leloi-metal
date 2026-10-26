import { NextResponse, type NextRequest } from 'next/server';

const ADMIN_SESSION_COOKIE = 'leloi_session';

/**
 * Gate for the internal staff portal.
 *
 * Without a session cookie no /admin route is served at all, so admin markup is
 * never handed to anonymous visitors. The cookie is validated for real against
 * the API by /api/admin/me once the page loads; this edge check is the first
 * barrier, not the only one.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasSession = Boolean(request.cookies.get(ADMIN_SESSION_COOKIE)?.value);

  if (pathname === '/admin/login') {
    if (hasSession) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
    return NextResponse.next();
  }

  if (!hasSession) {
    const loginUrl = new URL('/admin/login', request.url);
    loginUrl.searchParams.set('next', pathname);
    return NextResponse.redirect(loginUrl);
  }

  const response = NextResponse.next();
  response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  return response;
}

export const config = {
  matcher: ['/admin/:path*']
};
