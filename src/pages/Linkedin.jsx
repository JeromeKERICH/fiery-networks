import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { PaystackButton } from "react-paystack";
import "./styles/Linkman.css";

const LinkedInBootcamp = () => {
  useEffect(() => {
    // Reset scroll position to top on every route change
    window.scrollTo(0, 0);
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "Beginner Package",
    amount: 10000 * 100, // Default amount in kobo (multiplied by 100)
  });

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePackageChange = (e) => {
    const selectedPackage = e.target.value;
    const amount =
      selectedPackage === "Beginner Package"
        ? 10000 * 100
        : selectedPackage === "Intermediate Package"
        ? 20000 * 100
        : 30000 * 100; // Amount in kobo
    setFormData((prev) => ({
      ...prev,
      package: selectedPackage,
      amount,
    }));
  };

  const handleSuccess = () => {
    const message = `Hello, I have successfully purchased the ${formData.package} for the event hosting and moderation. Looking forward to it!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/254718181952?text=${encodedMessage}`;
    
    // Redirect to WhatsApp with confirmation message
    window.location.href = whatsappLink;
  };

  const handleCheckout = () => setShowForm(true);

  const closeForm = () => setShowForm(false);

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

  return (
    <div className="service-detail">
      {/* Header Section */}
      <header className="service-header">
        <div className="header-content">
          <h1>LinkedIn Bootcamp</h1>
          <p>
            Transform your LinkedIn profile into a lead generating machnine n just 21-Days.
            <br></br>
            Learn proven strategies to attract clients, grow your network and land opportunities even if you are startting from the scratch.
            In just 21 days, you'll learn step-by-step how to optimize your profile, create engaging content, and build a network that works for you—no guesswork, no fluff. This bootcamp is designed for busy professionals who want to see real results fast.
          </p>
        </div>
        <div className="header-image">
          <img
            src="assets/market.jpg" 
            alt="LinkedIn Bootcamp"
          />
        </div>
      </header>

      {/* Pricing Section */}
      <div className="pricing-boxes">
        <div className="pricing-box">
          <h3>Beginner Package</h3>
          <p>Great for those just getting started on LinkedIn.</p>
          <p className="price">KES 10,000</p>
          <ul>
            <li>
              <FaCheck className="tick-icon" /> Profile Optimization for Job Seekers
            </li>
            <li>
              <FaCheck className="tick-icon" /> Networking Basics and Connection Strategies
            </li>
            <li>
              <FaCheck className="tick-icon" /> Introduction to LinkedIn Job Search
            </li>
          </ul>
        </div>
        <div className="pricing-box">
          <h3>Intermediate Package</h3>
          <p>For those looking to strengthen their LinkedIn presence.</p>
          <p className="price">KES 20,000</p>
          <ul>
            <li>
              <FaCheck className="tick-icon" /> Advanced Profile Strategies
            </li>
            <li>
              <FaCheck className="tick-icon" /> Personal Branding Techniques
            </li>
            <li>
              <FaCheck className="tick-icon" /> LinkedIn Ads & Content Creation Tips
            </li>
            <li>
              <FaCheck className="tick-icon" /> In-depth Networking & Collaboration Strategies
            </li>
          </ul>
        </div>
        <div className="pricing-box">
          <h3>Expert Package</h3>
          <p>Take your LinkedIn presence to a whole new level.</p>
          <p className="price">KES 30,000</p>
          <ul>
            <li>
              <FaCheck className="tick-icon" /> Personalized LinkedIn Strategy Session
            </li>
            <li>
              <FaCheck className="tick-icon" /> In-depth LinkedIn Analytics & Insights
            </li>
            <li>
              <FaCheck className="tick-icon" /> Growth & Lead Generation Techniques
            </li>
            <li>
              <FaCheck className="tick-icon" /> Exclusive LinkedIn Group Access
            </li>
            <li>
              <FaCheck className="tick-icon" /> Job Placement Tips & Networking Opportunities
            </li>
          </ul>
        </div>
      </div>

      {/* Checkout Section */}
      <section className="checkout-section">
        <h2>Ready to Optimize Your LinkedIn Profile?</h2>
        <p>
          Join our bootcamp today and start seeing results on LinkedIn. Select
          your package, fill in your details, and we’ll guide you step by step
          towards LinkedIn success.
        </p>

        <button className="checkout-button" onClick={handleCheckout}>
          Start Here
        </button>

        {showForm && (
          <>
            <div className="form-backdrop" onClick={closeForm}></div>

            <div className="checkout-form">
              <button className="close-now-button" onClick={closeForm}>
                &times;
              </button>
              <h3>Complete Your Payment</h3>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="package">Select Package</label>
                <select
                  id="package"
                  name="package"
                  value={formData.package}
                  onChange={handlePackageChange}
                >
                  <option value="Beginner Package">KES 10,000 - Beginner Package</option>
                  <option value="Intermediate Package">KES 20,000 - Intermediate Package</option>
                  <option value="Expert Package">KES 30,000 - Expert Package</option>
                </select>
              </div>
              <PaystackButton
                className="pay-buttons"
                {...paystackConfig}
              >
                PayNow
              </PaystackButton>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default LinkedInBootcamp;
