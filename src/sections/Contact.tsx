import React from 'react';
import { CONTACT_DATA } from '../data/contact';
import { Button } from '../common/Button';
import { SectionHeader } from '../common/SectionHeader';

export const Contact: React.FC = () => {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <SectionHeader
          kicker="Find us"
          title="Let’s stay connected."
          description="Have a question about admissions, the campus or hospital services? Reach out to the AIMS team."
        />

        <div className="contact-grid">
          <div className="contact-card reveal">
            <h3>Contact information</h3>

            <div className="contact-row">
              <div className="cicon">📍</div>
              <div>
                <strong>Campus address</strong>
                <span>{CONTACT_DATA.address}</span>
              </div>
            </div>

            <div className="contact-row">
              <div className="cicon">☎</div>
              <div>
                <strong>General enquiries</strong>
                <span>{CONTACT_DATA.generalPhones}</span>
              </div>
            </div>

            <div className="contact-row">
              <div className="cicon">🎓</div>
              <div>
                <strong>Admissions</strong>
                <span>{CONTACT_DATA.admissionsPhone}</span>
              </div>
            </div>

            <div className="contact-row">
              <div className="cicon">✉</div>
              <div>
                <strong>Email</strong>
                <span>{CONTACT_DATA.email}</span>
              </div>
            </div>

            <Button variant="primary" href={`mailto:${CONTACT_DATA.email}`}>
              Send an email ↗
            </Button>
          </div>

          {/* Replaced decorative map with actual Google Maps iframe */}
          <div className="contact-card reveal" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <iframe
              title="Arundathi Institute of Medical Sciences Location"
              src="https://maps.google.com/maps?q=Arundathi%20Institute%20of%20Medical%20Sciences,%20Dundigal,%20Telangana&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <div style={{ padding: '25px', textAlign: 'center' }}>
              <h3 style={{ marginTop: 0, marginBottom: '8px', fontSize: '18px' }}>
                Arundathi Institute of Medical Sciences
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '14px', margin: '0 auto 20px', maxWidth: '320px' }}>
                {CONTACT_DATA.landmark}, {CONTACT_DATA.cityStatePincode}
              </p>
              
              <Button
                variant="primary"
                href={CONTACT_DATA.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps ↗
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};