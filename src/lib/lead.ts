// Shared client-side helpers for the enquiry forms (Callback form,
// Commercial quote form, Booking modal, Contact page). Keeps the
// GHL lead payload (HANDOFF.md section 7) and GTM event firing
// (HANDOFF.md section 8) in one place instead of four copies.

export interface LeadFields {
  first_name: string;
  last_name?: string;
  phone: string;
  email?: string;
  project_type: string;
  town?: string;
  timeline?: string;
  budget?: string;
  message?: string;
  sms_consent?: boolean;
  /** Honeypot — must stay empty. Field name deliberately looks legitimate. */
  company_website?: string;
  /** `Date.now()` captured when the form mounted, for the time-to-submit check. */
  rendered_at: number;
}

const STORAGE_KEY = 'ds_first_touch';

interface FirstTouch {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  referrer: string;
}

const EMPTY_FIRST_TOUCH: FirstTouch = {
  utm_source: '',
  utm_medium: '',
  utm_campaign: '',
  utm_term: '',
  utm_content: '',
  referrer: '',
};

/** Call once per page load. Stores first-touch UTM/referrer only once per browser. */
export function captureFirstTouch(): void {
  try {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const touch: FirstTouch = {
      utm_source: params.get('utm_source') ?? '',
      utm_medium: params.get('utm_medium') ?? '',
      utm_campaign: params.get('utm_campaign') ?? '',
      utm_term: params.get('utm_term') ?? '',
      utm_content: params.get('utm_content') ?? '',
      referrer: document.referrer ?? '',
    };
    if (Object.values(touch).some(Boolean)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(touch));
    }
  } catch {
    // Storage unavailable (private browsing, etc.) — forms still work,
    // just without first-touch attribution.
  }
}

function readFirstTouch(): FirstTouch {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...EMPTY_FIRST_TOUCH, ...JSON.parse(raw) };
  } catch {
    // ignore
  }
  return EMPTY_FIRST_TOUCH;
}

export function pushDataLayer(event: string, params: Record<string, unknown> = {}): void {
  try {
    const w = window as unknown as { dataLayer?: unknown[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event, ...params });
  } catch {
    // ignore
  }
}

/** POSTs a lead to /api/lead and fires `generate_lead` on success. */
export async function submitLead(fields: LeadFields): Promise<{ ok: boolean; error?: string }> {
  const body = {
    ...readFirstTouch(),
    page: window.location.pathname,
    ...fields,
  };

  try {
    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await res
      .json()
      .catch(() => ({}) as { ok?: boolean; error?: string; project_type?: string });
    if (res.ok && data.ok) {
      pushDataLayer('generate_lead', { project_type: data.project_type ?? fields.project_type });
      return { ok: true };
    }
    return { ok: false, error: data.error };
  } catch {
    return { ok: false, error: 'Network error' };
  }
}
