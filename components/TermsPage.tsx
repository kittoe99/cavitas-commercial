import React from 'react';
import { Link } from 'react-router-dom';
import { LegalDocument } from './LegalDocument';
import { SITE_NAME, SITE_PHONE_DISPLAY, SITE_URL } from '../seo';

const EFFECTIVE = 'July 22, 2026';
const PHONE_TEL = '2067462523';

export const TermsPage: React.FC = () => (
  <LegalDocument
    title="Terms of Service"
    effectiveDate={EFFECTIVE}
    intro={`These Terms of Service (“Terms”) govern your access to and use of ${SITE_URL} and related online services operated by ${SITE_NAME} (“Cavitas,” “we,” “us,” or “our”). By using the site, requesting a quote, or contacting us, you agree to these Terms.`}
    related={{ label: 'Privacy Policy', to: '/privacy' }}
    sections={[
      {
        title: '1. Who we are',
        body: (
          <>
            <p>
              Cavitas Commercial Cleaning connects businesses with independent commercial cleaning
              providers for services such as office cleaning, janitorial coverage, and floor care. We
              are a matching and coordination platform. Unless we expressly state otherwise in
              writing, Cavitas does not itself perform the cleaning work and is not the employer of
              the independent providers matched through our platform.
            </p>
          </>
        ),
      },
      {
        title: '2. Eligibility',
        body: (
          <>
            <p>
              You may use our site if you are at least 18 years old and able to form a binding
              contract. You represent that information you submit (including quote and contact forms)
              is accurate and that you are authorized to request services for the business or property
              described.
            </p>
          </>
        ),
      },
      {
        title: '3. Quotes, estimates, and pricing',
        body: (
          <>
            <p>
              Online estimates, price ranges, and “instant” pricing tools are informational only.
              They are not a binding offer, contract, or final invoice. Final pricing, scope,
              frequency, and scheduling are confirmed after follow-up and may depend on site
              conditions, provider availability, supplies, access requirements, and other factors.
            </p>
            <p>
              Submitting a quote or pricing request does not guarantee that a provider will be
              available, that a match will be made, or that services will begin on any particular date.
            </p>
          </>
        ),
      },
      {
        title: '4. Independent providers',
        body: (
          <>
            <p>
              Cleaning services may be performed by independent third-party providers. Those
              providers are responsible for their own workers, insurance, licensing (where required),
              equipment, and work quality, except to the extent Cavitas expressly assumes a
              responsibility in a separate written agreement with you.
            </p>
            <p>
              Any agreement for on-site cleaning may be between you and the provider, between you and
              Cavitas, or as otherwise described at the time of booking. Read any service agreement
              carefully before work begins.
            </p>
          </>
        ),
      },
      {
        title: '5. Your responsibilities',
        body: (
          <>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate property, access, and contact information.</li>
              <li>Ensure safe, lawful access for providers at agreed times.</li>
              <li>Disclose hazards, restricted areas, or special instructions that affect cleaning.</li>
              <li>Not misuse the site (including scraping, abuse, or submitting false leads).</li>
            </ul>
          </>
        ),
      },
      {
        title: '6. Communications',
        body: (
          <>
            <p>
              By submitting a form or providing a phone number or email, you consent to Cavitas (and,
              where relevant, matched providers) contacting you about your inquiry by phone, text,
              email, or similar means. Message and data rates may apply. You may opt out of marketing
              messages as described in our{' '}
              <Link to="/privacy">Privacy Policy</Link>; transactional messages about your request may
              still be sent.
            </p>
          </>
        ),
      },
      {
        title: '7. Intellectual property',
        body: (
          <>
            <p>
              Site content, branding, logos, and design are owned by Cavitas or its licensors. You may
              not copy, scrape, or reuse them for commercial purposes without our prior written
              consent, except for fair use or as allowed by law.
            </p>
          </>
        ),
      },
      {
        title: '8. Disclaimers',
        body: (
          <>
            <p>
              THE SITE AND ONLINE TOOLS ARE PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE FULLEST
              EXTENT PERMITTED BY LAW, CAVITAS DISCLAIMS WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We do not warrant uninterrupted or error-free
              operation, or that estimates will match final pricing.
            </p>
          </>
        ),
      },
      {
        title: '9. Limitation of liability',
        body: (
          <>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, CAVITAS AND ITS OWNERS, OFFICERS, AND AGENTS
              WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
              DAMAGES, OR FOR LOST PROFITS, ARISING FROM YOUR USE OF THE SITE OR RELIANCE ON
              ESTIMATES. OUR TOTAL LIABILITY FOR CLAIMS RELATING TO THE SITE IN ANY TWELVE-MONTH PERIOD
              WILL NOT EXCEED THE GREATER OF ONE HUNDRED U.S. DOLLARS (USD $100) OR THE AMOUNTS YOU
              PAID DIRECTLY TO CAVITAS FOR PLATFORM SERVICES IN THAT PERIOD (IF ANY). Some
              jurisdictions do not allow certain limitations; in those places, our liability is
              limited to the maximum extent allowed.
            </p>
          </>
        ),
      },
      {
        title: '10. Indemnity',
        body: (
          <>
            <p>
              You agree to indemnify and hold harmless Cavitas from claims, losses, and expenses
              (including reasonable attorneys’ fees) arising from your misuse of the site, inaccurate
              submissions, or violation of these Terms, except to the extent caused by our willful
              misconduct.
            </p>
          </>
        ),
      },
      {
        title: '11. Third-party links and tools',
        body: (
          <>
            <p>
              The site may use third-party services (for example analytics, advertising tags,
              geolocation, or form infrastructure). Those services are governed by their own terms
              and policies. Cavitas is not responsible for third-party sites or services we do not
              control.
            </p>
          </>
        ),
      },
      {
        title: '12. Changes',
        body: (
          <>
            <p>
              We may update these Terms from time to time. The “Effective date” above will change when
              we do. Continued use of the site after changes means you accept the updated Terms. If
              you do not agree, stop using the site.
            </p>
          </>
        ),
      },
      {
        title: '13. Governing law',
        body: (
          <>
            <p>
              These Terms are governed by the laws of the State of Washington, USA, without regard to
              conflict-of-law rules, unless mandatory consumer protections in your jurisdiction
              provide otherwise. Courts located in King County, Washington, will have exclusive
              jurisdiction over disputes arising from these Terms or the site, subject to applicable
              law.
            </p>
          </>
        ),
      },
      {
        title: '14. Contact',
        body: (
          <>
            <p>
              Questions about these Terms:{' '}
              <Link to="/contact">Contact us</Link> or call{' '}
              <a href={`tel:${PHONE_TEL}`}>{SITE_PHONE_DISPLAY}</a>.
            </p>
          </>
        ),
      },
    ]}
  />
);
