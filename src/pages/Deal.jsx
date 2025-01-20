import React from "react";
import { useEffect } from "react";
import { FaCheckCircle, FaFire, FaFireAlt } from "react-icons/fa"; // Tick icon for lists
import "./styles/Deal.css";

const Deal = () => {

  useEffect(() => {
        // Reset scroll position to top on every route change
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="deal-container">
      <header className="deal-header">
        <h1>This isn’t your typical “blah blah” website. Nope.</h1>
        <h2>This is Where Game-Changers Come to Ignite</h2>
      
        <p>Level up your freelancing game and set your career on fire.</p>
      </header>

      <section className="deal-items">
        <div className="deal-item">
          <FaFireAlt className="tic-icons" />
          <h2>Grab *Dear Newbie* and Learn the Real Deal</h2>
          <p>Get your hands on the book that walks you through every step to success in freelancing. No fluff, just action.</p>
        </div>
        <div className="deal-item">
          <FaFireAlt className="tic-icons" />
          <h2>Elevate Your LinkedIn Profile with Ghostwriting</h2>
          <p>Revamp your LinkedIn with captivating copy that gets noticed. Make your personal brand unforgettable.</p>
        </div>
        <div className="deal-item">
          <FaFireAlt className="tic-icons" />
          <h2>Conquer LinkedIn in 21 Days</h2>
          <p>Get exclusive tips and tools in a step-by-step bootcamp to make your LinkedIn profile a standout success.</p>
        </div>
        <div className="deal-item">
          <FaFireAlt className="tic-icons" />
          <h2>Master Marketing and Build an Army of Loyal Fans</h2>
          <p>Learn the tricks to turn social media into a lead-generating machine that connects you with your audience.</p>
        </div>
        <div className="deal-item">
          <FaFireAlt className="tic-icons" />
          <h2>Run Events So Lit They Keep People Coming Back</h2>
          <p>Host unforgettable events that leave your audience eager for more. Learn how to create impactful experiences.</p>
        </div>
        <div className="deal-item">
          <FaFireAlt className="tic-icons" />
          <h2>Learn to Write Copy That Turns Browsers Into Buyers</h2>
          <p>Perfect your copywriting skills and create irresistible content that generates sales and conversions.</p>
        </div>
      </section>

        <button className="cta-btn primary">Get Started</button>
      
    </div>
  );
};

export default Deal;
