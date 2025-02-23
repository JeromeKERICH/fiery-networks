import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { PaystackButton } from "react-paystack";
import "./styles/Linkman.css";

const EventHostingModeration = () => {
  useEffect(() => {
    // Reset scroll position to top on every route change
    window.scrollTo(0, 0);
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "Standard Package",
    amount: 15000 * 100, // Default amount in kobo (multiplied by 100)
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
      selectedPackage === "Standard Package"
        ? 15000 * 100
        : selectedPackage === "Premium Package"
        ? 25000 * 100
        : 40000 * 100; // Amount in kobo
    setFormData((prev) => ({
      ...prev,
      package: selectedPackage,
      amount,
    }));
  };

  const handleSuccess = (reference) => {
    // Extract the transaction reference ID
    const transactionId = reference.reference;
    
    // Construct WhatsApp message
    const message = `Hello, I have successfully purchased the ${formData.package} for KES ${formData.amount / 100}. My transaction ID is ${transactionId}.`;
  
    // Encode and redirect to WhatsApp
    const whatsappLink = `https://wa.me/254718181952?text=${encodeURIComponent(message)}`;
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
          <h1>Event Hosting & Moderation</h1>
          <p>
            Creating a vibe that leaves your audience talking long after the
            event ends. We specialize in bringing energy and seamless transitions
            to your events, making sure your message is delivered effectively
            while keeping the audience engaged.
          </p>
        </div>
        <div className="header-image">
          <img
            src="assets/moder.jpg" // Replace with an actual image
            alt="Event Hosting & Moderation"
          />
        </div>
      </header>

      {/* Pricing Section */}
      <div className="pricing-boxes">
        <div className="pricing-box">
          <h3>Standard Package</h3>
          <p>Ideal for small events with straightforward needs.</p>
          <p className="price">KES 15,000</p>
          <ul>
            <li>
              <FaCheck className="tick-icon" /> 2 Hours of Hosting & Moderation
            </li>
            <li>
              <FaCheck className="tick-icon" /> Audience Engagement Activities
            </li>
            <li>
              <FaCheck className="tick-icon" /> Pre-Event Planning Consultation
            </li>
            <li>
              <FaCheck className="tick-icon" /> Event Coordination
            </li>
          </ul>
        </div>
        <div className="pricing-box">
          <h3>Premium Package</h3>
          <p>For events requiring enhanced interaction and dynamic moderation.</p>
          <p className="price">KES 25,000</p>
          <ul>
            <li>
              <FaCheck className="tick-icon" /> 4 Hours of Hosting & Moderation
            </li>
            <li>
              <FaCheck className="tick-icon" /> Personalized Engagement Strategies
            </li>
            <li>
              <FaCheck className="tick-icon" /> Customized Event Flow and Setup
            </li>
            <li>
              <FaCheck className="tick-icon" /> Live Audience Interaction (Q&A, Polls)
            </li>
          </ul>
        </div>
        <div className="pricing-box">
          <h3>Elite Package</h3>
          <p>Comprehensive hosting and moderation for large-scale events.</p>
          <p className="price">KES 40,000</p>
          <ul>
            <li>
              <FaCheck className="tick-icon" /> 6+ Hours of Hosting & Moderation
            </li>
            <li>
              <FaCheck className="tick-icon" /> VIP Treatment for Speakers/Guests
            </li>
            <li>
              <FaCheck className="tick-icon" /> On-Site Event Management
            </li>
            <li>
              <FaCheck className="tick-icon" /> Full Event Coordination with a Team
            </li>
            <li>
              <FaCheck className="tick-icon" /> Customizable Audience Engagement
            </li>
          </ul>
        </div>
      </div>

      {/* Checkout Section */}
      <section className="checkout-section">
        <h2>Ready to Host an Unforgettable Event?</h2>
        <p>
          Book your event today and let's make it an experience your audience
          will never forget. Choose your package, fill in the details, and we'll
          take care of the rest.
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
                  <option value="Standard Package">KES 15,000 - Standard Package</option>
                  <option value="Premium Package">KES 25,000 - Premium Package</option>
                  <option value="Elite Package">KES 40,000 - Elite Package</option>
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

export default EventHostingModeration;
