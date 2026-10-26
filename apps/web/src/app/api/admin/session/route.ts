import { NextResponse } from 'next/server';
import { API_BASE_URL } from '@/lib/api';
import { ADMIN_SESSION_COOKIE, ADMIN_SESSION_MAX_AGE_SECONDS } from '@/lib/admin-session';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Exchanges staff credentials for a session.
 *
 * The JWT is stored in an HTTP-only cookie so it is never readable from
 * JavaScript (ADR-008). There is no offline/demo fallback: if the API rejects
 * the credentials or is unavailable, no session is created.
 */
export async function POST(request: Request) {
  let body: { email?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Malformed request body.' }, { status: 400 });
  }

  if (!body.email || !body.password) {
    return NextResponse.json({ message: 'Email and password are required.' }, { status: 400 });
  }

  let upstream: Response;
  try {
    upstream = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: body.email, password: body.password }),
      cache: 'no-store'
    });
  } catch {
    return NextResponse.json(
      { message: 'The authentication service is unavailable. Please contact IT support.' },
      { status: 503 }
    );
  }

  if (!upstream.ok) {
    return NextResponse.json(
      { message: 'Invalid email or password.' },
      { status: upstream.status === 401 ? 401 : 400 }
    );
  }

  const data = (await upstream.json()) as {
    accessToken?: string;
    user?: { email: string; role: string; firstName?: string; lastName?: string };
  };

  if (!data.accessToken) {
    return NextResponse.json(
      { message: 'The authentication service returned an unexpected response.' },
      { status: 502 }
    );
  }

  const response = NextResponse.json({ user: data.user ?? { email: body.email } });
  response.cookies.set(ADMIN_SESSION_COOKIE, data.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: ADMIN_SESSION_MAX_AGE_SECONDS
  });

  return response;
}

/** Signs the staff member out by clearing the session cookie. */
export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0
  });
  return response;
}
