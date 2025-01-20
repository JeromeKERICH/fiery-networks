import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import "./styles/Service.css";

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
  },
  {
    title: "Pop-Up Events & Road Trips",
    description:
      "Let’s hit the road together! I’m not talking about just any road trip, this is about combining fun, learning, and networking in ways that only I can.",
    features: [
      "Workshops, learning, and networking",
      "Apply real-world tactics and strategies on the go",
      "Get connected with like-minded individuals",
    ],
  },
  {
    title: "Social Media Marketing & Content Creation",
    description:
      "Whether it’s Instagram, LinkedIn, Facebook, or X, I know how to create content that speaks.",
    features: [
      "A customized plan that works for your audience",
      "I’ll craft posts that get people to stop scrolling and start interacting.",
      "Your voice, tone, and story will be aligned across all platforms.",
    ],
  },
];

const ServicePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    // Reset scroll position to top on every route change
    window.scrollTo(0, 0);
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleServiceSelect = (e) => {
    setSelectedService(e.target.value);
  };

  const handleInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for checkout can go here
    console.log("Checkout details:", { selectedService, userDetails });
    alert("Checkout initiated for " + selectedService);
    closeModal();
  };

  return (
    <section className="service-page">
      <div className="introduction">
        <h1>Welcome to Fiery Network Services</h1>
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
        </div>
      ))}

      {/* CTA Button */}
      <button className="cta-btn" onClick={openModal}>
        Get Started
      </button>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Select a Service and Provide Your Details</h2>
            <form onSubmit={handleSubmit}>
              {/* Service Selection */}
              <label htmlFor="service">Choose a Service</label>
              <select
                id="service"
                value={selectedService || ""}
                onChange={handleServiceSelect}
                required
              >
                <option value="">Select a Service</option>
                {services.map((service, index) => (
                  <option key={index} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>

              {/* User Details */}
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                required
              />

              {/* Submit Button */}
              <button type="submit" className="btn-submit">
                Proceed to Checkout
              </button>
            </form>
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicePage;
