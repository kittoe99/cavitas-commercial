import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Public Supabase project (WPS-canvas). The anon key is safe in the browser —
 * table access is enforced by RLS. Env vars override these defaults when set.
 */
const DEFAULT_SUPABASE_URL = 'https://eaktbubetifehgijevxd.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVha3RidWJldGlmZWhnaWpldnhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5OTc1MjAsImV4cCI6MjA5OTU3MzUyMH0.tthXx09QCb2uxgf_ieOAjNk3EzqjkGA_ljIa6O7fkok';

const envUrl = (import.meta.env.VITE_SUPABASE_URL as string | undefined)?.trim();
const envKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined)?.trim();

const url =
  envUrl && envUrl.startsWith('http') && !envUrl.includes('your-')
    ? envUrl
    : DEFAULT_SUPABASE_URL;

const anonKey =
  envKey && envKey.length > 20 && !envKey.includes('your-anon')
    ? envKey
    : DEFAULT_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!isSupabaseConfigured) {
    throw new Error('Supabase is not configured.');
  }
  if (!client) {
    client = createClient(url, anonKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return client;
}
