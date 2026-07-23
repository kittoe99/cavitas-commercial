/**
 * Quote pricing calibrated toward mid–high market rates (Denver metro examples),
 * with stronger premiums for larger orgs vs small / mom-and-pop spaces.
 *
 * Reference anchors (daily / 5× baseline unless noted):
 *   - Office ~7,000 sq ft · 5×/week → roughly $3,200–$5,200/mo
 *   - Medical ~4,500 sq ft · daily → roughly $3,600–$5,800/mo
 *   - Warehouse ~25,000 sq ft · 3×/week → roughly $5,500–$9,000/mo
 *
 * Rates are monthly $/sq ft at a daily baseline; frequency scales from that.
 */
import type { Frequency, OccupantBand, QuoteAnswers, ServiceType } from './quoteTypes';
import { AREA_OPTIONS } from './quoteTypes';

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

/** Monthly $/sq ft at daily (5×) baseline — pushed toward higher commercial end. */
const FACILITY_RATES: Record<string, RateBand> = {
  'Office Spaces': { low: 0.36, high: 0.64, label: 'Office Buildings' },
  'Financial Institutions': { low: 0.38, high: 0.68, label: 'Office Buildings' },
  'Commercial Real Estate': { low: 0.36, high: 0.64, label: 'Office Buildings' },
  'Apartment Buildings': { low: 0.34, high: 0.6, label: 'Office Buildings' },
  'Healthcare Facilities': { low: 0.62, high: 1.05, label: 'Medical Facilities' },
  'Industrial Spaces': { low: 0.26, high: 0.48, label: 'Industrial/Warehouse' },
  'Educational Facilities': { low: 0.34, high: 0.6, label: 'Schools/Education' },
  'Retail Spaces': { low: 0.42, high: 0.72, label: 'Retail Centers' },
  'Car Dealerships': { low: 0.42, high: 0.72, label: 'Retail Centers' },
  'Entertainment Facilities': { low: 0.4, high: 0.7, label: 'Retail Centers' },
  Other: { low: 0.36, high: 0.64, label: 'Office Buildings' },
};

const DEFAULT_FACILITY: RateBand = { low: 0.36, high: 0.64, label: 'Office Buildings' };

/**
 * Scale vs daily / 5×-week baseline.
 * Less aggressive discounts so mid-week programs stay commercially priced.
 */
const FREQ_SCALE: Record<Frequency, number> = {
  daily: 1,
  '3x-week': 0.78,
  weekly: 0.42,
  biweekly: 0.28,
  monthly: 0.18,
  'one-time': 0.35,
};

const SERVICE_MULT: Record<ServiceType, number> = {
  office: 1,
  janitorial: 1.1,
  'floor-care': 1.14,
};

/** Stronger lift for larger headcounts (enterprise / multi-team facilities). */
const OCCUPANT_MULT: Record<OccupantBand, number> = {
  '1-10': 1,
  '11-25': 1.06,
  '26-50': 1.14,
  '51-100': 1.26,
  '100-plus': 1.4,
};

const ADDON_PCT: Record<string, number> = {
  carpet: 0.06,
  windows: 0.05,
  'floor-specialty': 0.1,
  disinfection: 0.12,
};

const BILLABLE_AREA_IDS = AREA_OPTIONS.map((a) => a.id).filter((id) => id !== 'other');

function roundTo(n: number, step = 5): number {
  return Math.round(n / step) * step;
}

/**
 * Organization / facility scale: small shops stay nearer baseline;
 * mid and large commercial accounts get a clear premium.
 * Returns multipliers for [low, high] sides (high pushed harder).
 */
function orgScale(sqft: number, occupants: OccupantBand | ''): { low: number; high: number } {
  let low = 1;
  let high = 1.08; // slight high-side bias even for small jobs

  if (sqft >= 2500) {
    low = 1.06;
    high = 1.14;
  }
  if (sqft >= 5000) {
    low = 1.12;
    high = 1.22;
  }
  if (sqft >= 10000) {
    low = 1.2;
    high = 1.34;
  }
  if (sqft >= 25000) {
    low = 1.28;
    high = 1.45;
  }

  // Large headcount without huge sq ft still signals a bigger org
  if (occupants === '51-100') {
    low *= 1.06;
    high *= 1.1;
  } else if (occupants === '100-plus') {
    low *= 1.12;
    high *= 1.18;
  }

  return { low, high };
}

/** More covered areas → fuller scope (not just sq ft). */
function areaCoverageMult(areas: string[]): number {
  const selected = areas.filter((id) => id !== 'none' && BILLABLE_AREA_IDS.includes(id));
  if (!selected.length) return 1;
  const ratio = selected.length / BILLABLE_AREA_IDS.length;
  // 1 area ≈ 1.0, full slate ≈ 1.16
  return 1 + ratio * 0.16;
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
  const scale = orgScale(sqft, answers.occupants);
  const areaMult = areaCoverageMult(answers.areas);

  let low = sqft * facility.low * serviceMult * areaMult;
  let high = sqft * facility.high * serviceMult * areaMult;

  // Layout complexity — restrooms & multi-floor weigh more for commercial sites
  const restrooms = Math.min(Math.max(Number(answers.restrooms) || 0, 0), 40);
  const floors = Math.min(Math.max(Number(answers.floors) || 1, 1), 30);
  const layoutAdd = restrooms * 65 + Math.max(floors - 1, 0) * 85;
  low += layoutAdd * 0.95;
  high += layoutAdd * 1.25;

  const addonPct = answers.addons
    .filter((a) => a !== 'none')
    .reduce((sum, id) => sum + (ADDON_PCT[id] ?? 0), 0);
  if (addonPct > 0) {
    low *= 1 + addonPct * 0.95;
    high *= 1 + addonPct * 1.1;
  }

  low *= occupantBoost * freqScale * scale.low;
  high *= occupantBoost * freqScale * scale.high;

  // Floor: higher for recurring commercial work; scales up with facility size
  const isOneTime = answers.frequency === 'one-time';
  let minLow = isOneTime ? 450 : 650;
  if (sqft >= 5000) minLow = isOneTime ? 750 : 1100;
  if (sqft >= 10000) minLow = isOneTime ? 1200 : 2200;
  if (sqft >= 25000) minLow = isOneTime ? 2000 : 4500;

  if (!isOneTime) {
    minLow *= Math.max(freqScale, 0.42);
  }

  low = Math.max(low, minLow);
  high = Math.max(high, low * 1.35);

  const isRecurring = !isOneTime;
  const rateLabel = `$${facility.low.toFixed(2)}–$${facility.high.toFixed(2)}/sq ft`;

  return {
    low: roundTo(low),
    high: roundTo(high),
    perVisit: isRecurring,
    rateLow: facility.low,
    rateHigh: facility.high,
    facilityLabel: facility.label,
    label: isRecurring
      ? `${facility.label} ${rateLabel} (monthly at your frequency) · ${sqft.toLocaleString('en-US')} sq ft — mid–high market range; final pricing confirmed after review.`
      : `${facility.label} ${rateLabel} · ${sqft.toLocaleString('en-US')} sq ft one-time estimate — mid–high market range; final pricing confirmed after review.`,
  };
}

export function formatMoney(n: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n);
}
