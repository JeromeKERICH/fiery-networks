import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { PaystackButton } from "react-paystack";
import "./styles/Linkman.css";

const LinkedInCoaching = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "LinkedIn Coaching Session",
    amount: 5000 * 100, // Amount in kobo for Paystack
  });

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSuccess = () => {
    const message = `Hello, I have successfully booked a LinkedIn coaching session. Looking forward to it!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/254718181952?text=${encodedMessage}`;
    window.location.href = whatsappLink;
  };

  const handleCheckout = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const paystackConfig = {
    email: formData.email,
    amount: formData.amount,
    publicKey,
    currency: "KES",
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
          <h1>1:1 LinkedIn Coaching</h1>
          <p>
            Boost your personal brand and grow your network with expert LinkedIn strategies. This personalized coaching session will help you refine your profile, optimize your content, and build meaningful connections.
          </p>
        </div>
        <div className="header-image">
          <img src="assets/link.jpg" alt="LinkedIn Coaching" />
        </div>
      </header>

      {/* Pricing Section */}
      <div className="pricing-box">
        <h3>Coaching Session</h3>
        <p>Unlock LinkedIn's full potential with tailored coaching.</p>
        <p className="price">5000 KES</p>
        <ul>
          <li><FaCheck className="tick-icon" /> Profile Optimization</li>
          <li><FaCheck className="tick-icon" /> Content Strategy Tips</li>
          <li><FaCheck className="tick-icon" /> Networking & Engagement Strategies</li>
          <li><FaCheck className="tick-icon" /> One-on-One Personalized Session</li>
        </ul>
      </div>

      {/* Checkout Section */}
      <section className="checkout-section">
        <h2>Ready to Elevate Your LinkedIn Game?</h2>
        <p>Book your personalized coaching session today for just 5000 KES.</p>

        <button className="checkout-button" onClick={handleCheckout}>
          Book Now
        </button>

        {showForm && (
          <>
            <div className="form-backdrop" onClick={closeForm}></div>
            <div className="checkout-form">
              <button className="close-now-button" onClick={closeForm}>&times;</button>
              <h3>Complete Your Payment</h3>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
              </div>
              <PaystackButton className="pay-buttons" {...paystackConfig}>Pay 5000 KES</PaystackButton>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default LinkedInCoaching;
