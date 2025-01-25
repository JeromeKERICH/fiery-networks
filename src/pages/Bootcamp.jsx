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
    package: "Basic Package",
    amount: 9900 * 100, // Default amount in kobo (multiplied by 100)
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
      selectedPackage === "Basic Package" ? 99 * 100 : 999 * 100; 
    setFormData((prev) => ({
      ...prev,
      package: selectedPackage,
      amount,
    }));
  };

  const handleSuccess = () => {
    // Redirect to WhatsApp group after payment
    window.location.href = "https://chat.whatsapp.com/your-group-link"; // Replace with your WhatsApp group link
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
          <h1>21-Day LinkedIn Mastery Bootcamp</h1>
          <p>
            Transform your LinkedIn profile and start attracting opportunities! This 21-day bootcamp will help you master LinkedIn like never before.
          </p>

          <p className="price">KES 999</p>
        </div>
        <div className="header-image">
          <img
            src="assets/link.jpg" // Replace with an actual image for Bootcamp
            alt="LinkedIn Mastery Bootcamp"
          />
        </div>
      </header>

      <div className="pricing-boxes">
        <div className="pricing-box">
            <h3>Week 1: Laying the Foundation</h3>
            <p>
              The first week is all about setting up your LinkedIn profile for success. You'll learn to make your profile stand out to recruiters and potential clients.
            </p>
            <ul>
              <li><FaCheck className="tick-icon" />Optimizing your profile headline and summary</li>
              <li><FaCheck className="tick-icon" />Building your first connections and growing your network</li>
              <li><FaCheck className="tick-icon" />Setting up a content strategy that speaks to your audience</li>
            </ul>
          </div>
          <div className="pricing-box">
            <h3>Week 2: Content Creation & Engagement</h3>
            <p>
              Week two focuses on creating content that drives engagement and helps establish you as a thought leader in your field.
            </p>
            <ul>
              <li><FaCheck className="tick-icon" />Crafting compelling posts that get noticed</li>
              <li><FaCheck className="tick-icon" />Engaging with your network through comments and messages</li>
              <li><FaCheck className="tick-icon" />Leveraging multimedia like videos and images to attract attention</li>
            </ul>
          </div>
          <div className="pricing-box">
            <h3>Week 3: Scaling & Advanced Growth</h3>
            <p>
              In the final week, we'll scale your efforts and help you leverage LinkedIn’s advanced features to maximize your growth and impact.
            </p>
            <ul>
              <li><FaCheck className="tick-icon" />Using LinkedIn's analytics to refine your strategy</li>
              <li><FaCheck className="tick-icon" />Building long-term relationships with influencers in your industry</li>
              <li><FaCheck className="tick-icon" />Mastering LinkedIn’s advanced tools for outreach and lead generation</li>
            </ul>
          </div>
        </div>
   

      {/* Checkout Section */}
      <section className="checkout-section">
        <h2>Join the 21-Day LinkedIn Mastery Bootcamp Today!</h2>
        <p>
          Don't miss out on this transformative opportunity to master LinkedIn and accelerate your career. Sign up now and start seeing results in just 21 days!
        </p>

        <button className="checkout-button" onClick={handleCheckout}>
          Get Started Now
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
                  <option value="Basic Package">Basic Package - KES999</option>
                  
                </select>
              </div>
              <PaystackButton
                className="pay-buttons"
                {...paystackConfig}
              >
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
