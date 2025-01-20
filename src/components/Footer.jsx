import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    
    <footer className="footer-section">
      <hr></hr>
      <div className="footer-container">
        <div className="footer-left">
          
          <h3>Fiery Networks</h3>
          <p>Innovating your digital solutions with cutting-edge technology.</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Contact Us</h4>
          <ul>
            <li><strong>Email:</strong> info@fierynetworks.com</li>
            <li><strong>Phone:</strong> +254 729 466 141</li>
            <li><strong>Address:</strong> Nairobi, Kenya</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Fiery Networks. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
