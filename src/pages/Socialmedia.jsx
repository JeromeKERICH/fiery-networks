import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import "./styles/Linkman.css";

const Management = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  return (
    <div className="service-detail">
      {/* Header Section */}
      <header className="service-header">
        <div className="header-content">
          <h1>Social Media Marketing & Management</h1>
          <p>
          Your brand deserves more than just posts—it needs a powerful presence on the right platforms.
I help businesses, entrepreneurs, and thought leaders grow their influence, attract the right audience, and turn engagement into real results across LinkedIn, Meta (Facebook & Instagram), X (Twitter), and YouTube.


          </p>
        </div>
        <div className="header-image">
          <img src="assets/coaching.jpg" alt="LinkedIn Coaching" />
        </div>
      </header>


      <div className="introduction">
        <h1>What You’ll Get</h1>
      </div>
      {/* Pricing Section */}
      <div className="pricing-box">
        <ul>
          <li><FaCheck className="tick-icon" />Strategy That Works – Customized content plans tailored to your goals. </li>
          <li><FaCheck className="tick-icon" />Growth & Engagement – More followers, more reach, and real impact.</li>
          <li><FaCheck className="tick-icon" />Consistent Branding – A strong, authentic voice across all platforms.</li>
          <li><FaCheck className="tick-icon" />Performance Tracking – Data-driven insights to refine and scale. </li>
        </ul>
      </div>


      

      {/* Checkout Section */}
      <section className="checkout-section">
        <h2>Let’s build your brand, one post at a time.</h2>
        <p></p>

        <a href="https://wa.me/+254718181952" className="checkout-button">
          Contact for Pricing
        </a>

        </section>
    </div>
  );
};

export default Management;
