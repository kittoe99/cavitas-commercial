/** Shared types and option lists for the online quote wizard. */

export type ServiceType = 'office' | 'janitorial' | 'floor-care';
export type Frequency = 'one-time' | 'weekly' | 'biweekly' | 'monthly';
export type SqftBand = 'under-2k' | '2k-5k' | '5k-10k' | '10k-25k' | '25k-plus';
export type TimeWindow = 'business-hours' | 'after-hours' | 'flexible';
export type StartTimeframe = 'asap' | '2-weeks' | '1-month' | 'exploring';

export type Weekday = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export type QuoteAnswers = {
  service: ServiceType | '';
  industry: string;
  frequency: Frequency | '';
  sqftBand: SqftBand | '';
  restrooms: string;
  floors: string;
  city: string;
  zip: string;
  notes: string;
  preferredDays: Weekday[];
  timeWindow: TimeWindow | '';
  startTimeframe: StartTimeframe | '';
  name: string;
  businessName: string;
  email: string;
  phone: string;
};

export const EMPTY_QUOTE: QuoteAnswers = {
  service: '',
  industry: '',
  frequency: '',
  sqftBand: '',
  restrooms: '',
  floors: '',
  city: '',
  zip: '',
  notes: '',
  preferredDays: [],
  timeWindow: '',
  startTimeframe: '',
  name: '',
  businessName: '',
  email: '',
  phone: '',
};

export const SERVICE_OPTIONS: { id: ServiceType; title: string; blurb: string }[] = [
  { id: 'office', title: 'Office Cleaning', blurb: 'Desks, restrooms, floors, and common areas.' },
  { id: 'janitorial', title: 'Janitorial Services', blurb: 'Recurring coverage and facility support.' },
  { id: 'floor-care', title: 'Floor Care', blurb: 'Strip, wax, buff, and carpet extraction.' },
];

export const FREQUENCY_OPTIONS: { id: Frequency; title: string; blurb: string }[] = [
  { id: 'one-time', title: 'One-time', blurb: 'Single visit or deep clean.' },
  { id: 'weekly', title: 'Weekly', blurb: 'Most common for offices.' },
  { id: 'biweekly', title: 'Biweekly', blurb: 'Every other week.' },
  { id: 'monthly', title: 'Monthly', blurb: 'Light or specialized care.' },
];

export const SQFT_OPTIONS: { id: SqftBand; title: string }[] = [
  { id: 'under-2k', title: 'Under 2,000 sq ft' },
  { id: '2k-5k', title: '2,000 – 5,000 sq ft' },
  { id: '5k-10k', title: '5,000 – 10,000 sq ft' },
  { id: '10k-25k', title: '10,000 – 25,000 sq ft' },
  { id: '25k-plus', title: '25,000+ sq ft' },
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

export const QUOTE_STEPS = [
  { id: 'service', label: 'Service' },
  { id: 'property', label: 'Property' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'contact', label: 'Contact' },
  { id: 'review', label: 'Review' },
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

export function labelForTimeWindow(id: TimeWindow | ''): string {
  return TIME_WINDOW_OPTIONS.find((o) => o.id === id)?.title ?? '—';
}

export function labelForStart(id: StartTimeframe | ''): string {
  return START_OPTIONS.find((o) => o.id === id)?.title ?? '—';
}

export function labelForDays(days: Weekday[]): string {
  if (!days.length) return '—';
  return days.map((d) => WEEKDAY_OPTIONS.find((o) => o.id === d)?.label ?? d).join(', ');
}
