import { estimateQuote, parseSqft } from '../components/quote/quotePricing';
import type { QuoteAnswers } from '../components/quote/quoteTypes';
import { getSupabase, isSupabaseConfigured } from './supabase';

export type ContactSubmission = {
  name: string;
  business?: string;
  email: string;
  phone: string;
  message: string;
};

export async function submitQuoteRequest(answers: QuoteAnswers): Promise<void> {
  if (!isSupabaseConfigured) {
    throw new Error('Submissions are temporarily unavailable. Please call us instead.');
  }

  const estimate = estimateQuote(answers);
  const sqft = parseSqft(answers.sqft);

  // Insert only — anon RLS allows INSERT but not SELECT/RETURNING
  const { error } = await getSupabase().from('cavitas_quote_requests').insert({
    status: 'new',
    service: answers.service || null,
    industry: answers.industry || null,
    frequency: answers.frequency || null,
    sqft,
    occupants: answers.occupants || null,
    restrooms: answers.restrooms || null,
    floors: answers.floors || null,
    address: answers.address.trim() || null,
    city: answers.city.trim() || null,
    state: answers.state || null,
    zip: answers.zip.trim() || null,
    name: answers.name.trim(),
    business_name: answers.businessName.trim() || null,
    email: answers.email.trim(),
    phone: answers.phone.trim(),
    contact_pref: answers.contactPref || null,
    budget: answers.budget || null,
    notes: answers.notes.trim() || null,
    areas: answers.areas,
    addons: answers.addons,
    preferred_days: answers.preferredDays,
    time_window: answers.timeWindow || null,
    start_timeframe: answers.startTimeframe || null,
    access_type: answers.access || null,
    supplies: answers.supplies || null,
    estimate_low: estimate?.low ?? null,
    estimate_high: estimate?.high ?? null,
    estimate_label: estimate?.label ?? null,
    answers,
    source: 'cavitas-website',
  });

  if (error) throw new Error(error.message);
}

export async function submitContactMessage(form: ContactSubmission): Promise<void> {
  if (!isSupabaseConfigured) {
    throw new Error('Submissions are temporarily unavailable. Please call us instead.');
  }

  const { error } = await getSupabase().from('cavitas_contact_messages').insert({
    status: 'new',
    name: form.name.trim(),
    business_name: form.business?.trim() || null,
    email: form.email.trim(),
    phone: form.phone.trim(),
    message: form.message.trim(),
    source: 'cavitas-website',
  });

  if (error) throw new Error(error.message);
}
