/**
 * Quote pricing from Desktop "office pricing.odt".
 *
 * Facility $/sq ft bands are calibrated to the document’s real Denver client
 * examples (not the lower marketing summary table alone):
 *   - Tech office 7,000 sq ft · 5×/week → $2,750/mo  (~$0.39/sq ft)
 *   - Medical clinic 4,500 sq ft · daily → $3,100/mo (~$0.69/sq ft)
 *   - Warehouse 25,000 sq ft · 3×/week → $4,800/mo   (~$0.19/sq ft at 3×)
 *
 * Spreads between facility types follow the doc’s “Price by Facility Type” table.
 * Rates below are monthly $/sq ft at a daily / 5×-week baseline; other
 * frequencies are scaled from that baseline.
 */
import type { Frequency, OccupantBand, QuoteAnswers, ServiceType } from './quoteTypes';

export type QuoteEstimate = {
  low: number;
  high: number;
  perVisit: boolean;
  label: string;
  rateLow: number;
  rateHigh: number;
  facilityLabel: string;
};

type RateBand = { low: number; high: number; label: string };

/**
 * Monthly $/sq ft at daily (5×) baseline — example-calibrated.
 * Spreads mirror the ODT facility table ratios.
 */
const FACILITY_RATES: Record<string, RateBand> = {
  // Office example: 7,000 sq ft × ~$0.39 = $2,750 @ 5×/week
  'Office Spaces': { low: 0.28, high: 0.51, label: 'Office Buildings' },
  'Financial Institutions': { low: 0.28, high: 0.51, label: 'Office Buildings' },
  'Commercial Real Estate': { low: 0.28, high: 0.51, label: 'Office Buildings' },
  'Apartment Buildings': { low: 0.28, high: 0.51, label: 'Office Buildings' },
  // Medical example: 4,500 sq ft × ~$0.69 = $3,100 @ daily
  'Healthcare Facilities': { low: 0.5, high: 0.88, label: 'Medical Facilities' },
  // Warehouse example: 25,000 sq ft @ 3× ≈ $4,800 → ~$0.30/sq ft daily baseline
  'Industrial Spaces': { low: 0.21, high: 0.39, label: 'Industrial/Warehouse' },
  // Schools / retail: same uplift vs ODT summary table as office (~2.3×)
  'Educational Facilities': { low: 0.23, high: 0.46, label: 'Schools/Education' },
  'Retail Spaces': { low: 0.35, high: 0.58, label: 'Retail Centers' },
  'Car Dealerships': { low: 0.35, high: 0.58, label: 'Retail Centers' },
  'Entertainment Facilities': { low: 0.35, high: 0.58, label: 'Retail Centers' },
  Other: { low: 0.28, high: 0.51, label: 'Office Buildings' },
};

const DEFAULT_FACILITY: RateBand = { low: 0.28, high: 0.51, label: 'Office Buildings' };

/**
 * Scale vs daily / 5×-week baseline (matches ODT example frequencies).
 */
const FREQ_SCALE: Record<Frequency, number> = {
  daily: 1,
  '3x-week': 0.65,
  weekly: 0.32,
  biweekly: 0.2,
  monthly: 0.14,
  /** One-time deep clean ≈ several nightly equivalents */
  'one-time': 0.28,
};

const SERVICE_MULT: Record<ServiceType, number> = {
  office: 1,
  janitorial: 1.06,
  'floor-care': 1.1,
};

const OCCUPANT_MULT: Record<OccupantBand, number> = {
  '1-10': 1,
  '11-25': 1.03,
  '26-50': 1.06,
  '51-100': 1.1,
  '100-plus': 1.15,
};

const ADDON_PCT: Record<string, number> = {
  carpet: 0.05,
  windows: 0.04,
  'floor-specialty': 0.08,
  disinfection: 0.1,
};

function roundTo(n: number, step = 5): number {
  return Math.round(n / step) * step;
}

export function parseSqft(raw: string): number | null {
  const n = Number(String(raw).replace(/,/g, '').trim());
  if (!Number.isFinite(n) || n <= 0) return null;
  return n;
}

export function facilityRateForIndustry(industry: string): RateBand {
  return FACILITY_RATES[industry] ?? DEFAULT_FACILITY;
}

export function estimateQuote(answers: QuoteAnswers): QuoteEstimate | null {
  const sqft = parseSqft(answers.sqft);
  if (!answers.service || !answers.frequency || !answers.industry || sqft === null) return null;

  const facility = facilityRateForIndustry(answers.industry);
  const serviceMult = SERVICE_MULT[answers.service];
  const freqScale = FREQ_SCALE[answers.frequency];
  const occupantBoost = answers.occupants ? OCCUPANT_MULT[answers.occupants] : 1;

  let low = sqft * facility.low * serviceMult;
  let high = sqft * facility.high * serviceMult;

  // Layout complexity (restrooms / multi-floor) — modest vs sq ft driver
  const restrooms = Math.min(Math.max(Number(answers.restrooms) || 0, 0), 40);
  const floors = Math.min(Math.max(Number(answers.floors) || 1, 1), 30);
  const layoutAdd = restrooms * 45 + Math.max(floors - 1, 0) * 55;
  low += layoutAdd * 0.9;
  high += layoutAdd * 1.15;

  const addonPct = answers.addons
    .filter((a) => a !== 'none')
    .reduce((sum, id) => sum + (ADDON_PCT[id] ?? 0), 0);
  if (addonPct > 0) {
    low *= 1 + addonPct * 0.9;
    high *= 1 + addonPct;
  }

  low *= occupantBoost * freqScale;
  high *= occupantBoost * freqScale;

  const minJob = answers.frequency === 'one-time' ? 350 : 500;
  low = Math.max(low, minJob * (answers.frequency === 'one-time' ? 1 : Math.max(freqScale, 0.35)));
  high = Math.max(high, low * 1.1);

  const isRecurring = answers.frequency !== 'one-time';
  const rateLabel = `$${facility.low.toFixed(2)}–$${facility.high.toFixed(2)}/sq ft`;

  return {
    low: roundTo(low),
    high: roundTo(high),
    perVisit: isRecurring,
    rateLow: facility.low,
    rateHigh: facility.high,
    facilityLabel: facility.label,
    label: isRecurring
      ? `${facility.label} ${rateLabel} (monthly at your frequency) · ${sqft.toLocaleString('en-US')} sq ft — based on Denver project examples; final pricing confirmed after review.`
      : `${facility.label} ${rateLabel} · ${sqft.toLocaleString('en-US')} sq ft one-time estimate — based on Denver project examples; final pricing confirmed after review.`,
  };
}

export function formatMoney(n: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n);
}
