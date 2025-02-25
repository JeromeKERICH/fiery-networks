
import { Link } from "react-router-dom";
import "./styles/CTA.css";

const CTASection = () => {
  return (
    <section className="ctas-section">
      <div className="ctas-content">
        <h2>Ready to Ignite Your Future?</h2>
        <p>
          Don't wait for change to happen. Make it happen. Join me, and let's make magic together.
        </p>
        <div className="ctass-buttons">
          <Link to="/book" className="ctass-btn books-btn">Buy my Book</Link>
          <Link to="/servicepage" className="ctass-btn services-btn">Explore My Services</Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
