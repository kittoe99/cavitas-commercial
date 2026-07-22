/** Shared types and option lists for the online quote wizard. */

export type ServiceType = 'office' | 'janitorial' | 'floor-care';
export type Frequency = 'daily' | '3x-week' | 'weekly' | 'biweekly' | 'monthly' | 'one-time';
export type SqftBand = 'under-2k' | '2k-5k' | '5k-10k' | '10k-25k' | '25k-plus';
export type OccupantBand = '1-10' | '11-25' | '26-50' | '51-100' | '100-plus';
export type TimeWindow = 'business-hours' | 'after-hours' | 'flexible';
export type StartTimeframe = 'asap' | '2-weeks' | '1-month' | 'exploring';
export type AccessType = 'keys-fob' | 'security-desk' | 'meet-onsite' | 'alarm-code' | 'unsure';
export type SuppliesType = 'provider' | 'client' | 'discuss';
export type ContactPref = 'email' | 'phone' | 'either';
export type BudgetBand = 'under-500' | '500-1500' | '1500-3000' | '3000-plus' | 'unsure';

export type Weekday = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export type QuoteAnswers = {
  service: ServiceType | '';
  industry: string;
  frequency: Frequency | '';
  areas: string[];
  addons: string[];
  sqftBand: SqftBand | '';
  occupants: OccupantBand | '';
  restrooms: string;
  floors: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  preferredDays: Weekday[];
  timeWindow: TimeWindow | '';
  startTimeframe: StartTimeframe | '';
  access: AccessType | '';
  supplies: SuppliesType | '';
  notes: string;
  name: string;
  businessName: string;
  email: string;
  phone: string;
  contactPref: ContactPref | '';
  budget: BudgetBand | '';
};

export const EMPTY_QUOTE: QuoteAnswers = {
  service: '',
  industry: '',
  frequency: '',
  areas: [],
  addons: [],
  sqftBand: '',
  occupants: '',
  restrooms: '',
  floors: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  preferredDays: [],
  timeWindow: '',
  startTimeframe: '',
  access: '',
  supplies: '',
  notes: '',
  name: '',
  businessName: '',
  email: '',
  phone: '',
  contactPref: '',
  budget: '',
};

export const SERVICE_OPTIONS: { id: ServiceType; title: string; blurb: string }[] = [
  { id: 'office', title: 'Office Cleaning', blurb: 'Desks, restrooms, floors, and common areas.' },
  { id: 'janitorial', title: 'Janitorial Services', blurb: 'Recurring coverage and facility support.' },
  { id: 'floor-care', title: 'Floor Care', blurb: 'Strip, wax, buff, and carpet extraction.' },
];

export const FREQUENCY_OPTIONS: { id: Frequency; title: string; blurb: string }[] = [
  { id: 'daily', title: 'Daily (5× / week)', blurb: 'Weekday coverage — most common.' },
  { id: '3x-week', title: '3× per week', blurb: 'Steady mid-week cadence.' },
  { id: 'weekly', title: 'Weekly', blurb: 'Once a week.' },
  { id: 'biweekly', title: 'Biweekly', blurb: 'Every other week.' },
  { id: 'monthly', title: 'Monthly', blurb: 'Light or specialized care.' },
  { id: 'one-time', title: 'One-time', blurb: 'Single visit or deep clean.' },
];

export const AREA_OPTIONS: { id: string; title: string }[] = [
  { id: 'offices', title: 'Offices / cubicles' },
  { id: 'restrooms', title: 'Restrooms' },
  { id: 'breakrooms', title: 'Break rooms / kitchens' },
  { id: 'conference', title: 'Conference / meeting rooms' },
  { id: 'lobby', title: 'Lobby / reception' },
  { id: 'hallways', title: 'Hallways / corridors' },
  { id: 'floors', title: 'Hard floors / carpet' },
  { id: 'trash', title: 'Trash / recycling' },
  { id: 'other', title: 'Other areas' },
];

