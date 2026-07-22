import { useEffect, useState } from 'react';
import {
  DEFAULT_LOCATION,
  detectLocation,
  type DetectedLocation,
} from '../lib/detectLocation';
import { marketsForState, type ServiceLocation } from '../lib/stateMarkets';
import { SITE_PHONE_DISPLAY } from '../seo';

/** Full GeoJS location (city + state) for nav and localized markets. */
export function useDetectedLocation(
  fallback: DetectedLocation = DEFAULT_LOCATION,
): DetectedLocation {
  const [location, setLocation] = useState(fallback);

  useEffect(() => {
    let cancelled = false;
    detectLocation().then((loc) => {
      if (!cancelled) setLocation(loc);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return location;
}

/** Nav city label via free GeoJS IP lookup; falls back to Denver, CO. */
export function useDetectedCity(fallback = DEFAULT_LOCATION.label): string {
  const location = useDetectedLocation();
  return location.label || fallback;
}

/** Top markets for the visitor's detected state (shared phone). */
export function useLocalMarkets(): ServiceLocation[] {
  const location = useDetectedLocation();
  return marketsForState(location.state, SITE_PHONE_DISPLAY, location.city);
}
