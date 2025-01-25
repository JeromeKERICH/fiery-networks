import { useEffect, useState } from "react";
import "./styles/BookPage.css";

function Book() {
  useEffect(() => {
    // Reset scroll position to top on every route change
    window.scrollTo(0, 0);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [paymentOption, setPaymentOption] = useState(null);

  // Toggle Modal visibility
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handlePaystackPayment = (amount) => {
    const handler = PaystackPop.setup({
      key: 'pk_test_c91ea464a4db7258e11add29af2ebcf853637827',
      email: 'customer-email@example.com',
      amount: amount * 100,
      currency: 'NGN',
      onClose: function() {
        alert('Payment was not completed');
      },
      callback: function(response) {
        alert('Payment complete! Reference: ' + response.reference);
      },
    });

    handler.openIframe();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handlePaystackPayment(200);
  };

  return (
    <div className="container">
      {/* Header Section */}
      <section className="book-head">
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

      {/* CTA Button */}
      <section className="cta">
        <a href="#" className="cta-button" onClick={toggleModal}>
          Get Your Copy Now
        </a>
      </section>

      {/* Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Choose Your Copy</h2>
            
            {/* Navigation */}
            <div className="navigation">
              <button onClick={() => setPaymentOption('soft')} className="modal-nav-btn">
                Soft Copy
              </button>
              <button onClick={() => setPaymentOption('hard')} className="modal-nav-btn">
                Hard Copy
              </button>
            </div>

            {/* Payment Option Content */}
            {paymentOption === 'soft' && (
              <div className="modal-content">
                <h3>Soft Copy</h3>
                <p>Pay and download the book directly.</p>
                <button onClick={() => handlePaystackPayment(100)} className="pay-btn">
                  Pay for Soft Copy
                </button>
              </div>
            )}

            {paymentOption === 'hard' && (
              <div className="modal-content">
                <h3>Hard Copy</h3>
                <p>Fill your delivery details and pay for the hard copy.</p>
                <form onSubmit={handleFormSubmit}>
                  <input type="text" placeholder="Full Name" required />
                  <input type="text" placeholder="Phone Number" required/>
                  <input type="text" placeholder="Email Address" required/>
                  <input type="text" placeholder="Delivery Address" required />
                 
                  <button type="submit" className="pay-btn">
                    Pay for Hard Copy
                  </button>
                </form>
              </div>
            )}
            {/* Close Button */}
            <button className="close-modal" onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Book;
