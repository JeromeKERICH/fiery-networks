import React from "react";
import { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import "./styles/Service.css"

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
    buttonText: "Level Up LinkedIn",
    buttonClass: "btn-linkedin",
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
    buttonText: "Plan Your Event",
    buttonClass: "btn-event",
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
    buttonText: "Join the Bootcamp",
    buttonClass: "btn-bootcamp",
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
    buttonText: "Get a Consultation",
    buttonClass: "btn-consulting",
  },
  {
    title:"Pop-Up Events & Road Trips",
    description:
    "Let’s hit the road together! I’m not talking about just any road trip, this is about combining fun, learning, and networking in ways that only I can",
    features: [
        "Workshops, learning, and networking",
        "Apply real-world tactics and strategies on the go",
        "Get connected with like-minded individuals",
    ],

    buttonText: "Explore Events",
    buttonClass: "btn-events",
  },

  {
    title: "Social Media Marketing & Content Creation",
    description:
    "Whether it’s Instagram, LinkedIn, Facebook, or X, I know how to create content that speaks",
    features: [
        "A customized plan that works for your audience",
        "I’ll craft posts that get people to stop scrolling and start interacting.",
        "Your voice, tone, and story will be aligned across all platforms.",
    ],
    buttonText: "Get A quote",
    buttonClass: "btn-social",
    
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
        <h1>Welcome to Fiery Network Services </h1>
        <p>
        At The Fiery Network, we don’t just offer services, we ignite transformation. Whether you’re a freelancer ready to own your brand, a business looking to dominate LinkedIn, or someone planning a game-changing event, we’ve got you covered. <br></br>If you're ready to get serious about success, let's get to work. 🔥
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
          <button className={`cta-button ${service.buttonClass}`}>
            {service.buttonText}
          </button>
        </div>
      ))}
        
     
    </section>
  );
};

export default ServicePage;
