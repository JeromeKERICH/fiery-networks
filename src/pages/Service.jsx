import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles/Service.css";
import CTA2 from "./CTA2";

const services = [
  {
    title: "Event Hosting & Moderation",
    description:
      "Creating a vibe that leaves your audience talking long after the event ends.",
    features: [
      "Energetic Hosting that keeps the crowd engaged.",
      "Seamless Moderation for smooth conversations.",
      "Customized Experiences tailored to your goals.",
    ],
    path: "/eventhosting",
  },

  {
    title: "1:1 LinkedIn Coaching",
    description:
      "Tired of feeling invisible on LinkedIn? Let’s fix that.",
    features: [
      "LinkedIn Mastery for Personal Branding and Networking.",
      "Customized Content Strategies to Engage Your Target Audience.",
      "One-on-One Coaching to Achieve Your Career Goals."
    ],
    path: "/freelancingconsulting",
  },

  {
    title: "Social Media Marketing & Management",
    description: "Build a brand that speaks, engages, and converts across LinkedIn, Meta, X, and YouTube.",
    features: [
      "Content that connects with your audience.",
      "Strategies to boost visibility and engagement.",
      "Consistent branding across all platforms.",
      "Data-backed insights to refine and grow."
    ],

    path: "/management",
  }
  

];

const ServicePage = () => {
  useEffect(() => {
    // Reset scroll position to top on every route change
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="service-page">
      <div className="introduction">
        <h1>Fiery Network Services</h1>
        <p>
          You could be a freelancer ready to own your brand, a
          business looking to dominate LinkedIn, or someone planning a game-changing
          event, I’ve got you covered. <br />
          
        </p>
      </div>

      {services.map((service, index) => (
        <div key={index} className="service-box">
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          <ul>
            {service.features.map((feature, i) => (
              <li key={i}>
                <FaCheck className="tick-icon" /> {feature}
              </li>
            ))}
          </ul>
          {/* Learn More Button */}
          <Link to={service.path} className="learn-more-btn">
            Learn More
          </Link>
        </div>
      ))}

    </section>

    
  );
};

export default ServicePage;
