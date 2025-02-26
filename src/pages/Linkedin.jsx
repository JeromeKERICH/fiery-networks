import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { PaystackButton } from "react-paystack";
import "./styles/Linkman.css";

const LinkedInBootcamp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "Beginner Package",
    amount: 2399 * 100, // Amount in Kobo
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
    const amount = selectedPackage === "Fiery Package" ? 2399 * 100 : 2399 * 100;
    setFormData((prev) => ({
      ...prev,
      package: selectedPackage,
      amount,
    }));
  };

  const handleSuccess = (reference) => {
    const message = `Hello, I have successfully purchased the ${formData.package} for the LinkedIn Mastery Program.\n\nDetails:\nName: ${formData.name}\nEmail: ${formData.email}\nAmount: KES ${formData.amount / 100}\nTransaction ID: ${reference.reference}`;
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
      <header className="service-header">
        <div className="header-content">
          <h1>LinkedIn Mastery Program</h1>
          <p>
             In just 21 days, you'll learn step-by-step how to optimize your profile, create engaging content, and build a network that works for you—no guesswork, no fluff. This program is designed for busy professionals who want to see real results fast.
          </p>
        </div>
        <div className="header-image">
          <img src="assets/profile2.png" alt="LinkedIn Bootcamp" />
        </div>
      </header>

      <div className="introduction">
        <h1>What You’ll Learn</h1>
      </div>

      <div className="landing-box-container">
        
        <div className="landing-box">
          <h3><strong>Profile Optimization:</strong> Crafting a compelling LinkedIn profile that stands out.</h3>
        </div>
        <div className="landing-box">
          <h3><strong>Networking Hacks:</strong> Positioning yourself as an expert in your field.</h3>
        </div>
        <div className="landing-box">
          <h3><strong>Personal Branding:</strong> Connecting with the right people and build meaningful relationships.</h3>
        </div>
        <div className="landing-box">
          <h3><strong>Content Strategy:</strong> Learning what to post and how to engage your audience.</h3>
        </div>
        <div className="landing-box">
          <h3><strong>Lead Generation:</strong> Turning connections into clients and job offers.</h3>
        </div>
        <div className="landing-box">
          <h3><strong>Analytics:</strong> I will guide you on how to analyze your post.</h3>
        </div>
      </div>

      <section className="checkout-section">
        <h2>Ready to Optimize Your LinkedIn Profile?</h2>
        <p>Join my LinkedIn Mastery Program today and start seeing results on LinkedIn. Fill in your details, and I’ll guide you step by step toward LinkedIn success.</p>

        <button className="checkout-button" onClick={handleCheckout}>
          Join Now
        </button>

        {showForm && (
          <>
            <div className="form-backdrop" onClick={closeForm}></div>
            <div className="checkout-form">
              <button className="close-now-button" onClick={closeForm}>&times;</button>
              <h3>Complete Your Payment</h3>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required/>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required/>
              </div>
              <div className="form-group">
                <label htmlFor="package">Select Package</label>
                <select id="package" name="package" value={formData.package} onChange={handlePackageChange}>
                  <option value="Beginner Package">KES 2,399 - LinkedIn Mastery Program</option>
                </select>
              </div>
              <PaystackButton className="pay-buttons" {...paystackConfig}>
                Pay Now
              </PaystackButton>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default LinkedInBootcamp;
