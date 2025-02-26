import { Link } from 'react-router-dom';
import './styles/Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="text-center">
          <p className="subheading">Get a glimpse of my impact</p>
          <h2 className="heading">What my happy clients say about me</h2>
        </div>

        <div className="check-reviews">
          <Link to="/reviews" title="Check reviews" className="reviews-link">
            Check all reviews
          </Link>
        </div>

        <div className="testimonials-wrapper">
          <div className="testimonials-card">
            <blockquote className="testimonials-text">
              <p>“Miriam's positive energy and vibrant spirit make her a standout authority in her niche. She approaches her work with genuine passion, always putting her heart into everything she does.”</p>
            </blockquote>
            <div className="testimonials-author">
              <img
                className="author-avatar"
                src="assets/chinyere.jpg"
                alt="Chinyere"
              />
              <div className="author-info">
                <p className="author-name">Chinyere E</p>
                <p className="author-job">Content Writer</p>
              </div>
            </div>
          </div>

          <div className="testimonials-card">
            <blockquote className="testimonials-text">
              <p>“Miriam is an Author, an exceptional copywriter with deep expertise in storytelling, and a fantastic event host.Her passion, dedication, and commitment to her craft are second to none. I highly recommend her
”</p>
            </blockquote>
            <div className="testimonials-author">
              <img
                className="author-avatar"
                src="assets/toyin.jpg"
                alt="Toyin Tope-Adedipe"
              />
              <div className="author-info">
                <p className="author-name">Toyin Tope-Adedipe</p>
                <p className="author-job">Mental Wellness Coach</p>
              </div>
            </div>
          </div>

          <div className="testimonials-card">
            <blockquote className="testimonials-text">
              <p>“Miriam was an incredible mentor I met at a virtual book publishing event. She taught me the basics of copywriting through clear, practical examples when I knew very little about the field. .”</p>
            </blockquote>
            <div className="testimonials-author">
              <img
                className="author-avatar"
                src="assets/sumaya.jpg"

                alt="Sumaya"
              />
              <div className="author-info">
                <p className="author-name">Sumaya</p>

                <p className="author-job">Auditor</p>
              </div>
            </div>
          </div>

          {/* Add other testimonial cards here */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
