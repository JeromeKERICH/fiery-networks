import React from 'react';
import './styles/Hero.css';
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Hello, Fiery Dreamer</h1>
        <h2>We don’t just spark global impact, we set it ablaze.</h2>
        <p>You’re here because you’re ready to level up, right? <br></br>Good. You’ve come to the right place.</p>
        <div className="cta-buttons">
          <Link to="/deal" className="cta-btn primary">Get the Deal</Link>
          <Link to="/#" className="cta-btn secondary">Level Up</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
