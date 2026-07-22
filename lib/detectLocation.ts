/** Free IP geolocation via GeoJS (https://www.geojs.io) — no API key. */

export const DEFAULT_CITY_LABEL = 'Denver, CO';

const CACHE_KEY = 'cavitas_detected_city';
const GEOJS_URL = 'https://get.geojs.io/v1/ip/geo.json';

const US_STATE_ABBR: Record<string, string> = {
  alabama: 'AL',
  alaska: 'AK',
  arizona: 'AZ',
  arkansas: 'AR',
  california: 'CA',
  colorado: 'CO',
  connecticut: 'CT',
  delaware: 'DE',
  florida: 'FL',
  georgia: 'GA',
  hawaii: 'HI',
  idaho: 'ID',
  illinois: 'IL',
  indiana: 'IN',
  iowa: 'IA',
  kansas: 'KS',
  kentucky: 'KY',
  louisiana: 'LA',
  maine: 'ME',
  maryland: 'MD',
  massachusetts: 'MA',
  michigan: 'MI',
  minnesota: 'MN',
  mississippi: 'MS',
  missouri: 'MO',
  montana: 'MT',
  nebraska: 'NE',
  nevada: 'NV',
  'new hampshire': 'NH',
  'new jersey': 'NJ',
  'new mexico': 'NM',
  'new york': 'NY',
  'north carolina': 'NC',
  'north dakota': 'ND',
  ohio: 'OH',
  oklahoma: 'OK',
  oregon: 'OR',
  pennsylvania: 'PA',
  'rhode island': 'RI',
  'south carolina': 'SC',
  'south dakota': 'SD',
  tennessee: 'TN',
  texas: 'TX',
  utah: 'UT',
  vermont: 'VT',
  virginia: 'VA',
  washington: 'WA',
  'west virginia': 'WV',
  wisconsin: 'WI',
  wyoming: 'WY',
  'district of columbia': 'DC',
};

type GeoJsResponse = {
  city?: string;
  region?: string;
  country_code?: string;
  country?: string;
};

function regionToAbbrev(region: string, countryCode?: string): string {
  if (countryCode === 'US' || countryCode === 'USA') {
    const abbr = US_STATE_ABBR[region.trim().toLowerCase()];
    if (abbr) return abbr;
  }
  if (region.length <= 3) return region.toUpperCase();
  return region;
}

export function formatCityLabel(city: string, region?: string, countryCode?: string): string {
  const cleanCity = city.trim();
  if (!cleanCity) return DEFAULT_CITY_LABEL;
  if (region?.trim()) {
    return `${cleanCity}, ${regionToAbbrev(region, countryCode)}`;
  }
  if (countryCode?.trim()) {
    return `${cleanCity}, ${countryCode.trim().toUpperCase()}`;
  }
  return cleanCity;
}

function readCache(): string | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { label?: string; at?: number };
    if (!parsed.label) return null;
    // Cache for the browser session only (sessionStorage); still validate shape.
    return parsed.label;
  } catch {
    return null;
  }
}

function writeCache(label: string) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ label, at: Date.now() }));
  } catch {
    /* ignore quota / private mode */
  }
}

export async function detectCityLabel(): Promise<string> {
  const cached = readCache();
  if (cached) return cached;

  try {
    const res = await fetch(GEOJS_URL, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) throw new Error(`GeoJS ${res.status}`);
    const data = (await res.json()) as GeoJsResponse;
    if (!data.city?.trim()) throw new Error('No city');
    const label = formatCityLabel(data.city, data.region, data.country_code);
    writeCache(label);
    return label;
  } catch {
    return DEFAULT_CITY_LABEL;
  }
}
