import React, { useEffect, useRef } from 'react';
import './FounderProfile.css';

export const FounderProfile: React.FC = () => {
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
    <section className="section founder-profile" id="founder-profile" ref={sectionRef}>
      <div className="container">
        
        <div className="founder-grid">
          
          {/* Left Column: Image */}
          <div className="founder-image-col reveal">
            <div className="founder-image-wrapper">
              <img 
                src="https://aims.ac.in/wp-content/uploads/2023/04/marri-rajashekhar-reddy-profile-main-1.png" 
                alt="Marri Rajasekhar Reddy - Founder" 
                className="founder-img"
              />
            </div>
            
            <div className="founder-id-card">
              <h2 className="founder-name">Marri Rajasekhar Reddy</h2>
              <span className="founder-title">Founder</span>
              
              <a 
                href="https://twitter.com/intent/tweet?text=Marri++Rajasekhar++Reddy+%E2%80%94+Founder&url=https%3A%2F%2Faims.ac.in%2Fabout-us%2Ffounder%2F&via=MarriRajasekar" 
                className="twitter-share-btn" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Tweet about our Founder"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
              </a>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="founder-content-col reveal delay-1">
            <div className="quote-accent">“</div>
            
            <p className="lead-paragraph">
              I truly realize the importance of affordable healthcare considering the burden a costly healthcare can impose on families. With my earnest zeal to assist families in getting rid of this burden, I dreamt of establishing an institution which will not only cater to the need of thousands families by offering them affordable healthcare but will also create a long lasting legacy. 
            </p>
            
            <p className="body-paragraph">
              I promised to my mother of coming up with a hospital that will stand apart in assisting families to get healthcare of excellent standard without imposing heavy financial burden on them. 
              <strong> Arundhati Institution of Medical Science (AIMS) is the first outcome of my bigger dream.</strong>
            </p>
            
            <div className="content-divider"></div>

            <p className="body-paragraph">
              Here we have assembled a team of highly skilled and compassionate healthcare who too share the noble dream of providing quality healthcare in affordable cost. They, with all their passion and dedication, are striving relentlessly to ensure a truly nurturing environment with sincere touch of personalized healthcare to help the patients in all possible manner.
            </p>
            
            <p className="body-paragraph">
              It’s the promise that I made to my mother, that drives me to resolutely work for turning the hospital into an effective tool for ultimately transforming the lives of people who otherwise are reeling under the burden of unaffordable healthcare.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderProfile;