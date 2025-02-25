import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import "./styles/Linkman.css";

const EventHostingModeration = () => {
  useEffect(() => {
    // Reset scroll position to top on every route change
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="service-detail">
      {/* Header Section */}
      <header className="service-header">
        <div className="header-content">
          <h1>Event Hosting & Moderation</h1>
          <p>
          From high-energy conferences to intimate fireside chats, I create experiences that keep your audience engaged and talking long after the event ends.
          </p>
          <h3 className="whatyou">What You’ll Get:</h3>
          <p>
            <li>✅Dynamic Hosting – High-impact presence that keeps the energy alive.</li>
            <li>✅Engaging Moderation – Thoughtful facilitation that sparks conversation.</li>
            <li>✅Customized Experience – Every event is unique, and I tailor my approach to match your goals.</li>
          </p>
          <p className="rates">Rate: Ksh 3,999 per hour </p>
        </div>
        <div className="header-image">
          <img
            src="assets/moder.jpg" // Replace with an actual image
            alt="Event Hosting & Moderation"
          />
        </div>
      </header>

      

      {/* Checkout Section */}
      <section className="checkout-section">
        <h2>Ready to Host an Unforgettable Event?</h2>
        <p>
          Book me today and let's make it an experience your audience
          will never forget. 
        </p>

        <a href="https:/wa.me/254718181952" className="checkout-button" >
          Book Now
        </a>

        
      </section>
    </div>
  );
};

export default EventHostingModeration;
