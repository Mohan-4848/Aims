import React from 'react';
import {
  EXPERIENCE_FEATURES,
  EXPERIENCE_SECTION_DATA,
  EXPERIENCE_STATS,
} from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section className="section experience" id="experience">
      <div className="container experience-grid">
        <div className="reveal">
          <div className="section-kicker">{EXPERIENCE_SECTION_DATA.kicker}</div>
          <h2>{EXPERIENCE_SECTION_DATA.title}</h2>
          <p style={{ color: 'var(--muted)', fontSize: '16px' }}>
            {EXPERIENCE_SECTION_DATA.description}
          </p>

          <div className="stats">
            {EXPERIENCE_STATS.map((stat, index) => (
              <div key={index} className="stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="feature-list">
          {EXPERIENCE_FEATURES.map((feature) => (
            <div key={feature.id} className="feature reveal">
              <div className="ficon">{feature.icon}</div>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
