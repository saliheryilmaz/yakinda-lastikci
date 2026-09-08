export type LeadPayload = {
  name: string;
  phone: string;
  district: string;
  vehicle?: string;
  issue: string;
  note?: string;
};

export async function submitLead(_payload: LeadPayload) {
  // TODO: Connect to a real backend, CRM webhook, email service, or Ads offline conversion flow.
  // This deliberately does not mock a successful network request.
  throw new Error('Lead API endpoint is not configured yet.');
}