export const ADDON_OPTIONS: { id: string; title: string }[] = [
  { id: 'carpet', title: 'Carpet cleaning' },
  { id: 'windows', title: 'Interior windows' },
  { id: 'floor-specialty', title: 'Strip / wax / buff' },
  { id: 'disinfection', title: 'Enhanced disinfection' },
  { id: 'none', title: 'None right now' },
];

export const SQFT_OPTIONS: { id: SqftBand; title: string }[] = [
  { id: 'under-2k', title: 'Under 2,000 sq ft' },
  { id: '2k-5k', title: '2,000 – 5,000 sq ft' },
  { id: '5k-10k', title: '5,000 – 10,000 sq ft' },
  { id: '10k-25k', title: '10,000 – 25,000 sq ft' },
  { id: '25k-plus', title: '25,000+ sq ft' },
];

export const OCCUPANT_OPTIONS: { id: OccupantBand; title: string }[] = [
  { id: '1-10', title: '1 – 10 people' },
  { id: '11-25', title: '11 – 25 people' },
  { id: '26-50', title: '26 – 50 people' },
  { id: '51-100', title: '51 – 100 people' },
  { id: '100-plus', title: '100+ people' },
];

export const INDUSTRY_OPTIONS = [
  'Apartment Buildings',
  'Office Spaces',
  'Car Dealerships',
  'Industrial Spaces',
  'Educational Facilities',
  'Healthcare Facilities',
  'Retail Spaces',
  'Financial Institutions',
  'Commercial Real Estate',
  'Entertainment Facilities',
  'Other',
] as const;

export const US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
  'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
  'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','DC',
] as const;

export const WEEKDAY_OPTIONS: { id: Weekday; label: string }[] = [
  { id: 'mon', label: 'Mon' },
  { id: 'tue', label: 'Tue' },
  { id: 'wed', label: 'Wed' },
  { id: 'thu', label: 'Thu' },
  { id: 'fri', label: 'Fri' },
  { id: 'sat', label: 'Sat' },
  { id: 'sun', label: 'Sun' },
];

export const TIME_WINDOW_OPTIONS: { id: TimeWindow; title: string; blurb: string }[] = [
  { id: 'business-hours', title: 'Business hours', blurb: 'While your team is on-site.' },
  { id: 'after-hours', title: 'After hours', blurb: 'Evenings or overnight.' },
  { id: 'flexible', title: 'Flexible', blurb: 'Whatever works best.' },
];

export const START_OPTIONS: { id: StartTimeframe; title: string }[] = [
  { id: 'asap', title: 'As soon as possible' },
  { id: '2-weeks', title: 'Within 2 weeks' },
  { id: '1-month', title: 'Within a month' },
  { id: 'exploring', title: 'Just exploring' },
];

export const ACCESS_OPTIONS: { id: AccessType; title: string; blurb: string }[] = [
  { id: 'keys-fob', title: 'Keys / fob', blurb: 'Providers can access after hours.' },
  { id: 'security-desk', title: 'Security desk', blurb: 'Check-in required on arrival.' },
  { id: 'meet-onsite', title: 'Meet on-site', blurb: 'Someone unlocks for each visit.' },
  { id: 'alarm-code', title: 'Alarm code', blurb: 'Code entry for access.' },
  { id: 'unsure', title: 'Not sure yet', blurb: 'We’ll figure it out together.' },
];

export const SUPPLIES_OPTIONS: { id: SuppliesType; title: string; blurb: string }[] = [
  { id: 'provider', title: 'Provider supplies', blurb: 'Cleaners bring products & tools.' },
  { id: 'client', title: 'We supply', blurb: 'You provide cleaners & paper goods.' },
  { id: 'discuss', title: 'Discuss later', blurb: 'Open to either approach.' },
];

export const CONTACT_PREF_OPTIONS: { id: ContactPref; title: string }[] = [
  { id: 'email', title: 'Email' },
  { id: 'phone', title: 'Phone' },
  { id: 'either', title: 'Either is fine' },
];

export const BUDGET_OPTIONS: { id: BudgetBand; title: string }[] = [
  { id: 'under-500', title: 'Under $500 / mo' },
  { id: '500-1500', title: '$500 – $1,500 / mo' },
  { id: '1500-3000', title: '$1,500 – $3,000 / mo' },
  { id: '3000-plus', title: '$3,000+ / mo' },
  { id: 'unsure', title: 'Not sure yet' },
];

export const QUOTE_STEPS = [
  { id: 'service', label: 'Service', title: 'What do you need cleaned?', subtitle: 'Service type, frequency, and which areas matter most.' },
  { id: 'property', label: 'Property', title: 'Tell us about the space', subtitle: 'Size, occupancy, and where providers will work.' },
  { id: 'schedule', label: 'Schedule', title: 'When and how should we clean?', subtitle: 'Preferred days, timing, access, and supplies.' },
  { id: 'contact', label: 'Contact', title: 'How can we reach you?', subtitle: 'We’ll follow up to confirm details and pricing.' },
  { id: 'review', label: 'Review', title: 'Review your estimate', subtitle: 'Confirm everything looks right, then submit.' },
] as const;

export type QuoteStepId = (typeof QUOTE_STEPS)[number]['id'];

export function labelForService(id: ServiceType | ''): string {
  return SERVICE_OPTIONS.find((o) => o.id === id)?.title ?? '—';
}

export function labelForFrequency(id: Frequency | ''): string {
  return FREQUENCY_OPTIONS.find((o) => o.id === id)?.title ?? '—';
}

export function labelForSqft(id: SqftBand | ''): string {
  return SQFT_OPTIONS.find((o) => o.id === id)?.title ?? '—';
}

export function labelForOccupants(id: OccupantBand | ''): string {
  return OCCUPANT_OPTIONS.find((o) => o.id === id)?.title ?? '—';
}

export function labelForTimeWindow(id: TimeWindow | ''): string {
  return TIME_WINDOW_OPTIONS.find((o) => o.id === id)?.title ?? '—';
}

export function labelForStart(id: StartTimeframe | ''): string {
  return START_OPTIONS.find((o) => o.id === id)?.title ?? '—';
}

export function labelForAccess(id: AccessType | ''): string {
  return ACCESS_OPTIONS.find((o) => o.id === id)?.title ?? '—';
}

export function labelForSupplies(id: SuppliesType | ''): string {
  return SUPPLIES_OPTIONS.find((o) => o.id === id)?.title ?? '—';
}

export function labelForContactPref(id: ContactPref | ''): string {
  return CONTACT_PREF_OPTIONS.find((o) => o.id === id)?.title ?? '—';
}

export function labelForBudget(id: BudgetBand | ''): string {
  return BUDGET_OPTIONS.find((o) => o.id === id)?.title ?? '—';
}

export function labelForDays(days: Weekday[]): string {
  if (!days.length) return '—';
  return days.map((d) => WEEKDAY_OPTIONS.find((o) => o.id === d)?.label ?? d).join(', ');
}

export function labelForAreas(ids: string[]): string {
  if (!ids.length) return '—';
  return ids.map((id) => AREA_OPTIONS.find((o) => o.id === id)?.title ?? id).join(', ');
}

export function labelForAddons(ids: string[]): string {
  if (!ids.length) return '—';
  return ids.map((id) => ADDON_OPTIONS.find((o) => o.id === id)?.title ?? id).join(', ');
}

export function toggleMulti(list: string[], id: string, exclusiveNone = false): string[] {
  if (exclusiveNone && id === 'none') return ['none'];
  const withoutNone = list.filter((x) => x !== 'none');
  if (withoutNone.includes(id)) return withoutNone.filter((x) => x !== id);
  return [...withoutNone, id];
}
