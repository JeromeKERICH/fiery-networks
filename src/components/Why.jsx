import React from 'react';
import { FaFireAlt } from 'react-icons/fa'; 
import "./styles/Why.css";

const WhySection = () => {
  return (
    <section className="why-section">
      <div className="why-content">
        <h2>Why Fiery Network?</h2>
        <p>
          Because I don’t do halfway. Whether you’re building your personal brand, scaling your business page, or making waves with social media marketing, I’ll help you turn heads, spark connections, and create a lasting impact.
        </p>
        <h3>What’s next?</h3>
        <ul>
          <li>📚 <strong>Buy the book:</strong> Ready to hear my story and learn how you can become a freelancer too?</li>
          <li>💼 <strong>Explore my services:</strong> From ghostwriting to content marketing, I’ve got you covered.</li>
          <li>🎓 <strong>Join a course:</strong> Because shortcuts to success do exist.</li>
        </ul>
        <p className="share-note">Oh, and don’t forget to share this site with your fiery friends.</p>
        <h3>Let’s Make Magic Together.</h3>
        <p>Click around, stay a while, and let’s set your goals on fire.</p>
        <p className="welcome-message">Welcome to the Fiery Network.</p>
        <p className="slogan">🔥 <strong>Spark Global Impact</strong> 🔥</p>
      </div>
      <FaFireAlt className="fire-icon" />
    </section>
  );
};

export default WhySection;
