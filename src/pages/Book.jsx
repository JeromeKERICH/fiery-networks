import { useEffect, useState } from "react";
import { PaystackButton } from "react-paystack";
import "./styles/BookPage.css";

function Book() {
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to top on every route change
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [paymentOption, setPaymentOption] = useState("soft");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "Soft Copy",
    amount: 9900 * 100, // Default amount for soft copy (in kobo)
  });

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  // Toggle Modal visibility
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSuccess = (response) => {
    alert("Payment successful! You can now download the book.");
    if (formData.package === "Soft Copy") {
      window.open(
        "https://yourwebsite.com/path/to/your/book.pdf", // Replace with your actual book download link
        "_blank"
      );
    }
  };

  const paystackConfig = {
    email: formData.email,
    amount: formData.amount, // Amount in kobo
    publicKey,
    currency: "KES", // Specify the currency as Kenyan Shillings (KES)
    metadata: {
      name: formData.name,
      phone: formData.phone,
      package: formData.package,
    },
    onSuccess: handleSuccess,
    onClose: () => alert("Payment was not completed. Please try again."),
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  // Function to change the payment option
  const handlePaymentOptionChange = (option) => {
    setPaymentOption(option);
    if (option === "soft") {
      setFormData({
        ...formData,
        package: "Soft Copy",
        amount: 9900 * 100, // Amount in kobo for Soft Copy
      });
    } else {
      setFormData({
        ...formData,
        package: "Hard Copy",
        amount: 14900 * 100, // Amount in kobo for Hard Copy
      });
    }
  };

  return (
    <div className="container">
      {/* Header Section */}
      <section className="book-head">
        <h1>Dear Newbie: Getting Started in the Freelancing World</h1>
        <h2>The Ultimate Guide to Going From Zero to Freelance Hero</h2>
        <p>
          Price: <strong>Ksh. 9,900</strong> (Soft Copy) | <strong>Ksh. 14,900</strong> (Hard Copy)
        </p>
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
            <h2 className="modal-title">Choose Your Copy</h2>

            {/* Navigation */}
            <div className="navigation">
              <button
                onClick={() => handlePaymentOptionChange("soft")}
                className={`modal-nav-btn ${
                  paymentOption === "soft" ? "active" : ""
                }`}
              >
                Soft Copy
              </button>
              <button
                onClick={() => handlePaymentOptionChange("hard")}
                className={`modal-nav-btn ${
                  paymentOption === "hard" ? "active" : ""
                }`}
              >
                Hard Copy
              </button>
            </div>

            {/* Payment Option Content */}
            {paymentOption === "soft" && (
              <div className="modal-content">
                <h3>Soft Copy</h3>
                <p>Pay and download the book directly.</p>
                <PaystackButton
                  className="pay-btn"
                  {...paystackConfig}
                  text="Pay for Soft Copy"
                />
              </div>
            )}

            {paymentOption === "hard" && (
              <div className="modal-content">
                <h3>Hard Copy</h3>
                <p>Fill your delivery details and pay for the hard copy.</p>
                <form onSubmit={handleFormSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
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
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Delivery Address"
                    required
                  />
                  <PaystackButton
                    className="pay-btn"
                    {...paystackConfig}
                    text="Pay for Hard Copy"
                  />
                </form>
              </div>
            )}
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
