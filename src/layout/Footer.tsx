import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img 
            src="https://aims.ac.in/wp-content/uploads/2023/06/cropped-logo-final-1-1024x358.png" 
            alt="AIMS" 
          />
          <p>
            Arundathi Institute of Medical Sciences and Hospital — education, clinical excellence and compassionate care.
          </p>
        </div>
        
        <div>
          <h3>Explore</h3>
          <a href="#about">About AIMS</a>
          <a href="#programs">Academics</a>
          <a href="#experience">Campus life</a>
          <a href="#admissions">Admissions</a>
        </div>
        
        <div>
          <h3>Quick contact</h3>
          <a href="tel:8179432491">Ambulance: 8179432491</a>
          <a href="tel:8055778999">Admissions: 8055778999</a>
          <a href="mailto:arundathihospital@gmail.com">arundathihospital@gmail.com</a>
        </div>
      </div>
      
      <div className="container copyright">
        <span>© {currentYear} Arundathi Institute of Medical Sciences. All rights reserved.</span>
        <span>Designed for clarity, care and confidence.</span>
      </div>
    </footer>
  );
};

export default Footer;