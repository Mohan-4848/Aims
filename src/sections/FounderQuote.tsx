import React from 'react';
import { Link } from 'react-router-dom';
import './FounderQuote.css'; // Include the CSS below

const FounderQuote: React.FC = () => {
  return (
    <section className="section founder-section">
      <div className="container founder-grid">
        
        {/* Founder Image Column */}
        <div className="founder-image reveal show">
          <img 
            src="https://aims.ac.in/wp-content/uploads/2023/04/marri-rajashekhar-reddy-profile-main.png" 
            alt="Marri Rajasekar Reddy - Founder" 
          />
        </div>

        {/* Quote Content Column */}
        <div className="founder-content reveal show">
          <div className="quote-icon">“</div>
          
          <blockquote className="quote-text">
            "I have seen families and dreams falling apart due to unaffordable healthcare which had bothered me since long. With an unflinching zeal to provide free services, I made a promise to my mother to set up a hospital where every family can gain access to quality healthcare across generations with affordability no more a barrier."
          </blockquote>
          
          <div className="founder-details">
            <h3 className="founder-name">MARRI RAJASEKAR REDDY</h3>
            <span className="founder-title">Founder</span>
          </div>
          
          <Link to="/founder" className="btn btn-primary">Read More ↗</Link>
        </div>
        
      </div>
    </section>
  );
};

export default FounderQuote;