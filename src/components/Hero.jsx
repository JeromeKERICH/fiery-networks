import React from 'react';
import './styles/Hero.css';
import { Link } from "react-router-dom";
import { useEffect } from "react";

const HeroSection = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Hello, Fiery Dreamer</h1>
        <h2>We don’t just spark global impact, we set it ablaze.</h2>
        <p>You’re here because you’re ready to level up, right? <br></br>Good. You’ve come to the right place.</p>
        <div className="ctass-buttons">
          
          <Link to="/book" className="ctass-btn primary">Buy My Book</Link>
          <Link to="/landing" className="ctass-btn secondary">Join LinkedIn Fiery Program</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
