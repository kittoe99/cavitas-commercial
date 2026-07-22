/** Top commercial markets by US state — used for localized footer/contact locations. */

export type MarketCity = {
  city: string;
  /** Short service-area line (no fabricated street addresses). */
  area: string;
};

/** Four primary markets per state (population / commercial hubs). */
export const TOP_MARKETS_BY_STATE: Record<string, MarketCity[]> = {
  AL: [
    { city: 'Birmingham', area: 'Serving Birmingham metro area, AL' },
    { city: 'Huntsville', area: 'Serving Huntsville metro area, AL' },
    { city: 'Mobile', area: 'Serving Mobile metro area, AL' },
    { city: 'Montgomery', area: 'Serving Montgomery metro area, AL' },
  ],
  AK: [
    { city: 'Anchorage', area: 'Serving Anchorage metro area, AK' },
    { city: 'Fairbanks', area: 'Serving Fairbanks area, AK' },
    { city: 'Juneau', area: 'Serving Juneau area, AK' },
    { city: 'Wasilla', area: 'Serving Mat-Su Valley, AK' },
  ],
  AZ: [
    { city: 'Phoenix', area: 'Serving Phoenix metro area, AZ' },
    { city: 'Tucson', area: 'Serving Tucson metro area, AZ' },
    { city: 'Mesa', area: 'Serving Mesa / East Valley, AZ' },
    { city: 'Scottsdale', area: 'Serving Scottsdale area, AZ' },
  ],
  AR: [
    { city: 'Little Rock', area: 'Serving Little Rock metro area, AR' },
    { city: 'Fayetteville', area: 'Serving Northwest Arkansas, AR' },
    { city: 'Fort Smith', area: 'Serving Fort Smith area, AR' },
    { city: 'Springdale', area: 'Serving Springdale area, AR' },
  ],
  CA: [
    { city: 'Los Angeles', area: 'Serving Greater Los Angeles, CA' },
    { city: 'San Diego', area: 'Serving San Diego metro area, CA' },
    { city: 'San Jose', area: 'Serving Silicon Valley / San Jose, CA' },
    { city: 'San Francisco', area: 'Serving San Francisco Bay Area, CA' },
  ],
  CO: [
    { city: 'Denver', area: 'Serving Denver metro area, CO' },
    { city: 'Colorado Springs', area: 'Serving Colorado Springs area, CO' },
    { city: 'Aurora', area: 'Serving Aurora / East Metro, CO' },
    { city: 'Fort Collins', area: 'Serving Fort Collins / Northern Colorado, CO' },
  ],
  CT: [
    { city: 'Bridgeport', area: 'Serving Bridgeport area, CT' },
    { city: 'New Haven', area: 'Serving New Haven area, CT' },
    { city: 'Stamford', area: 'Serving Stamford / Fairfield County, CT' },
    { city: 'Hartford', area: 'Serving Hartford metro area, CT' },
  ],
  DE: [
    { city: 'Wilmington', area: 'Serving Wilmington metro area, DE' },
    { city: 'Dover', area: 'Serving Dover area, DE' },
    { city: 'Newark', area: 'Serving Newark area, DE' },
    { city: 'Middletown', area: 'Serving Middletown area, DE' },
  ],
  FL: [
    { city: 'Miami', area: 'Serving Miami metro area, FL' },
    { city: 'Orlando', area: 'Serving Orlando metro area, FL' },
    { city: 'Tampa', area: 'Serving Tampa Bay area, FL' },
    { city: 'Jacksonville', area: 'Serving Jacksonville metro area, FL' },
  ],
  GA: [
    { city: 'Atlanta', area: 'Serving Atlanta metro area, GA' },
    { city: 'Augusta', area: 'Serving Augusta area, GA' },
    { city: 'Savannah', area: 'Serving Savannah area, GA' },
    { city: 'Columbus', area: 'Serving Columbus area, GA' },
  ],
  HI: [
    { city: 'Honolulu', area: 'Serving Honolulu / Oahu, HI' },
    { city: 'Hilo', area: 'Serving Hilo / Big Island, HI' },
    { city: 'Kailua', area: 'Serving Kailua area, HI' },
    { city: 'Kapolei', area: 'Serving Kapolei area, HI' },
  ],
  ID: [
    { city: 'Boise', area: 'Serving Boise metro area, ID' },
    { city: 'Meridian', area: 'Serving Meridian area, ID' },
    { city: 'Nampa', area: 'Serving Nampa area, ID' },
    { city: 'Idaho Falls', area: 'Serving Idaho Falls area, ID' },
  ],
  IL: [
    { city: 'Chicago', area: 'Serving Chicago metro area, IL' },
    { city: 'Aurora', area: 'Serving Aurora / Fox Valley, IL' },
    { city: 'Naperville', area: 'Serving Naperville area, IL' },
    { city: 'Joliet', area: 'Serving Joliet area, IL' },
  ],
  IN: [
    { city: 'Indianapolis', area: 'Serving Indianapolis metro area, IN' },
    { city: 'Fort Wayne', area: 'Serving Fort Wayne area, IN' },
    { city: 'Evansville', area: 'Serving Evansville area, IN' },
    { city: 'South Bend', area: 'Serving South Bend area, IN' },
  ],
  IA: [
    { city: 'Des Moines', area: 'Serving Des Moines metro area, IA' },
    { city: 'Cedar Rapids', area: 'Serving Cedar Rapids area, IA' },
    { city: 'Davenport', area: 'Serving Quad Cities, IA' },
    { city: 'Sioux City', area: 'Serving Sioux City area, IA' },
  ],
  KS: [
    { city: 'Wichita', area: 'Serving Wichita metro area, KS' },
    { city: 'Overland Park', area: 'Serving Overland Park / KC Metro, KS' },
    { city: 'Kansas City', area: 'Serving Kansas City, KS' },
    { city: 'Topeka', area: 'Serving Topeka area, KS' },
  ],
  KY: [
    { city: 'Louisville', area: 'Serving Louisville metro area, KY' },
    { city: 'Lexington', area: 'Serving Lexington area, KY' },
    { city: 'Bowling Green', area: 'Serving Bowling Green area, KY' },
    { city: 'Owensboro', area: 'Serving Owensboro area, KY' },
  ],
  LA: [
    { city: 'New Orleans', area: 'Serving New Orleans metro area, LA' },
    { city: 'Baton Rouge', area: 'Serving Baton Rouge area, LA' },
    { city: 'Shreveport', area: 'Serving Shreveport area, LA' },
    { city: 'Lafayette', area: 'Serving Lafayette area, LA' },
  ],
  ME: [
    { city: 'Portland', area: 'Serving Portland metro area, ME' },
    { city: 'Lewiston', area: 'Serving Lewiston area, ME' },
    { city: 'Bangor', area: 'Serving Bangor area, ME' },
    { city: 'South Portland', area: 'Serving South Portland area, ME' },
  ],
  MD: [
    { city: 'Baltimore', area: 'Serving Baltimore metro area, MD' },
    { city: 'Columbia', area: 'Serving Columbia / Howard County, MD' },
    { city: 'Germantown', area: 'Serving Germantown / Montgomery County, MD' },
    { city: 'Silver Spring', area: 'Serving Silver Spring area, MD' },
  ],
  MA: [
    { city: 'Boston', area: 'Serving Greater Boston, MA' },
    { city: 'Worcester', area: 'Serving Worcester area, MA' },
    { city: 'Springfield', area: 'Serving Springfield area, MA' },
    { city: 'Cambridge', area: 'Serving Cambridge / Metro Boston, MA' },
  ],
  MI: [
    { city: 'Detroit', area: 'Serving Detroit metro area, MI' },
    { city: 'Grand Rapids', area: 'Serving Grand Rapids area, MI' },
    { city: 'Warren', area: 'Serving Warren / Metro Detroit, MI' },
    { city: 'Ann Arbor', area: 'Serving Ann Arbor area, MI' },
  ],
  MN: [
    { city: 'Minneapolis', area: 'Serving Twin Cities / Minneapolis, MN' },
    { city: 'Saint Paul', area: 'Serving Saint Paul metro area, MN' },
    { city: 'Rochester', area: 'Serving Rochester area, MN' },
    { city: 'Duluth', area: 'Serving Duluth area, MN' },
  ],
  MS: [
    { city: 'Jackson', area: 'Serving Jackson metro area, MS' },
    { city: 'Gulfport', area: 'Serving Gulfport / Coastal MS' },
    { city: 'Southaven', area: 'Serving Southaven / DeSoto County, MS' },
    { city: 'Hattiesburg', area: 'Serving Hattiesburg area, MS' },
  ],
  MO: [
    { city: 'Kansas City', area: 'Serving Kansas City metro area, MO' },
    { city: 'St. Louis', area: 'Serving St. Louis metro area, MO' },
    { city: 'Springfield', area: 'Serving Springfield area, MO' },
    { city: 'Columbia', area: 'Serving Columbia area, MO' },
  ],
  MT: [
    { city: 'Billings', area: 'Serving Billings area, MT' },
    { city: 'Missoula', area: 'Serving Missoula area, MT' },
    { city: 'Great Falls', area: 'Serving Great Falls area, MT' },
    { city: 'Bozeman', area: 'Serving Bozeman area, MT' },
  ],
  NE: [
    { city: 'Omaha', area: 'Serving Omaha metro area, NE' },
    { city: 'Lincoln', area: 'Serving Lincoln area, NE' },
    { city: 'Bellevue', area: 'Serving Bellevue area, NE' },
    { city: 'Grand Island', area: 'Serving Grand Island area, NE' },
  ],
  NV: [
    { city: 'Las Vegas', area: 'Serving Las Vegas metro area, NV' },
    { city: 'Henderson', area: 'Serving Henderson area, NV' },
    { city: 'Reno', area: 'Serving Reno metro area, NV' },
    { city: 'North Las Vegas', area: 'Serving North Las Vegas, NV' },
  ],
  NH: [
    { city: 'Manchester', area: 'Serving Manchester area, NH' },
    { city: 'Nashua', area: 'Serving Nashua area, NH' },
    { city: 'Concord', area: 'Serving Concord area, NH' },
    { city: 'Dover', area: 'Serving Dover area, NH' },
  ],
  NJ: [
    { city: 'Newark', area: 'Serving Newark / North Jersey, NJ' },
    { city: 'Jersey City', area: 'Serving Jersey City area, NJ' },
    { city: 'Paterson', area: 'Serving Paterson area, NJ' },
    { city: 'Elizabeth', area: 'Serving Elizabeth area, NJ' },
  ],
  NM: [
    { city: 'Albuquerque', area: 'Serving Albuquerque metro area, NM' },
    { city: 'Las Cruces', area: 'Serving Las Cruces area, NM' },
    { city: 'Rio Rancho', area: 'Serving Rio Rancho area, NM' },
    { city: 'Santa Fe', area: 'Serving Santa Fe area, NM' },
  ],
  NY: [
    { city: 'New York', area: 'Serving New York City metro area, NY' },
    { city: 'Buffalo', area: 'Serving Buffalo metro area, NY' },
    { city: 'Rochester', area: 'Serving Rochester area, NY' },
    { city: 'Albany', area: 'Serving Capital Region / Albany, NY' },
  ],
  NC: [
    { city: 'Charlotte', area: 'Serving Charlotte metro area, NC' },
    { city: 'Raleigh', area: 'Serving Raleigh / Triangle, NC' },
    { city: 'Greensboro', area: 'Serving Greensboro area, NC' },
    { city: 'Durham', area: 'Serving Durham / Triangle, NC' },
  ],
  ND: [
    { city: 'Fargo', area: 'Serving Fargo metro area, ND' },
    { city: 'Bismarck', area: 'Serving Bismarck area, ND' },
    { city: 'Grand Forks', area: 'Serving Grand Forks area, ND' },
    { city: 'Minot', area: 'Serving Minot area, ND' },
  ],
  OH: [
    { city: 'Columbus', area: 'Serving Columbus metro area, OH' },
    { city: 'Cleveland', area: 'Serving Cleveland metro area, OH' },
    { city: 'Cincinnati', area: 'Serving Cincinnati metro area, OH' },
    { city: 'Toledo', area: 'Serving Toledo area, OH' },
  ],
  OK: [
    { city: 'Oklahoma City', area: 'Serving Oklahoma City metro area, OK' },
    { city: 'Tulsa', area: 'Serving Tulsa metro area, OK' },
    { city: 'Norman', area: 'Serving Norman area, OK' },
    { city: 'Broken Arrow', area: 'Serving Broken Arrow area, OK' },
  ],
  OR: [
    { city: 'Portland', area: 'Serving Portland metro area, OR' },
    { city: 'Salem', area: 'Serving Salem area, OR' },
    { city: 'Eugene', area: 'Serving Eugene area, OR' },
    { city: 'Bend', area: 'Serving Bend / Central Oregon, OR' },
  ],
  PA: [
    { city: 'Philadelphia', area: 'Serving Philadelphia metro area, PA' },
    { city: 'Pittsburgh', area: 'Serving Pittsburgh metro area, PA' },
    { city: 'Allentown', area: 'Serving Lehigh Valley, PA' },
    { city: 'Harrisburg', area: 'Serving Harrisburg area, PA' },
  ],
  RI: [
    { city: 'Providence', area: 'Serving Providence metro area, RI' },
    { city: 'Warwick', area: 'Serving Warwick area, RI' },
    { city: 'Cranston', area: 'Serving Cranston area, RI' },
    { city: 'Pawtucket', area: 'Serving Pawtucket area, RI' },
  ],
  SC: [
    { city: 'Charleston', area: 'Serving Charleston metro area, SC' },
    { city: 'Columbia', area: 'Serving Columbia metro area, SC' },
    { city: 'Greenville', area: 'Serving Greenville area, SC' },
    { city: 'Myrtle Beach', area: 'Serving Myrtle Beach area, SC' },
  ],
  SD: [
    { city: 'Sioux Falls', area: 'Serving Sioux Falls metro area, SD' },
    { city: 'Rapid City', area: 'Serving Rapid City area, SD' },
    { city: 'Aberdeen', area: 'Serving Aberdeen area, SD' },
    { city: 'Brookings', area: 'Serving Brookings area, SD' },
  ],
  TN: [
    { city: 'Nashville', area: 'Serving Nashville metro area, TN' },
    { city: 'Memphis', area: 'Serving Memphis metro area, TN' },
    { city: 'Knoxville', area: 'Serving Knoxville area, TN' },
    { city: 'Chattanooga', area: 'Serving Chattanooga area, TN' },
  ],
  TX: [
    { city: 'Houston', area: 'Serving Houston metro area, TX' },
    { city: 'Dallas', area: 'Serving Dallas / DFW, TX' },
    { city: 'Austin', area: 'Serving Austin metro area, TX' },
    { city: 'San Antonio', area: 'Serving San Antonio metro area, TX' },
  ],
  UT: [
    { city: 'Salt Lake City', area: 'Serving Salt Lake City metro area, UT' },
    { city: 'West Valley City', area: 'Serving West Valley City area, UT' },
    { city: 'Provo', area: 'Serving Provo / Utah Valley, UT' },
    { city: 'West Jordan', area: 'Serving West Jordan area, UT' },
  ],
  VT: [
    { city: 'Burlington', area: 'Serving Burlington metro area, VT' },
    { city: 'South Burlington', area: 'Serving South Burlington area, VT' },
    { city: 'Rutland', area: 'Serving Rutland area, VT' },
    { city: 'Essex', area: 'Serving Essex area, VT' },
  ],
  VA: [
    { city: 'Virginia Beach', area: 'Serving Hampton Roads, VA' },
    { city: 'Norfolk', area: 'Serving Norfolk area, VA' },
    { city: 'Richmond', area: 'Serving Richmond metro area, VA' },
    { city: 'Arlington', area: 'Serving Northern Virginia, VA' },
  ],
  WA: [
    { city: 'Seattle', area: 'Serving Seattle metro area, WA' },
    { city: 'Spokane', area: 'Serving Spokane area, WA' },
    { city: 'Tacoma', area: 'Serving Tacoma / South Sound, WA' },
    { city: 'Bellevue', area: 'Serving Bellevue / Eastside, WA' },
  ],
  WV: [
    { city: 'Charleston', area: 'Serving Charleston area, WV' },
    { city: 'Huntington', area: 'Serving Huntington area, WV' },
    { city: 'Morgantown', area: 'Serving Morgantown area, WV' },
    { city: 'Parkersburg', area: 'Serving Parkersburg area, WV' },
  ],
  WI: [
    { city: 'Milwaukee', area: 'Serving Milwaukee metro area, WI' },
    { city: 'Madison', area: 'Serving Madison metro area, WI' },
    { city: 'Green Bay', area: 'Serving Green Bay area, WI' },
    { city: 'Kenosha', area: 'Serving Kenosha area, WI' },
  ],
  WY: [
    { city: 'Cheyenne', area: 'Serving Cheyenne area, WY' },
    { city: 'Casper', area: 'Serving Casper area, WY' },
    { city: 'Laramie', area: 'Serving Laramie area, WY' },
    { city: 'Gillette', area: 'Serving Gillette area, WY' },
  ],
  DC: [
    { city: 'Washington', area: 'Serving Washington, DC metro area' },
    { city: 'Georgetown', area: 'Serving Georgetown / NW DC' },
    { city: 'Capitol Hill', area: 'Serving Capitol Hill area, DC' },
    { city: 'Downtown DC', area: 'Serving Downtown Washington, DC' },
  ],
};

export const DEFAULT_STATE = 'CO';

export type ServiceLocation = {
  city: string;
  phone: string;
  address: string;
};

export function marketsForState(
  state: string,
  phone: string,
  userCity?: string,
): ServiceLocation[] {
  const abbr = state.trim().toUpperCase();
  const markets = TOP_MARKETS_BY_STATE[abbr] ?? TOP_MARKETS_BY_STATE[DEFAULT_STATE];
  let list = [...markets];

  const normalizedUser = userCity?.trim();
  if (normalizedUser) {
    const already = list.some((m) => m.city.toLowerCase() === normalizedUser.toLowerCase());
    if (!already) {
      list = [
        { city: normalizedUser, area: `Serving ${normalizedUser} metro area, ${abbr}` },
        ...list,
      ].slice(0, 4);
    }
  }

  return list.slice(0, 4).map((m) => ({
    city: m.city,
    phone,
    address: m.area,
  }));
}
