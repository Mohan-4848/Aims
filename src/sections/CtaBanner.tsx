import React from 'react';
import { CTA_DATA } from '../data/contact';
import { Link } from 'react-router-dom';

export const CtaBanner: React.FC = () => {
  return (
    <section className="cta" id="admissions">
      <div className="container">
        <div className="cta-box reveal">
          <div>
            <div className="eyebrow">{CTA_DATA.eyebrow}</div>
            <h2>
              Ready to begin your
              <br />
              medical journey?
            </h2>
            <p>{CTA_DATA.description}</p>
          </div>
          
          

          <Link to="/admissions" className="btn btn-light" style={{ position: 'relative', zIndex: 10 }}>Go to admissions ↗</Link>


          
        </div>
      </div>
    </section>
  );
};
