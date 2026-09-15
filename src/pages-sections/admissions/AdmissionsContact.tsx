import React, { useEffect, useRef } from 'react';
import './AdmissionsContact.css';

export const AdmissionsContact: React.FC = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your interest! Our admissions team will contact you shortly.");
  };

  return (
    <section className="section admissions-contact" id="admissions-contact" ref={sectionRef}>
      <div className="container">
        <div className="contact-grid">
          
          {/* Left Column: Form Card */}
          <div className="form-column reveal delay-1">
            <div className="form-card">
              <h2 className="form-title">For Admissions</h2>
              <p className="form-subtitle">Fill out the form below and our team will get in touch with you.</p>
              
              <form className="aims-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName" className="sr-only">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      placeholder="First Name*" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">Email*</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="Email*" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="Phone Number" 
                    pattern="[0-9()#&+*\-=.]+" 
                    title="Only numbers and phone characters are accepted."
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea 
                    id="message" 
                    placeholder="Message" 
                    rows={4}
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary submit-btn">
                  Submit ↗
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Contact Info */}
          <div className="info-column reveal delay-2">
            
            <div className="info-block">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3>Visit us</h3>
                <p>Beside MLRIT, Dundigal, Gandi Maisamma,<br/> Medchal-Malkajgiri Dist. Telangana</p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">✉️</div>
              <div className="info-content">
                <h3>Email Us</h3>
                <a href="mailto:admissions@aims.ac.in">admissions@aims.ac.in</a>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h3>Call Us</h3>
                <a href="tel:8055778999">805 577 8999</a>
              </div>
            </div>

            <div className="social-block">
              <h3>Follow us</h3>
              <div className="social-icons">
                <a 
                  href="https://www.instagram.com/aims_medcollege/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn instagram"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 448 512" fill="currentColor" width="20" height="20">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsContact;