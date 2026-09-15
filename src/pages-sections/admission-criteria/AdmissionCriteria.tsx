import React, { useEffect, useRef } from 'react';
import './AdmissionCriteria.css';

export const AdmissionCriteria: React.FC = () => {
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
    <section className="section admission-criteria" id="admission-criteria" ref={sectionRef}>
      <div className="container">
        
        <div className="criteria-header reveal">
          <h1 className="section-title">Admission Criteria</h1>
          <div className="title-underline-gradient"></div>
        </div>

        <div className="criteria-grid">
          
          {/* Card 1: Convener Quota (A-Category) */}
          <div className="criteria-card reveal delay-1">
            <h2 className="card-title">Convener Quota (A-Category)</h2>
            <div className="card-content">
              <p>The seats will be filled by the Competent Authority i.e., Kaloji Narayana Rao University of Health Sciences, Warangal, Telangana on Merit Basis i.e., based on NEET Marks/NEET Ranks as described hereunder. Notification will be issued for admissions by the University every year.</p>
              
              <p>The candidate should be an Indian National or Person of Indian Origin (PIO) / Overseas Citizens of India (OCI) Card Holder and should satisfy the Local or Non- local status in Telangana State as laid down in Andhra Pradesh Education Institutions (Regulations of Admissions) Order, 1974. Selection will be done as per the procedure laid down in the G.O.No. 646, dated 10.07.1979 as amended in G.O.Ms.No.42, Higher Education (EC2) Department, dated 18.05.2009 and G.O.Ms.No. 114 HM&FW(C1) Dept. Dated: 5-7-2017 and subsequent amendments.</p>
              
              <h4>AGE:</h4>
              <ul className="criteria-list">
                <li>The candidate should have completed the age of 17 years as on or before 31st January of the year the candidate shall be appearing for NEET-UG examination.</li>
                <li>The candidate should have passed Intermediate (10+2 pattern) or its equivalent examination with Physics, Chemistry, Biology (Botany, Zoology)/Biotechnology and English.</li>
                <li>General Category (OC) candidates should obtain not less than 50% marks in science subjects.</li>
                <li>BC/SC/ST candidates should obtain a lot less than 40% marks in science subjects.</li>
                <li>OC PH candidates should obtain not less than 45% marks in science subjects</li>
                <li>The candidate should qualify NEET Examinations with 50 percentile for OC, 40 percentile for BC/SC/ST and 45 percentile in respect of persons with Disability (OC-PH).</li>
                <li>Reservations applicable to the respective categories as per the statutory provisions.</li>
              </ul>
            </div>
          </div>

          {/* Card 2: Management Quota (B-Category) & NRI Quota (C-Category) */}
          <div className="criteria-card reveal delay-2">
            <h2 className="card-title">
              Management Quota (B-Category)<br/>
              <span className="card-subtitle">(35% of Sanctioned Intake)</span><br/><br/>
              & NRI Quota (C-Category)<br/>
              <span className="card-subtitle">15% of sanctioned intake :</span>
            </h2>
            
            <div className="card-content">
              <p>The seats will be filled by the Kaloji Narayana Rao University of Health Sciences, Warangal, Telangana on Merit Basis i.e., based on NEET Marks as described hereunder.</p>
              <p>A separate Notification will be issued for Management Quota admissions by the University every year.</p>
              <p>Candidates from all over the country are eligible for admission into Management quota seats Category -B and C (NRI) for UG Medical Courses and as per Medical Council of India / KNR University of Health Sciences.</p>
              
              <h4>AGE</h4>
              <ul className="criteria-list">
                <li>The candidate should have completed the age of 17 years as on or before 31st January of the year the candidate shall be appearing for NEET-UG examination.</li>
                <li>Foreign Students / NRI candidates are eligible for admission into MBBS Course under Management Quota Category – C Seats.</li>
                <li>The candidate should have passed Intermediate (10+2 pattern) or its equivalent examination with Physics, Chemistry, Biology (Botany, Zoology)/Biotechnology and English.</li>
                <li>General Category (OC) candidates should obtain not less than 50% marks in science subjects.</li>
                <li>BC/SC/ST candidates should obtain a lot less than 40% marks in science subjects.</li>
                <li>OC PH candidates should obtain not less than 45% marks in science subjects.</li>
                <li>The candidate should qualify NEET Examinations with 50 percentile for OC, 40 percentile for BC/SC/ST and 45 percentile in respect of persons with Disability (OC-PH).</li>
                <li>Reservations are not applicable to the B & C categories.</li>
                <li>Tuition Fee: As fixed by the Government of Telangana.</li>
                <li>Candidates possessing qualification of the University / Board of an institution outside the Telangana State should submit Eligibility / Equivalence certificate from the Board of Intermediate Education of Telangana, to the effect that the qualification possessed is equivalent to or higher than Intermediate examination conducted by the Board of Intermediate Education of Telangana at the time of admission into the college.</li>
                <li>Candidates possessing qualification of the University / Board of an institution outside INDIA should submit Eligibility / Equivalence certificate issued by Association of Indian Universities, New Delhi and Eligibility / Equivalence certificate issued from the Board of Intermediate Education of Telangana to the effect that the qualification possessed is equivalent to or higher than Intermediate examination conducted by the Board of Intermediate Education of Telangana at the time of admission into the college.</li>
                <li>Admission to NRI seats will be made on the basis of NEET- 2023 merit ranks of eligible candidates who have applied on-line for NRI seats.</li>
                <li>NRI Financially supporting the candidate must be a Blood relative such as Father/Mother/Brother/Sister/Uncle/Aunt only and should submit a declaration to that effect.</li>
                <li>Candidates opting for NRI seat must furnish the photocopies of following supporting documents.</li>
              </ul>
              
              <ul className="criteria-list sub-list">
                <li>1) NRI status certificate of the financial supporter issued by the embassy of the respective country under their seal.</li>
                <li>2) Copy of NRI Bank account pass book of the financial supporter.</li>
                <li>3) Copy of Passport of NRI financial supporter</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdmissionCriteria;