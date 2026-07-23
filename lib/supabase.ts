import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Public Supabase project (WPS-canvas). The anon key is safe in the browser —
 * table access is enforced by RLS. Env vars override these defaults when set.
 */
const DEFAULT_SUPABASE_URL = 'https://mjgwoukwyqwoectxfwqv.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qZ3dvdWt3eXF3b2VjdHhmd3F2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3NjAzNjcsImV4cCI6MjA3MDMzNjM2N30.3ee-rHN_BYQKaZmLOTiyoVxU4fYLDnNnfToI8veH5F8';

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
