import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { API_BASE_URL } from '@/lib/api';
import { ADMIN_SESSION_COOKIE } from '@/lib/admin-session';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Resolves the signed-in staff member from the HTTP-only session cookie.
 *
 * The role is always read back from the API, never trusted from the client, so
 * a tampered cookie cannot elevate privileges.
 */
export async function GET() {
  const token = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;

  if (!token) {
    return NextResponse.json({ message: 'Not authenticated.' }, { status: 401 });
  }

  let upstream: Response;
  try {
    upstream = await fetch(`${API_BASE_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: 'no-store'
    });
  } catch {
    return NextResponse.json(
      { message: 'The authentication service is unavailable.' },
      { status: 503 }
    );
  }

  if (!upstream.ok) {
    const response = NextResponse.json({ message: 'Session expired.' }, { status: 401 });
    response.cookies.set(ADMIN_SESSION_COOKIE, '', { path: '/', maxAge: 0 });
    return response;
  }

  return NextResponse.json(await upstream.json());
}
