import React from 'react';
import { Link } from 'react-router-dom';
import { LegalDocument } from './LegalDocument';
import { SITE_NAME, SITE_PHONE_DISPLAY, SITE_URL } from '../seo';

const EFFECTIVE = 'July 22, 2026';
const PHONE_TEL = '2067462523';

export const PrivacyPage: React.FC = () => (
  <LegalDocument
    title="Privacy Policy"
    effectiveDate={EFFECTIVE}
    intro={`This Privacy Policy explains how ${SITE_NAME} (“Cavitas,” “we,” “us,” or “our”) collects, uses, and shares information when you visit ${SITE_URL}, request a quote or estimate, contact us, or otherwise use our online services.`}
    related={{ label: 'Terms of Service', to: '/terms' }}
    sections={[
      {
        title: '1. Scope',
        body: (
          <>
            <p>
              This policy covers our website and online forms. It does not cover independent cleaning
              providers’ own practices once you engage with them directly, or third-party websites
              linked from our site.
            </p>
          </>
        ),
      },
      {
        title: '2. Information we collect',
        body: (
          <>
            <p>
              <strong className="text-[var(--text)] font-semibold">You provide:</strong> name,
              business name, email, phone number, postal/ZIP code, city, property details (such as
              square footage, service type, frequency, restrooms, floors, notes), and message
              content when you use quote, pricing, or contact forms.
            </p>
            <p>
              <strong className="text-[var(--text)] font-semibold">Collected automatically:</strong>{' '}
              device and browser information, pages viewed, approximate location derived from IP
              (including via third-party geolocation services such as GeoJS to personalize market
              display), referral URLs, and similar usage data. We and our partners may use cookies,
              pixels, and similar technologies (including Google advertising tags) for analytics and
              advertising measurement.
            </p>
          </>
        ),
      },
      {
        title: '3. How we use information',
        body: (
          <>
            <p>We use information to:</p>
            <ul>
              <li>Respond to quote, pricing, and contact requests</li>
              <li>Match or refer you to independent cleaning providers</li>
              <li>Operate, secure, and improve the website</li>
              <li>Measure advertising performance and conversions</li>
              <li>Comply with law and enforce our Terms</li>
              <li>Send service-related messages about your inquiry</li>
            </ul>
          </>
        ),
      },
      {
        title: '4. How we share information',
        body: (
          <>
            <p>We may share information with:</p>
            <ul>
              <li>
                <strong className="text-[var(--text)] font-semibold">Independent providers</strong>{' '}
                who may service your request or follow up on a quote
              </li>
              <li>
                <strong className="text-[var(--text)] font-semibold">Service vendors</strong> that
                help us run the site (for example hosting, databases such as Supabase, analytics,
                advertising platforms, and communications tools)
              </li>
              <li>
                <strong className="text-[var(--text)] font-semibold">Professional advisors</strong>{' '}
                or authorities when required by law or to protect rights and safety
              </li>
              <li>
                <strong className="text-[var(--text)] font-semibold">Successors</strong> in a merger,
                acquisition, or asset sale, subject to this policy or equivalent protections
              </li>
            </ul>
            <p>We do not sell your personal information for money.</p>
          </>
        ),
      },
      {
        title: '5. Advertising and analytics',
        body: (
          <>
            <p>
              We use Google tags and related tools (including conversion measurement) to understand
              how visitors find and use our site, including advertising landing pages such as{' '}
              <Link to="/pricing">/pricing</Link>. Google and similar partners may process data under
              their own policies. You can manage ad preferences through your device/browser settings
              and Google’s ads settings where available.
            </p>
          </>
        ),
      },
      {
        title: '6. Cookies and similar technologies',
        body: (
          <>
            <p>
              Cookies and local storage may be used for basic site function, remembering preferences,
              analytics, and advertising. You can block or delete cookies in your browser; some site
              features may not work as intended if you do.
            </p>
          </>
        ),
      },
      {
        title: '7. Retention',
        body: (
          <>
            <p>
              We keep inquiry and lead records for as long as needed to respond, match providers,
              maintain business records, resolve disputes, and meet legal obligations. Retention
              periods vary by record type and context.
            </p>
          </>
        ),
      },
      {
        title: '8. Security',
        body: (
          <>
            <p>
              We use reasonable administrative and technical safeguards appropriate to our size and
              the nature of the data. No method of transmission or storage is completely secure; we
              cannot guarantee absolute security.
            </p>
          </>
        ),
      },
      {
        title: '9. Your choices and rights',
        body: (
          <>
            <p>
              Depending on where you live, you may have rights to access, correct, delete, or obtain
              a copy of certain personal information, or to opt out of certain processing (including
              some targeted advertising). To make a request, contact us using the details below. We
              may need to verify your identity before responding.
            </p>
            <p>
              You may unsubscribe from marketing emails using the link in those messages (when
              provided) or by contacting us. You can ask us not to text you for marketing; reply STOP
              where that option is offered.
            </p>
          </>
        ),
      },
      {
        title: '10. Children',
        body: (
          <>
            <p>
              Our services are directed to businesses and adults. We do not knowingly collect
              personal information from children under 13 (or under 16 where required by law). If you
              believe a child has provided information, contact us and we will delete it.
            </p>
          </>
        ),
      },
      {
        title: '11. International visitors',
        body: (
          <>
            <p>
              We operate primarily in the United States. If you access the site from elsewhere, you
              understand that information may be processed in the U.S. and other countries where our
              vendors operate, which may have different data-protection rules than your country.
            </p>
          </>
        ),
      },
      {
        title: '12. Changes',
        body: (
          <>
            <p>
              We may update this Privacy Policy periodically. The “Effective date” at the top will
              change when we do. Continued use of the site after an update means you acknowledge the
              revised policy.
            </p>
          </>
        ),
      },
      {
        title: '13. Contact',
        body: (
          <>
            <p>
              Privacy questions or requests:{' '}
              <Link to="/contact">Contact form</Link> or call{' '}
              <a href={`tel:${PHONE_TEL}`}>{SITE_PHONE_DISPLAY}</a>.
            </p>
            <p>
              Website: <a href={SITE_URL}>{SITE_URL}</a>
            </p>
          </>
        ),
      },
    ]}
  />
);
