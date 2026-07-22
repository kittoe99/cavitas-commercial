/**
 * Placeholder quote pricing — replace multipliers with real rates later.
 * Wizard UI calls `estimateQuote` only; swap this file when configuring pricing.
 */
import type { Frequency, QuoteAnswers, ServiceType, SqftBand } from './quoteTypes';

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

/** Monthly-equivalent multiplier used for range display. */
const FREQ_MULT: Record<Frequency, number> = {
  'one-time': 1,
  weekly: 4,
  biweekly: 2,
  monthly: 1,
};

function roundTo(n: number, step = 5): number {
  return Math.round(n / step) * step;
}

export function estimateQuote(answers: QuoteAnswers): QuoteEstimate | null {
  if (!answers.service || !answers.sqftBand || !answers.frequency) return null;

  const base = SERVICE_BASE[answers.service] * SQFT_MULT[answers.sqftBand];
  const restrooms = Math.min(Math.max(Number(answers.restrooms) || 0, 0), 40);
  const floors = Math.min(Math.max(Number(answers.floors) || 1, 1), 30);
  const extras = restrooms * 18 + Math.max(floors - 1, 0) * 25;

  const perVisit = roundTo(base + extras);
  const isRecurring = answers.frequency !== 'one-time';
  const periodMult = FREQ_MULT[answers.frequency];
  const periodMid = perVisit * periodMult;

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
