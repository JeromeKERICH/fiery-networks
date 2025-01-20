import React, { useState } from 'react';
import "./styles/Whatsapp.css"

const Whatsapp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle the modal visibility
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="whatsapp-course-page">
      <header className="header-section">
        <h1>WhatsApp LinkedIn Courses (10 Sessions)</h1>
        <h3>Short, Sharp, and To the Point</h3>
        <p>
          These 10-session courses are delivered via WhatsApp every weekday (excluding weekends) and are perfect for anyone who prefers bite-sized learning that fits into their busy schedule.
        </p>
        <button onClick={toggleModal} className="cta-button">
          Start WhatsApp Learning Now
        </button>
      </header>

      <section className="course-options-section">
        <h2>🔥 Course Options:</h2>
        <div className="course-options">
          <div className="course-option">
            <h3>LinkedIn Profile Optimization</h3>
            <p>Learn how to make your profile pop and attract the right attention.</p>
          </div>
          <div className="course-option">
            <h3>Content Creation for LinkedIn</h3>
            <p>Tips on writing posts that engage and keep your audience coming back.</p>
          </div>
          <div className="course-option">
            <h3>Building a Personal Brand on LinkedIn</h3>
            <p>Create an unforgettable presence and stand out in your industry.</p>
          </div>
        </div>
        <p className="outcome-text">
          After just 10 days, you’ll have more confidence in using LinkedIn to grow your brand, expand your network, and start creating a meaningful online presence.
        </p>
      </section>

      {/* Modal for Registration */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Register for WhatsApp LinkedIn Course</h3>
            <form className="registration-form">
              <label>Name</label>
              <input type="text" placeholder="Enter your full name" required />
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
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

export default Whatsapp;
