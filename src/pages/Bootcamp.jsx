import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { PaystackButton } from "react-paystack";
import "./styles/Linkman.css";

const LinkedInBootcamp = () => {
  useEffect(() => {
    // Reset scroll position to top on every route change
    window.scrollTo(0, 0);
  }, []);
  
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const [showModal, setShowModal] = useState(false);

  const amount = 2399 * 100; // Paystack uses kobo

  const handleSuccess = (response) => {
    console.log("Payment Success:", response);

    // WhatsApp Redirection
    const message = `Hello, I have successfully made a payment of 2399 KES. Here are my details:\n\nName: ${user.name}\nEmail: ${user.email}\nPhone: ${user.phone}\nTransaction ID: ${response.reference}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/254729466141?text=${encodedMessage}`; 

    window.location.href = whatsappLink; // Redirect to WhatsApp

    setShowModal(false); // Close modal after payment
  };

  const componentProps = {
    email: user.email,
    amount,
    currency: "KES",
    publicKey,
    text: "Complete Payment",
    onSuccess: handleSuccess,
    onClose: () => alert("Payment was not completed"),
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
        <h2>Join the 21-Day LinkedIn Mastery Bootcamp Today For 2399/= KSH Only!</h2>
        <p>
          Don't miss out on this transformative opportunity to master LinkedIn and accelerate your career. Sign up now and start seeing results in just 21 days!
        </p>
      

        {/* Buttons */}
        
        <button className="checkout-button" onClick={() => setShowModal(true)}>
          Join Now
        </button>
        {showModal && (
          <div className="landing-modal-overlay">
            <div className="landing-modal-content">
              <button className="landing-close-btn" onClick={() => setShowModal(false)}>
                &times;
              </button>
              <h3>Complete Your Payment</h3>
              <p>Enter your details below to proceed with payment. Upon successful payment, you’llbe redirected. Thank you</p>
              <div className="landing-input-group">
                <label>Name</label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </div>
              <div className="landing-input-group">
                <label>Email</label>
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div className="landing-input-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                />
              </div>
              <PaystackButton className="paystack-btn" {...componentProps} />
              </div>
          </div>
        )}
      </section>
  </div>

  );
};
export default LinkedInBootcamp;
