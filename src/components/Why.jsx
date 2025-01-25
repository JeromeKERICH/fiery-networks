
import { FaFireAlt } from 'react-icons/fa'; 
import "./styles/Why.css";

const WhySection = () => {
  return (
    <section className="why-section">
      <div className="row">
        <div className="why-content">
          <h2>Why Fiery Network?</h2>
          <p>
            Because I don’t do halfway. Whether you’re building your personal brand, scaling your business page, or making waves with social media marketing, I’ll help you turn heads, spark connections, and create a lasting impact.
          </p>
        </div>
        <FaFireAlt className="fire-icon" />
      </div>
      <div className="row-container">
        <div className="row1">
          <div className="why-contents">
            <h3>What’s next?</h3>
            <ul>
              <li><strong>Join a course:</strong> Because shortcuts to success do exist.</li>
              <li><strong>Explore my services:</strong> From ghostwriting to content marketing, I’ve got you covered.</li>
              <li><strong>Buy the book:</strong> Ready to hear my story and learn how you can become a freelancer too?</li>
            </ul>
            
          </div>
        </div>
        <div className="row1">
          <div className="why-contents">
            <h3>Let’s Make Magic Together.</h3>
            <p className='explain'>Click around, stay a while, and let’s set your goals on fire.</p>

            <p className="share-note">Oh, and don’t forget to share this site with your fiery friends.</p>
          </div>
        </div>

        <p className="welcome-message">🔥 <strong>Welcome to the Fiery Network.</strong></p>
        <p className="slogan">🔥 <strong>Spark Global Impact</strong></p>
      </div>


         
    </section>
  );
};

export default WhySection;
