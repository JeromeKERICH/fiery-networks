import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './styles/Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setStatus('Message sent successfully!');
        resetForm();
      })
      .catch(() => {
        setStatus('Failed to send message. Please try again.');
        resetForm();
      });

    // Reset form and status after 5 seconds
    setTimeout(() => {
      setStatus('');
    }, 5000);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
  };

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
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">Send Message</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
