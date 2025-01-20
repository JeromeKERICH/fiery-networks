import React from 'react';
import "./styles/CTA.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready to Ignite Your Future?</h2>
        <p>
          Don't wait for change to happen. Make it happen. Whether you're starting your freelancing journey or scaling your business, we're here to set your goals on fire. Join us, and let's make magic together.
        </p>
        <div className="ctass-buttons">
          <a href="/book" className="ctass-btn books-btn">Buy the Book</a>
          <a href="/services" className="ctass-btn services-btn">Explore My Services</a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
