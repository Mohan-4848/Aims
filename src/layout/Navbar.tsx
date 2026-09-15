import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link className="brand" to="/">
          <img 
            src="https://aims.ac.in/wp-content/uploads/2023/06/cropped-logo-final-1-1024x358.png" 
            alt="Arundathi Institute of Medical Sciences" 
          />
        </Link>
        
        <button 
          className="menu" 
          aria-label="Open menu" 
          onClick={toggleMenu}
        >
          ☰
        </button>
        
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          
          <li>
            <a href="#about">About Us ▾</a>
            <ul className="dropdown">
              <li><Link to="/About-the-Hospital">About the Hospital</Link></li>
              <li><Link to="/About-the-college">About the college</Link></li>
              <li><Link to="/Founder">Founder</Link></li>
              <li><Link to="/Management">Management</Link></li>
              <li><Link to="govt-approvals">Govt Approvals & Affiliation</Link></li>
              <li><Link to="Citizen-charter">Citizen Charter</Link></li>
            </ul>
          </li>
          
          <li>
            <a href="#admissions">Admissions ▾</a>
            <ul className="dropdown">
              <li>
                <a href="#">MBBS ▸</a>
                <ul className="sub-dropdown">
                  <li><Link to="admission-criteria">Admission Criteria</Link></li>
                  <li><Link to="seat-matric">Seat Matrix</Link></li>
                  <li><a href="#">Fee Structure</a></li>
                  <li><a href="#">UG Admitted List</a></li>
                </ul>
              </li>
              <li><a href="#">Para Medical</a></li>
              <li><a href="#">Application Forms</a></li>
            </ul>
          </li>
          
          <li>
            <a href="#programs">Academics ▾</a>
            <ul className="dropdown">
              <li><a href="#">Pre Clinical</a></li>
              <li><a href="#">Para Clinical</a></li>
              <li><a href="#">Clinical</a></li>
              <li><a href="#">Faculty & Staff Directory</a></li>
              <li>
                <a href="#">Academic Facilities ▸</a>
                <ul className="sub-dropdown">
                  <li><a href="#">Library & Museums</a></li>
                  <li><a href="#">Skill Lab & Lecture Halls</a></li>
                  <li><a href="#">Central Research Lab</a></li>
                </ul>
              </li>
            </ul>
          </li>
          
          <li>
            <a href="#">Hospital ▾</a>
            <ul className="dropdown">
              <li><a href="#">Outpatient Dept (OPD)</a></li>
              <li><a href="#">Inpatient Dept (IPD)</a></li>
              <li><a href="#">Diagnostics & Pharmacy</a></li>
              <li><a href="#">Certificates</a></li>
            </ul>
          </li>
          
          <li>
            <a href="#experience">Campus Life ▾</a>
            <ul className="dropdown">
              <li><a href="#">Hostels & Accommodation</a></li>
              <li><a href="#">Food Court</a></li>
              <li><a href="#">Sports & Gymnasium</a></li>
              <li><a href="#">Transportation</a></li>
            </ul>
          </li>

          {/* Extraneous utility buttons nested here */}
          <li>
            <a href="#">Quick Links ▾</a>
            <ul className="dropdown">
              <li><a href="https://portal.vmedulife.com/public/auth/#/login/aims-hyderabad">ERP Login</a></li>
              <li><a href="https://lms.aims.ac.in/">LMS</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </li>
        </ul>
        
        <Link className="btn btn-primary" to="/admissions">Apply Now ↗</Link>
      </div>
    </nav>
  );
};

export default Navbar;