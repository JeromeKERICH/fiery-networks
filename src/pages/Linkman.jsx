import React, { useState, useEffect} from "react";
import { FaCheck } from "react-icons/fa";
import { PaystackButton } from "react-paystack";
import "./styles/Linkman.css";

const LinkedInManagement = () => {

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
      selectedPackage === "Basic Package" ? 9900 * 100 : 19900 * 100; // Amount in kobo
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
          <h1>Elevate Your LinkedIn Presence Today!</h1>
          <p>
            We create compelling content that grabs attention, drives meaningful
            conversations, and establishes you as a trusted expert in your
            industry on LinkedIn.
          </p>
        </div>
        <div className="header-image">
          <img
            src="assets/link.jpg" // Replace with an actual image
            alt="LinkedIn Ghostwriting & Management"
          />
        </div>
      </header>

      {/* Pricing Section */}
      <div className="pricing-boxes">
        <div className="pricing-box">
          <h3>Basic Package</h3>
          <p>Perfect for individuals starting out on LinkedIn.</p>
          <p className="price">$99</p>
          <ul>
            <li>
              <FaCheck className="tick-icon" /> 5 Custom Posts
            </li>
            <li>
              <FaCheck className="tick-icon" /> Profile Optimization
            </li>
            <li>
              <FaCheck className="tick-icon" /> 1 Strategy Session
            </li>
            <li>
              <FaCheck className="tick-icon" /> Audience Growth Insights
            </li>
          </ul>
        </div>
        <div className="pricing-box">
          <h3>Premium Package</h3>
          <p>Great for professionals or businesses aiming for rapid growth.</p>
          <p className="price">$199</p>
          <ul>
            <li>
              <FaCheck className="tick-icon" /> 10 Custom Posts
            </li>
            <li>
              <FaCheck className="tick-icon" /> Advanced Profile Optimization
            </li>
            <li>
              <FaCheck className="tick-icon" /> 2 Strategy Sessions
            </li>
            <li>
              <FaCheck className="tick-icon" /> Audience Growth Insights
            </li>
          </ul>
        </div>
      </div>

      {/* Checkout Section */}
      <section className="checkout-section">
        <h2>Ready to Transform Your LinkedIn Presence?</h2>
        <p>
          Secure your spot today and let us start building your brand. Choose
          the package that fits your needs and check out securely via your
          preferred method.
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
                  <option value="Basic Package">$99 - Basic Package</option>
                  <option value="Premium Package">$199 - Premium Package</option>
                </select>
              </div>
              <PaystackButton
                className="pay-buttons" {...paystackConfig}>PayNow</PaystackButton>
          
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default LinkedInManagement;
