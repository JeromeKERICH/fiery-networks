import React from 'react';
import './styles/Floating.css';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/254729466141" 
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default FloatingWhatsApp;
