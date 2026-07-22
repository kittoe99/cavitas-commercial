import { useEffect, useState } from 'react';
import { DEFAULT_CITY_LABEL, detectCityLabel } from '../lib/detectLocation';

/** Resolves visitor city via free GeoJS IP lookup; falls back to Denver, CO. */
export function useDetectedCity(fallback = DEFAULT_CITY_LABEL): string {
  const [city, setCity] = useState(fallback);

  useEffect(() => {
    let cancelled = false;
    detectCityLabel().then((label) => {
      if (!cancelled) setCity(label);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return city;
}
