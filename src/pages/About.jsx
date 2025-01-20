import { useEffect } from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import "./styles/About.css";
import CTA2 from "./CTA2";

const AboutPage = () => {
  useEffect(() => {
        // Reset scroll position to top on every route change
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <header className="hero-section">
        <div className="hero-content">
            <img src="assets/about.jpg" alt="Miriam Maru" className="profile-photo" />
            <div className="hero-text">
            <h1>I'm Miriam Maru</h1>
            <h2>The Fiery Lady Igniting Global Impact</h2>
            <p>
                I threw the rules out the window and built my own path to freedom. If you’re ready to transform your LinkedIn, kickstart your freelance career, or supercharge your social media strategy, you’re in the right place.
            </p>
            <div className="hero-buttons">
                <button className="cta-button primary">Lets Work</button>
                <button className="cta-button secondary">Explore Services</button>
            </div>
            </div>
        </div>
        </header>
  

      <main>
        <section className="about-story">
          <h2>How I Went from 9-to-5 to Fiery Freelancing</h2>
          <p>
            It wasn’t always this way. In fact, just a few years ago, I was sitting at my boss’s house in Saudi Arabia, dreaming of escaping the rat race. I had no idea freelancing even existed or that people got paid to write online.
          </p>
          <p>
            From struggling to thriving, I learned what it takes to be a freelancer. Now, I’m on a mission to empower you to find your own path and achieve freedom.
          </p>
        </section>

        <section className="services">
          <h2>What I Offer</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>LinkedIn Ghostwriting</h3>
              <p>Powerful content to get you noticed and drive opportunities.</p>
            </div>
            <div className="service-card">
              <h3>Event Hosting</h3>
              <p>Host and moderate events with confidence and flair.</p>
            </div>
            <div className="service-card">
              <h3>Freelancer Coaching</h3>
              <p>Personalized coaching to launch or grow your freelancing career.</p>
            </div>
          </div>
        </section>

      
        <CTA2/>
        <section className="social-links">
        <h2>Follow Me</h2>
        <div className="icons">
            <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            >
            <FaLinkedin />
            </a>
            <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            >
            <FaTwitter />
            </a>
            <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            >
            <FaInstagram />
            </a>
        </div>
        </section>
        
      </main>
      </div>
  );
};

export default AboutPage;
