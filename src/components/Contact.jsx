import React from 'react';
import './styles/Contact.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Fiery Networks</h2>
          <p>We'd love to hear from you. Please reach out to us via the options below.</p>

          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <p>Nairobi, Kenya</p>
            </div>
          </div>

          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <div>
              
              <p>+254 729 466 141</p>
            </div>
          </div>

          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div>
              
              <p>info@fierynetworks.com</p>
            </div>
          </div>

          <div className="contact-item">
            <i className="fab fa-whatsapp"></i>
            <div>
              
              <a href="https://wa.me/254729466141" target="_blank" rel="noopener noreferrer">
                Chat with us on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3>Get in Touch</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your message" required></textarea>
            </div>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
