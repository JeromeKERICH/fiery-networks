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
        "Pack your bags, bring your curiosity, and get ready for a journey where you’ll learn, network, and grow.",
      features: [
        "Interactive Workshops: Real-time learning and hands-on exercises.",
        "Networking Opportunities: Connect with like-minded individuals.",
        "Adventures on the Go: Explore stunning locations and new cultures.",
      ],
      buttonText: "Join Now",
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
      buttonText: "Reserve Your Spot",
    },
    {
      title: "Freelancer Workshops: From Newbie to Pro",
      description:
        "Learn the ins and outs of freelancing to build a successful career step by step.",
      features: [
        "Hands-On Learning: From finding your niche to managing your business.",
        "Real-World Insights: Actionable tips from an expert.",
        "Interactive Q&A: Have your questions answered live.",
      ],
      buttonText: "Sign Up for the Workshop",
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
      buttonText: "Book Your Spot",
    },
  ];

  const EventCard = ({ title, description, features, buttonText }) => (
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
      <button className="cta-buttons">{buttonText}</button>
    </div>
  );

  return (
    <div className="events-page">
      <div className="head">
        <h1>Fiery Network Events</h1>
        <p>
          At The Fiery Network, we don't just organize events; we create
          experiences that inspire, challenge, and ignite transformation.
        </p>
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
