import React from 'react';
import { ABOUT_DATA } from '../data/about';
import { Button } from '../common/Button';

export const About: React.FC = () => {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-image reveal">
          <img src={ABOUT_DATA.imageUrl} alt={ABOUT_DATA.imageAlt} />
        </div>

        <div className="about-copy reveal">
          <div className="section-kicker">{ABOUT_DATA.kicker}</div>
          <h2>{ABOUT_DATA.title}</h2>

          {ABOUT_DATA.paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}

          <div className="ticks">
            {ABOUT_DATA.highlights.map((highlight, index) => (
              <div key={index}>
                <span>✓</span> {highlight}
              </div>
            ))}
          </div>

          <Button variant="primary" href={ABOUT_DATA.cta.href}>
            {ABOUT_DATA.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
};
