import React from 'react';
import { PROGRAMS_DATA, PROGRAMS_SECTION_DATA } from '../data/programs';
import { SectionHeader } from '../common/SectionHeader';

export const Programs: React.FC = () => {
  return (
    <section className="section programs" id="programs">
      <div className="container">
        <SectionHeader
          kicker={PROGRAMS_SECTION_DATA.kicker}
          title={
            <>
              Learn with purpose.
              <br />
              Lead with confidence.
            </>
          }
          description={PROGRAMS_SECTION_DATA.description}
        />

        <div className="program-grid">
          {PROGRAMS_DATA.map((prog) => (
            <article key={prog.id} className="program reveal">
              <div className="num">{prog.kicker}</div>
              <h3>{prog.title}</h3>
              <p>{prog.description}</p>
              <a href={prog.href}>{prog.linkText}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
