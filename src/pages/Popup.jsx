import React, { useState, useEffect } from "react";
import { FaCheck, FaRegClock } from "react-icons/fa";
import { PaystackButton } from "react-paystack";
import "./styles/Linkman.css";

const PopUpEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to top on route change
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "Pop-Up Event",
    amount: 15000 * 100, // Default amount in kobo
  });

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEventChange = (e) => {
    const selectedEvent = e.target.value;
    const amount = selectedEvent === "Pop-Up Event" ? 15000 * 100 : 25000 * 100; // Amount in kobo
    setFormData((prev) => ({
      ...prev,
      event: selectedEvent,
      amount,
    }));
  };

  const handleSuccess = () => {
    window.location.href = "https://chat.whatsapp.com/your-group-link"; // Redirect to WhatsApp group
  };

  const handleCheckout = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const paystackConfig = {
    email: formData.email,
    amount: formData.amount, // Amount in kobo
    publicKey,
    currency: "KES",
    metadata: {
      name: formData.name,
      phone: formData.phone,
      event: formData.event,
    },
    onSuccess: handleSuccess,
    onClose: () => alert("Payment was not completed. Please try again."),
  };

  return (
    <div className="service-detail">
      {/* Header Section */}
      <header className="service-header">
        <div className="header-content">
          <h1>Pop-Up Events & Road Trips</h1>
          <p>{`Let’s hit the road together! This is about combining fun, learning, and networking in ways that only I can.`}</p>
        </div>
        <div className="header-image">
          <img src="assets/road-trip.jpg" alt="Pop-Up Events & Road Trips" />
        </div>
      </header>

      {/* Features Section */}
      <section className="features-section">
        <h2>What to Expect?</h2>
        <ul className="feature-list">
          {[
            "Workshops, learning, and networking",
            "Apply real-world tactics and strategies on the go",
            "Get connected with like-minded individuals",
          ].map((feature, index) => (
            <li key={index}>
              <FaCheck className="tick-icon" /> {feature}
            </li>
          ))}
        </ul>
      </section>

      {/* Event Countdown Section */}
      <section className="countdown-section">
        <h2>Event Countdown</h2>
        <div className="countdown-timer">
          <FaRegClock className="clock-icon" />
          <span>Event starts in 12:34:56</span> {/* Implement dynamic countdown */}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-boxes">
        <div className="pricing-box">
          <h3>Standard Package</h3>
          <p>Join us for an exciting experience at an affordable price.</p>
          <p className="price">KSh 15,000</p>
          <ul>
            <li>
              <FaCheck className="tick-icon" /> All-access to workshops
            </li>
            <li>
              <FaCheck className="tick-icon" /> Networking sessions with industry leaders
            </li>
            <li>
              <FaCheck className="tick-icon" /> Free road trip essentials kit
            </li>
          </ul>
        </div>
        <div className="pricing-box">
          <h3>Premium Package</h3>
          <p>For those looking to upgrade their road trip experience with added perks.</p>
          <p className="price">KSh 25,000</p>
          <ul>
            <li>
              <FaCheck className="tick-icon" /> All Standard Package benefits
            </li>
            <li>
              <FaCheck className="tick-icon" /> VIP seating at workshops
            </li>
            <li>
              <FaCheck className="tick-icon" /> Exclusive networking dinner
            </li>
            <li>
              <FaCheck className="tick-icon" /> Personalized road trip guide
            </li>
          </ul>
        </div>
      </section>

      {/* Checkout Section */}
      <section className="checkout-section">
        <h2>Ready to Join the Adventure?</h2>
        <p>
          Secure your spot today and embark on an unforgettable journey. Choose
          the package that fits your needs and checkout securely via Paystack.
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
              <h3>Complete Your Registration</h3>
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
                <label htmlFor="event">Select Event</label>
                <select
                  id="event"
                  name="event"
                  value={formData.event}
                  onChange={handleEventChange}
                >
                  <option value="Pop-Up Event">KSh 15,000 - Standard Package</option>
                  <option value="Premium Event">KSh 25,000 - Premium Package</option>
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

export default PopUpEvents;
