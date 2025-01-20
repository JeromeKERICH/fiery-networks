import React, { useState, useEffect } from 'react';
import './styles/Ghost.css';
import { FaCheckCircle } from 'react-icons/fa';

const Ghost = () => {
  useEffect(() => {
        // Reset scroll position to top on every route change
        window.scrollTo(0, 0);
      }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle the modal visibility
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="ghostwriting-page">
      <header className="header-section">
        <h1>LinkedIn Ghostwriting Services for Business Pages</h1>
        <h3>Position Your Business as an Industry Leader</h3>
        <p>
          You need more than just a post. You need a strategy that speaks directly to your audience while positioning your business as an industry leader. That’s where we come in.
        </p>
        <button onClick={toggleModal} className="cta-button">
          I want to take my business page to new heights
        </button>
      </header>

      <section className="what-you-get-section">
        <h2>🔥 What You’ll Get:</h2>
        <div className="service-outcome">
          <div className="service-block">
            <h3>Custom Content Creation</h3>
            <p>Regular LinkedIn posts designed to showcase your brand’s unique voice and expertise.</p>
          </div>
          <div className="service-block">
            <h3>Engagement Strategy</h3>
            <p>We’ll create content that sparks conversation and drives engagement.</p>
          </div>
          <div className="service-block">
            <h3>Analytics & Optimization</h3>
            <p>We’ll track performance and adjust strategies for even better results.</p>
          </div>
        </div>
        <p className="outcome-text">
          This service is for businesses that want to leverage LinkedIn as a lead-generation tool but don’t have the time or expertise to handle it. Let us take your business page to new heights.
        </p>
      </section>

      {/* Modal for Registration */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Register for LinkedIn Ghostwriting Services</h3>
            <form className="registration-form">
              <label>Name</label>
              <input type="text" placeholder="Enter your full name" required />
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
              <label>Company Name</label>
              <input type="text" placeholder="Enter your company name" required />
              <label>Phone</label>
              <input type="tel" placeholder="Enter your phone number" required />
              <button type="submit" className="register-button">
                Register Now
              </button>
            </form>
            <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ghost;
