import { useEffect } from "react";
import "./styles/BookPage.css";

function Book() {
   useEffect(() => {
          // Reset scroll position to top on every route change
          window.scrollTo(0, 0);
        }, []);
  return (
    <div className="container">
      {/* Header Section */}
      <section className="book-head ">
        <h1>Dear Newbie: Getting Started in the Freelancing World</h1>
        <h2>The Ultimate Guide to Going From Zero to Freelance Hero</h2>
      </section>

      {/* Intro Section */}
      <section className="intro">
        <p>
          At my boss’s house in Saudi Arabia, I contemplated how to get out of
          the rat race—the 9 to 5, as many call it. I didn’t know freelancing
          existed. I didn’t know people could get paid to write, or even that
          people got paid online... Yep, it was 2022, and I had no idea.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <img src="assets/new1.jpg" alt="Book Cover" />
        <div>
          <h3>What You’ll Find Inside</h3>
          <ul>
            <li>🔥 My personal story: How I went from being stuck in a 9-to-5 job...</li>
            <li>🔥 Actionable steps: I’ll show you exactly how I got my first freelance gig...</li>
            <li>🔥 Tips for building your brand: Whether you want to write, design, or offer any service online...</li>
            <li>🔥 How to make money: I didn’t know it was possible either, but you can absolutely get paid doing what you love...</li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
       {/* Testimonials Section */}
       <section className="testimonials">
        <div className="testimonial-card">
          <p>"There are only a few books I read without putting them down, and Dear Newbie is one of them..."</p>
          <div className="author">- Abirami Sekar</div>
        </div>
        <div className="testimonial-card">
          <p>"Ever walked on a journey that avails a skill and the Monetization strategy on your doorstep? ..." </p>
          <div className="author">- Miriam Wambua</div>
        </div>
        <div className="testimonial-card">
          <p>"I loved how you used your experience as a newbie to educate freelancers who want to take a dip at freelancing..."</p>
          <div className="author">- Abraham Onyemari</div>
        </div>
      </section>

      {/* Call-to-action Section */}
      <section className="cta">
        <a href="#" className="cta-button">
          Get Your Copy Now
        </a>
      </section>

     
    </div>
  );
}

export default Book;
