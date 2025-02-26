import { useEffect, useState } from "react";
import { PaystackButton } from "react-paystack";
import "./styles/BookPage.css";

function Book() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [paymentOption, setPaymentOption] = useState("soft");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "Soft Copy",
    amount: 650 * 100, // Default (KES cents)
  });

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSuccess = (response) => {
    alert("Payment successful! You can now download the book.");
    
    // Close the modal
    setIsOpen(false);
  
    if (formData.package === "Soft Copy") {
      window.open(
        "assets/fierybook.pdf", // Replace with your actual book download link
        "_blank"
      );
    }
  };
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaymentOptionChange = (option) => {
    setPaymentOption(option);
    setFormData({
      ...formData,
      package: option === "soft" ? "Soft Copy" : formData.package,
      amount: option === "soft" ? 650 * 100 : formData.amount,
    });
  };
  
  

  return (
    <div className="container">
      {/* Header Section */}
      <section className="book-head">
        <h1>Dear Newbie: Getting Started in the Freelancing World</h1>
        <h2>The Ultimate Guide to Going From Zero to Freelance Hero</h2>
        <p>
          Price: <strong>Ksh. 650</strong> (Soft Copy)
        </p>
      </section>

      {/* Intro Section */}
      <section className="intro">
        <p>
          At my boss’s house in Saudi Arabia, I contemplated how to get out of
          the rat race—the 9 to 5, as many call it. I didn’t know freelancing
          existed. I didn’t know people could get paid to write, or even that
          people got paid online... Yep, it was 2022, and I had no idea. All I knew was that I wanted a flexible job. <br></br> <br></br>Well, God answered my prayer when I stumbled upon freelancing! It has completely changed my life, and it could change yours too.
          This book will encourage you to stay the course and push for even greater heights in your freelancing journey. But hey, I don’t want to spill all the beans here - grab your copy and dive into the full story! Your freelancing breakthrough could be just a page away.
        </p>
      </section>

      <section className="cta">
        <a href="#" className="cta-button" onClick={toggleModal}>
          Get Your Copy
        </a>
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
            <li>🔥 How to make money:I didn’t know it was possible either, but you can absolutely get paid doing what you love...</li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="testimonial-card">
          <p>
            "There are only a few books I read without putting them down, and
            Dear Newbie is one of them..."
          </p>
          <div className="author">- Abirami Sekar</div>
        </div>
        <div className="testimonial-card">
          <p>
            "Ever walked on a journey that avails a skill and the Monetization
            strategy on your doorstep? ..."
          </p>
          <div className="author">- Miriam Wambua</div>
        </div>
        <div className="testimonial-card">
          <p>
            "I loved how you used your experience as a newbie to educate
            freelancers who want to take a dip at freelancing..."
          </p>
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
            <h2 className="modal-title">Buy Your Copy</h2>

            <div className="modal-content">
              <label>
                <input
                  type="radio"
                  name="package"
                  value="Soft Copy"
                  checked={paymentOption === "soft"}
                  onChange={() => handlePaymentOptionChange("soft")}
                />{" "}
                Soft Copy (Ksh. 650)
              </label>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />

              <PaystackButton
                className="pay-btn"
                amount={formData.amount}
                email={formData.email}
                publicKey={publicKey}
                currency="KES"
                metadata={{
                  name: formData.name,
                  phone: formData.phone,
                  package: formData.package,
                }}
                onSuccess={handleSuccess}
                onClose={() => alert("Payment not completed. Try again.")}
                text="Buy Now"
              />
            </div>

            {/* Close Button */}
            <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Book;
