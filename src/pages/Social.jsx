import React, { useState, useEffect } from 'react';
import './styles/Social.css';


const Social = () => {
  useEffect(() => {
        // Reset scroll position to top on every route change
        window.scrollTo(0, 0);
      }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle the modal visibility
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="copywriting-course-page">
      <header className="header-section">
        <h1>Social Media Copywriting Mastery Course</h1>
        <h3>Transform Your Online Presence with Words</h3>
        <p>
          Words are powerful, and when used right, they can transform your online presence. This course is for entrepreneurs, freelancers, and small businesses who want to master the art of social media copywriting and learn to craft copy that converts.
        </p>
        <button onClick={toggleModal} className="cta-button">
          Sign Up for Copywriting Mastery
        </button>
      </header>

      <section className="what-you-learn-section">
        <h2>🔥 What You’ll Learn:</h2>
        <div className="course-outcome">
          <div className="course-block">
            <h3>Crafting Compelling Headlines</h3>
            <p>Grab attention with irresistible hooks.</p>
          </div>
          <div className="course-block">
            <h3>Writing Engaging Posts</h3>
            <p>How to keep your audience coming back for more.</p>
          </div>
          <div className="course-block">
            <h3>Call-to-Action Techniques</h3>
            <p>Drive sales, clicks, and conversions with the perfect CTAs.</p>
          </div>
          <div className="course-block">
            <h3>Social Media Best Practices</h3>
            <p>Learn the tricks to mastering different platforms and increasing your reach.</p>
          </div>
        </div>
        <p className="outcome-text">
          You’ll leave this course with a solid foundation in social media copywriting and a portfolio of content ready to boost your engagement and conversions.
        </p>
      </section>

      {/* Modal for Registration */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Register for Social Media Copywriting Mastery</h3>
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

export default Social;
