/**
 * Placeholder quote pricing — replace multipliers with real rates later.
 * Wizard UI calls `estimateQuote` only; swap this file when configuring pricing.
 */
import type { Frequency, OccupantBand, QuoteAnswers, ServiceType, SqftBand } from './quoteTypes';

export type QuoteEstimate = {
  low: number;
  high: number;
  perVisit: boolean;
  label: string;
};

const SERVICE_BASE: Record<ServiceType, number> = {
  office: 180,
  janitorial: 220,
  'floor-care': 350,
};

const SQFT_MULT: Record<SqftBand, number> = {
  'under-2k': 1,
  '2k-5k': 1.45,
  '5k-10k': 2.1,
  '10k-25k': 3.2,
  '25k-plus': 4.8,
};

/** Visits per month for range display. */
const FREQ_MULT: Record<Frequency, number> = {
  daily: 20,
  '3x-week': 12,
  weekly: 4,
  biweekly: 2,
  monthly: 1,
  'one-time': 1,
};

const OCCUPANT_MULT: Record<OccupantBand, number> = {
  '1-10': 1,
  '11-25': 1.08,
  '26-50': 1.15,
  '51-100': 1.25,
  '100-plus': 1.4,
};

const ADDON_FEE: Record<string, number> = {
  carpet: 75,
  windows: 40,
  'floor-specialty': 120,
  disinfection: 55,
};

function roundTo(n: number, step = 5): number {
  return Math.round(n / step) * step;
}

export function estimateQuote(answers: QuoteAnswers): QuoteEstimate | null {
  if (!answers.service || !answers.sqftBand || !answers.frequency) return null;

  const base = SERVICE_BASE[answers.service] * SQFT_MULT[answers.sqftBand];
  const restrooms = Math.min(Math.max(Number(answers.restrooms) || 0, 0), 40);
  const floors = Math.min(Math.max(Number(answers.floors) || 1, 1), 30);
  const areaBoost = 1 + Math.max(answers.areas.length - 3, 0) * 0.04;
  const occupantBoost = answers.occupants ? OCCUPANT_MULT[answers.occupants] : 1;
  const addonSum = answers.addons
    .filter((a) => a !== 'none')
    .reduce((sum, id) => sum + (ADDON_FEE[id] ?? 0), 0);

  const extras = restrooms * 18 + Math.max(floors - 1, 0) * 25 + addonSum;
  const perVisit = roundTo((base + extras) * areaBoost * occupantBoost);
  const isRecurring = answers.frequency !== 'one-time';
  const periodMid = perVisit * FREQ_MULT[answers.frequency];

  const low = roundTo(periodMid * 0.88);
  const high = roundTo(periodMid * 1.18);

  return {
    low,
    high,
    perVisit: isRecurring,
    label: isRecurring
      ? 'Estimated monthly range — final pricing confirmed after review.'
      : 'Estimated one-time range — final pricing confirmed after review.',
  };
}

export function formatMoney(n: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n);
}
