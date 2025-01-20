
import  { useState, useEffect} from 'react';
import './styles/Linkedin.css';


const Linkedin = () => {
  useEffect(() => {
        // Reset scroll position to top on every route change
        window.scrollTo(0, 0);
      }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle the modal visibility
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="bootcamp-page">
      <header className="header-section">
        <h1>LinkedIn Mastery Bootcamp</h1>
        <h3>21 Days to a Killer LinkedIn Profile</h3>
        <p>
          Ready to dominate LinkedIn? This 21-day bootcamp is for anyone who
          wants to stand out on LinkedIn and get noticed by the right people—
          whether you're building a personal brand, looking for clients, or hunting
          for a job.
        </p>
        <button onClick={toggleModal} className="cta-button">
          Join the 21-Day Bootcamp
        </button>
      </header>

      <section className="what-you-learn-section">
        <h2>🔥 What You’ll Learn:</h2>
        <div className="learning-outcome">
          <div className="day-block">
            <h3>Day 1-7</h3>
            <p>Optimizing your LinkedIn profile to attract the right audience.</p>
          </div>
          <div className="day-block">
            <h3>Day 8-14</h3>
            <p>Mastering LinkedIn content strategy—how to engage and grow your followers.</p>
          </div>
          <div className="day-block">
            <h3>Day 15-21</h3>
            <p>Advanced LinkedIn tactics—networking, using LinkedIn analytics, and leveraging premium features for maximum impact.</p>
          </div>
        </div>
        <p className="outcome-text">
          By the end of this bootcamp, you’ll have a LinkedIn profile that stands
          out, content strategies that convert, and the confidence to network like a pro.
        </p>
      </section>

      {/* Modal for Registration */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Register for the Bootcamp</h3>
            <form className="registration-form">
              <label>Name</label>
              <input type="text" placeholder="Enter your full name" required />
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
              <label>Phone</label>
              <input type="tel" placeholder="Enter your phone number" required />
              <button type="submit" className="register-button">
                Register Now
              </button>
            </form>
            <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Linkedin;
