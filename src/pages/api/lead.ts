import type { APIRoute } from 'astro';

// Website → GoHighLevel integration contract: HANDOFF.md section 7.
// Forwards a validated lead to the GoHighLevel Inbound Webhook workflow
// trigger. GHL_INBOUND_WEBHOOK_URL isn't set yet (BUILD_PLAN.md Week 4/
// CONTENT_GAPS.md "Infrastructure" — Stephen hasn't created the
// GoHighLevel account), so until it is, this correctly fails closed rather
// than telling a homeowner their enquiry was sent when it wasn't
// (CLAUDE.md rule 1).
export const prerender = false;

const PROJECT_TYPES = [
  'Kitchen',
  'Bathroom',
  'Home renovation',
  'Fire & smoke damage',
  'Water damage',
  'Commercial',
  'Showroom visit',
] as const;

interface LeadPayload {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  project_type: string;
  town: string;
  timeline: string;
  budget: string;
  message: string;
  sms_consent: boolean;
  page: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  referrer: string;
  submitted_at: string;
}

const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'Invalid request' }, 400);
  }

  // Honeypot: a hidden field real visitors never fill in.
  if (str(body.company_website)) {
    return json({ ok: false, error: 'Invalid request' }, 400);
  }

  // Time-to-submit: forms set `rendered_at` when they mount. Anything
  // under 2 seconds is almost certainly a bot filling the form instantly.
  const renderedAt = Number(body.rendered_at);
  if (!renderedAt || Date.now() - renderedAt < 2000) {
    return json({ ok: false, error: 'Invalid request' }, 400);
  }

  const first_name = str(body.first_name);
  const phone = str(body.phone);
  const phoneDigits = phone.replace(/\D/g, '');
  const email = str(body.email);
  const project_type = str(body.project_type);

  if (!first_name || !project_type) {
    return json({ ok: false, error: 'Missing required fields' }, 400);
  }
  if (!phoneDigits && !email) {
    return json({ ok: false, error: 'Enter a phone number or email' }, 400);
  }
  if (phoneDigits && phoneDigits.length < 10) {
    return json({ ok: false, error: 'Enter a 10-digit phone number' }, 400);
  }
  if (!PROJECT_TYPES.includes(project_type as (typeof PROJECT_TYPES)[number])) {
    return json({ ok: false, error: 'Invalid project type' }, 400);
  }

  const payload: LeadPayload = {
    first_name,
    last_name: str(body.last_name),
    phone,
    email: str(body.email),
    project_type,
    town: str(body.town),
    timeline: str(body.timeline),
    budget: str(body.budget),
    message: str(body.message),
    sms_consent: body.sms_consent === true,
    page: str(body.page),
    utm_source: str(body.utm_source),
    utm_medium: str(body.utm_medium),
    utm_campaign: str(body.utm_campaign),
    utm_term: str(body.utm_term),
    utm_content: str(body.utm_content),
    referrer: str(body.referrer),
    submitted_at: new Date().toISOString(),
  };

  const webhookUrl = import.meta.env.GHL_INBOUND_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('GHL_INBOUND_WEBHOOK_URL is not set — lead was not forwarded', payload);
    return json(
      { ok: false, error: 'Lead capture is not yet connected. Please call or text us instead.' },
      503,
    );
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error('GoHighLevel webhook rejected the lead', res.status, await res.text());
      return json({ ok: false, error: 'Could not send your request. Please call us.' }, 502);
    }
  } catch (err) {
    console.error('Failed to reach the GoHighLevel webhook', err);
    return json({ ok: false, error: 'Could not send your request. Please call us.' }, 502);
  }

  return json({ ok: true, project_type: payload.project_type });
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
