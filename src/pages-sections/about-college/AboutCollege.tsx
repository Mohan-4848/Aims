import React, { useEffect, useRef } from 'react';
import './AboutCollege.css';

export const AboutCollege: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="section about-institution" id="about-institution" ref={sectionRef}>
      <div className="container">

        {/* Main Institution Intro */}
        <div className="about-inst-grid">
          
          <div className="about-image-content reveal">
            <img 
              src="https://aims.ac.in/wp-content/uploads/2023/07/imageedit_2_3311448125.png" 
              alt="Arundathi Institute of Medical Sciences Building" 
              className="inst-main-img"
            />
          </div>

          <div className="about-text-content reveal delay-1">
            <h1 className="section-title">About Institution</h1>

            <p className="drop-cap-text">
              <span className="drop-cap">A</span>rundathi Institute of Medical Sciences is a premier medical college committed to excellence in healthcare education. Our institution is dedicated to producing highly skilled and compassionate medical professionals who can meet the ever-evolving healthcare needs of our society.
            </p>
            <p>
              With state-of-the-art infrastructure, a highly experienced faculty, and a wide range of academic programs, we provide our students with the best possible learning environment.
            </p>
            <p>
              At Arundathi Institute of Medical Sciences, we believe that education is the key to unlocking the potential of every individual, and we strive to provide our students with the knowledge, skills, and values they need to make a meaningful impact in their Medical field.
            </p>
          </div>

        </div>

        {/* Vision & Mission Cards */}
        <div className="vision-mission-grid">
          
          <div className="vm-card reveal delay-1">
            <div className="vm-icon">✦</div>
            <h3>Vision</h3>
            <p>
              Promote academic excellence and research to produce trained health manpower capable of shouldering the onus and responsibility ensuring an effective health care delivery system.
            </p>
          </div>

          <div className="vm-card reveal delay-2">
            <div className="vm-icon">↗</div>
            <h3>Mission</h3>
            <ul className="vm-list">
              <li>Provide competency based education and opportunities for immersive learning to shape the student’s commitment to care, empathy, altruism and service.</li>
              <li>Integrate teaching between traditional subject areas using a problem-based learning approach starting with clinical or community cases and exploring the relevance of various preclinical disciplines in both the understanding and resolution of the problem.</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutCollege;