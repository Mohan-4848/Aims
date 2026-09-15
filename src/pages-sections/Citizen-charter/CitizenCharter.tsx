import React, { useEffect, useRef } from 'react';
import './CitizenCharter.css';

export const CitizenCharter: React.FC = () => {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="section charter-section" id="citizen-charter" ref={sectionRef}>
      <div className="container">
        
        <div className="charter-header reveal">
          <h1 className="section-title">Citizen Charter</h1>
          <div className="title-underline-gradient"></div>
          <p className="charter-intro">
            Arundathi Institute of Medical Sciences is located in Dundigal, Hyderabad, offering exceptional healthcare services and education to the community.
          </p>
        </div>

        <div className="charter-content-grid">
          
          {/* General Information & Operations */}
          <div className="charter-card reveal delay-1">
            <h3 className="card-title">Hospital & College Operations</h3>
            <div className="card-content">
              <h4>Working Hours</h4>
              <p>The college operates from <strong>9:00 A.M. to 4:00 P.M.</strong> on all working days. The hospital operates round the clock, providing <strong>24/7 emergency services</strong>. The Central Library remains open from 8:30 A.M. to 9:00 P.M. on working days, and from 8:30 A.M. to 4:00 P.M. on holidays.</p>
              
              <h4>Staff Uniform</h4>
              <p>All staff wear color-coded uniforms, maintaining a professional environment. Each staff member wears a white apron and an AIMS identification card for easy identification.</p>
              
              <h4>Visiting Hours</h4>
              <ul className="charter-list">
                <li>7:00 A.M. to 8:30 A.M.</li>
                <li>1:00 P.M. to 2:00 P.M.</li>
                <li>4:30 P.M. to 7:00 P.M.</li>
              </ul>
            </div>
          </div>

          {/* Clinical Services */}
          <div className="charter-card reveal delay-2">
            <h3 className="card-title">Clinical Services</h3>
            <div className="card-content">
              <h4>Casualty and Emergency</h4>
              <p>Operating 24/7 with immediate care for urgent cases. We have a separate emergency section for the OBG department attached to the labor room. The casualty ward provides 25 beds, central oxygen, central suction, and essential equipment like defibrillators, connecting directly to an emergency operating theater.</p>
              
              <h4>OPD Services</h4>
              <p>General OPD operates from <strong>Monday to Saturday, 8:00 A.M. to 5:00 P.M.</strong> Specialized care is provided across General Medicine, General Surgery, Orthopedics, OBG, Pediatrics, Ophthalmology, ENT, Dermatology, TB Chest, Psychiatry, and Dentistry.</p>
              
              <h4>Diagnostic Services</h4>
              <p>The Central Laboratory provides 24/7 diagnostic services (Pathology, Biochemistry, Microbiology) utilizing a fast Laboratory Information System (LIS). The Radiology Department features portable X-ray machines, 500mA machines, and ultrasound machines with Doppler.</p>
            </div>
          </div>

          {/* Support & Patient Care */}
          <div className="charter-card reveal delay-1">
            <h3 className="card-title">Patient Support & Facilities</h3>
            <div className="card-content">
              <h4>Assistance & Facilities</h4>
              <p>We provide free wheelchairs and stretchers at the OPD entrance, along with lifts and ramps for easy patient movement. The hospital ensures 24-hour UPS/backup generators, free food and mineral water for in-patients, and clean washroom facilities.</p>
              
              <h4>Cafeteria</h4>
              <p>A canteen within the hospital premises serves hygienic food at nominal prices for patients and visitors.</p>

              <h4>Safety & Grievances</h4>
              <p>AIMS is a strict <strong>Tobacco-Free Campus</strong>. We do not encourage middlemen; please avoid engaging with unauthorized persons. If unsatisfied with our services, complaints can be lodged with the Reception, RMO, Medical Superintendent, or Dean. We are committed to a corruption-free, responsive environment.</p>
            </div>
          </div>

          {/* Admissions Information */}
          <div className="charter-card reveal delay-2">
            <h3 className="card-title">MBBS Admissions Eligibility</h3>
            <div className="card-content">
              <h4>Qualification & Age</h4>
              <p>Applicants must complete 17 years of age on or before December 31st of the admission year. Candidates must have completed 10+2 with Physics, Chemistry, Biology, and English. Admissions are filled by Kaloji Narayana Rao University of Health Sciences based on NEET Ranks.</p>
              
              <h4>Academic Requirements (NEET UG)</h4>
              <ul className="charter-list">
                <li><strong>General Category (OC):</strong> Minimum 50% in science subjects.</li>
                <li><strong>BC/SC/ST Candidates:</strong> Minimum 40% in science subjects.</li>
                <li><strong>OC PH Candidates:</strong> Minimum 45% in science subjects.</li>
              </ul>
              
              <p className="mt-4">
                Foreign students and NRI candidates are eligible under the Management Quota (Category C). We strictly adhere to NMC norms in the admission process, ensuring transparency and fairness.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CitizenCharter;