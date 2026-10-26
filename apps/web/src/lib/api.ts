/**
 * LELOI METAL — Public API client
 *
 * Single source of truth for the backend base URL. Never hardcode host names in
 * page components: production, staging and local all resolve through
 * NEXT_PUBLIC_API_URL.
 */

export const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api'
).replace(/\/+$/, '');

export class ApiError extends Error {
  readonly status: number;
  readonly details?: unknown;

  constructor(message: string, status: number, details?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.details = details;
  }
}

/** Network/DNS failure, CORS rejection or backend not running. */
export class ApiUnreachableError extends Error {
  constructor(message = 'Unable to reach the LELOI METAL server.') {
    super(message);
    this.name = 'ApiUnreachableError';
  }
}

function extractErrorMessage(payload: unknown, fallback: string): string {
  if (payload && typeof payload === 'object') {
    const message = (payload as { message?: unknown }).message;
    if (typeof message === 'string') return message;
    if (Array.isArray(message) && typeof message[0] === 'string') return message[0];
  }
  return fallback;
}

/**
 * Calls the backend and throws on any non-2xx response.
 *
 * Callers are expected to surface the thrown error to the user — a failed
 * submission must never be presented as a success.
 */
export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;

  let response: Response;
  try {
    response = await fetch(url, init);
  } catch {
    throw new ApiUnreachableError();
  }

  const raw = await response.text();
  let payload: unknown = null;
  if (raw) {
    try {
      payload = JSON.parse(raw);
    } catch {
      payload = raw;
    }
  }

  if (!response.ok) {
    throw new ApiError(
      extractErrorMessage(payload, `Request failed with status ${response.status}`),
      response.status,
      payload
    );
  }

  return payload as T;
}

export interface RfqSubmissionResponse {
  success: boolean;
  rfqNumber: string;
  rfqId: string;
  submittedAt: string;
  message: string;
  engineeringReviewSla: string;
}

export interface RfqFileUploadResponse {
  id: string;
  originalFileName: string;
  fileSize: number;
  scanStatus: string;
}

/** Submits the completed 5-step RFQ. Throws if the backend does not accept it. */
export function submitRfq(payload: unknown): Promise<RfqSubmissionResponse> {
  return apiFetch<RfqSubmissionResponse>('/public/rfqs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
}

/** Uploads a CAD drawing against an already-created RFQ. */
export function uploadRfqDrawing(rfqId: string, file: File): Promise<RfqFileUploadResponse> {
  const body = new FormData();
  body.append('file', file);

  return apiFetch<RfqFileUploadResponse>(`/public/rfqs/${rfqId}/files`, {
    method: 'POST',
    body
  });
}

/** Submits the general contact / export inquiry form. */
export function submitContactForm(payload: unknown): Promise<{ success: boolean }> {
  return apiFetch<{ success: boolean }>('/public/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
}
