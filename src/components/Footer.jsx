import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Importing icons
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-logo-section">
          <div className="footer-logo">
            <img src="assets/logo1.png"></img>
          </div>
          <p className="footer-description">
            Your Fiery Lady. Your Brand Igniter
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>contact@fierynetworks.com</p>
          <p>+254 729 466 141</p>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        © 2025 Fiery Networks. All Rights Reserved. <Link to="www.trichenest.com">Designed by Triche Nest</Link>
      </div>
    </footer>
  );
};

export default Footer;
