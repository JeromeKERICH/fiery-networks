import React from 'react';
import './styles/Hero.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Hello, Fiery Dreamer</h1>
        <h2>We don’t just spark global impact, we set it ablaze.</h2>
        <p>You’re here because you’re ready to level up, right? <br></br>Good. You’ve come to the right place.</p>
        <div className="cta-buttons">
          <a href="/deal" className="cta-btn primary">Get the Deal</a>
          <a href="#" className="cta-btn secondary">Level Up</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
