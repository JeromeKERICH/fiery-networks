import React from "react";
import { useEffect } from "react";
import "./styles/Events.css";
import { FaCheck } from "react-icons/fa";

const EventsPage = () => { 
  useEffect(() => {
    // Reset scroll position to top on every route change
    window.scrollTo(0, 0);
  }, []);

  const eventsData = [
    {
      title: "Road Trips: Learning on the Go",
      description:
        "Pack your bags, fuel your curiosity, and embark on a journey where adventure meets knowledge.",
      features: [
        "Hands-on Learning – Interactive workshops designed for real-world impact..",
        "Powerful Connections – Network with driven individuals and industry experts.",
        "New Perspectives – Gain insights from diverse cultures and experiences.",
        "Unforgettable Adventures – Explore stunning destinations while learning.",
      ],
    },
    {
      title: "Pop-Up Events: Where Learning & Fun Collide",
      description:
        "High-energy, intimate events packed with value, tackling freelancing, content marketing, and LinkedIn strategies.",
      features: [
        "Expert Sessions: Strategies you can implement immediately.",
        "Networking Powerhouses: Meet growth-minded individuals.",
        "Fun Vibes: Because learning can be fun.",
      ],
    },
    {
      title: "Freelancer Retreats: Recharge, Connect & Elevate",
      description:
        "Step away from the screen and into a space where freelancers unwind, share challenges, and grow together.",
      features: [
        "Real Talk, Real Solutions – Open discussions on freelancing struggles and wins.",
        "Collaborative Learning – Exchange ideas, strategies, and industry insights",
        "Supportive Community – Connect with like-minded freelancers who get it.",
        "Work & Play Balance – Relax, recharge, and return with fresh motivation",
      ],
    },
    {
      title: "Special Retreats: Recharge, Network, and Grow",
      description:
        "Combine relaxation with learning, networking, and self-development in immersive retreats.",
      features: [
        "Personal Growth: Workshops, seminars, and reflections.",
        "Relaxation: Recharge with outdoor adventures and wellness sessions.",
        "Networking with Influencers: Meet industry-leading professionals.",
      ],
    },
  ];

  // WhatsApp redirect function with a pre-filled message
  const handleWhatsAppRedirect = (eventTitle) => {
    const message = `Hi! I'm interested in learning more about the "${eventTitle}" event. Could you provide more details?`;
    const whatsappLink = `https://wa.me/254718181952?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  const EventCard = ({ title, description, features }) => (
    <div className="event-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <FaCheck className="tick-icon" /> {feature}
          </li>
        ))}
      </ul>
      <button
        className="cta-buttons"
        onClick={() => handleWhatsAppRedirect(title)}
      >
        Request Info
      </button>
    </div>
  );

  return (
    <div className="events-page">
      <div className="head">
        <h1>Fiery Network Events</h1>
      </div>

      <section className="upcoming-events">
        <h1>Upcoming Events</h1>
        <div className="events-grid">
          {eventsData.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
