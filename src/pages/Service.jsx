import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles/Service.css";
import CTA2 from "./CTA2";

const services = [
  {
    title: "LinkedIn Ghostwriting & Management Services",
    description:
      "Magnetic content that attracts attention, sparks conversations, and positions you as an expert.",
    features: [
      "Engaging Posts that showcase your unique voice.",
      "Profile Optimization to make your bio stand out.",
      "Content Strategy for consistent engagement.",
      "Audience Growth for the right connections.",
    ],
    path: "/linkedinmanagement",
  },
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
    title: "21-Day LinkedIn Mastery Bootcamp",
    description:
      "Turn your profile into a lead-generating machine in just 21 days.",
    features: [
      "Daily LinkedIn Tips delivered to your inbox.",
      "Actionable Tasks from day 1.",
      "Expert Guidance for connections and content.",
      "Exclusive Strategies for growth.",
    ],
    path: "/linkedinbootcamp",
  },
  {
    title: "Freelancing & Content Marketing Consulting",
    description:
      "Learn how to create a solid freelancing career or drive results with content marketing.",
    features: [
      "Freelancing 101 for starting and thriving.",
      "Content Marketing Strategy tailored to your audience.",
      "One-on-One Coaching for specific goals.",
    ],
    path: "/freelancingconsulting",
  },
  
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
          At The Fiery Network, we don’t just offer services, we ignite
          transformation. Whether you’re a freelancer ready to own your brand, a
          business looking to dominate LinkedIn, or someone planning a game-changing
          event, we’ve got you covered. <br />
          If you're ready to get serious about success, let's get to work. 🔥
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
