import React from 'react';
import { Button } from '../common/Button';
import photo from "../../src/assets/t3.jpg";

export const Hero: React.FC = () => {
  return (
    <header className="hero" id="home">
      <div className="container hero-grid">
        <div className="reveal">
          <div className="eyebrow">Arundathi Institute of Medical Sciences</div>
          <h1>
            Where <em>care</em> becomes a calling.
          </h1>
          <p>
            Building the next generation of compassionate doctors through strong
            academic foundations, clinical exposure and a culture of lifelong learning.
          </p>
          <div className="hero-actions">
            <Button variant="primary" href="#admissions">
              Explore admissions ↗
            </Button>
            <Button variant="light" href="#about">
              Discover AIMS
            </Button>
          </div>
          <div className="hero-note">
            <span>✦</span>
            <span>
              <b>Education with purpose.</b>
              <br />
              Healthcare with heart.
            </span>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="hero-card">
            <img
              src={photo}
              alt="Arundathi Institute of Medical Sciences campus"
            />
          </div>
          <div className="floating-card">
            <div className="icon">✚</div>
            <div>
              <strong>Medical education &amp; care</strong>
              <small>One connected community</small>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
