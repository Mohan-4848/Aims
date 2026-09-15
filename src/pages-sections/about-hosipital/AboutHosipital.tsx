import React, { useEffect, useRef } from 'react';
import './AboutHosipital.css'

export const AboutHospital: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Set up the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Optional: observer.unobserve(entry.target); if you only want it to animate once
          }
        });
      },
      { threshold: 0.15 } // Triggers when 15% of the element is visible on screen
    );

    // Target all elements with the 'reveal' class inside this component
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount (Crucial for SPAs!)
    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="section about-hospital" id="about-hospital" ref={sectionRef}>
      <div className="container">

        {/* Main Hospital Intro */}
        <div className="about-hospital-grid">
          
          {/* Note: Removed the hardcoded 'show' class from here */}
          <div className="about-text-content reveal">
            <div className="accreditation-badge">
              <img 
                src="https://aims.ac.in/wp-content/uploads/2023/08/nabh-logo-E59469F2F9-seeklogo.com_.png" 
                alt="NABH Accredited" 
                className="nabh-logo"
                loading="lazy"
              />
              <span>NABH Accredited</span>
            </div>

            <h2 className="section-title">About Arundathi Hospital</h2>

            <p className="drop-cap-text">
              <span className="drop-cap">A</span>rundathi Hospital is a state-of-the-art medical facility with NABH Accreditation that is committed to providing high-quality healthcare services to all patients, regardless of their ability to pay. Equipped with the latest medical technology and staffed by highly qualified healthcare professionals, the hospital offers a wide range of medical and super-speciality services, including diagnostics, surgery, and critical care.
            </p>
            <p>
              What sets Arundhati Hospital apart is its commitment to provide free treatment and free diagnostic services to all patients, regardless of their financial status. This is made possible by the generous support of Marri Rajasekhar Reddy Foundation.
            </p>
          </div>

          <div className="about-image-content reveal">
            <img 
              src="https://aims.ac.in/wp-content/uploads/2023/07/Picsart_23-07-06_19-55-30-471-2-scaled.jpg" 
              alt="Arundathi Hospital Campus" 
              className="hospital-main-img"
            />
          </div>

        </div>

        {/* Vision & Mission Cards */}
        <div className="vision-mission-grid">
          
          {/* Added reveal and stagger delays for a cascading effect */}
          <div className="vm-card reveal delay-1">
            <div className="vm-icon">✦</div>
            <h3>Vision</h3>
            <p>
              We envision a future where every individual, regardless of their ability to pay, receives access to high-quality healthcare. By embracing innovation, patient-centered care, and a commitment to excellence, we strive to improve the health and well-being of our community.
            </p>
          </div>

          <div className="vm-card reveal delay-2">
            <div className="vm-icon">↗</div>
            <h3>Mission</h3>
            <p>
              Our objective is to erase the widespread belief that healthcare is expensive. We are constantly researching, collaborating, and implementing best practices in order to create a healthy society for a better tomorrow.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutHospital;