import { FaUserTie, FaThumbsUp, FaUsers, FaClock } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PaystackButton } from "react-paystack";
import "./styles/Landing.css"; 

const Landing = () => {

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
     useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        {
        question: "Is this bootcamp for beginners?",
        answer:
            "Yes! This bootcamp is designed for all skill levels, whether you’re new to LinkedIn or looking to take your profile to the next level.",
        },
        {
        question: "How much time do I need to commit each day?",
        answer: "Just 30-60 minutes a day is all you need to see results.",
        },
        {
        question: "What if I miss a live session?",
        answer:
            "All sessions will be recorded and available for replay, so you can catch up at your convenience.",
        },
        {
        question: "Can I really see results in 21 days?",
        answer:
            "Absolutely! With our step-by-step system, you’ll start seeing results within the first week.",
        },
    ];
    
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

    const benefits = [
        {
          icon: <FaUserTie className="benefit-icon" />,
          title: "Attract Recruiters & Clients",
          description: "Craft a profile that makes the right impression.",
        },
        {
          icon: <FaThumbsUp className="benefit-icon" />,
          title: "Create Engaging Content",
          description: "Post content that gets noticed and shared.",
        },
        {
          icon: <FaUsers className="benefit-icon" />,
          title: "Build Meaningful Connections",
          description: "Expand your network with the right people.",
        },
        {
          icon: <FaClock className="benefit-icon" />,
          title: "Save Time with Strategies",
          description: "Use proven methods to grow efficiently.",
        },
    ];
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <h4>21-Day LinkedIn Mastery Program</h4>
      <h1>Transform Your LinkedIn Profile </h1>
      <h2>into a Lead-Generating Machine in 21 Days</h2>
      <p>
      Learn the proven strategies to attract clients, grow your network, and land opportunities—even if you're starting from scratch.
      </p>


      <div className="tbt"> 
        <h2>Enrollment Closes Soon! Don’t Miss Your Chance to Master LinkedIn.</h2>
      </div>
      {/* Buttons */}
      <div className="landing-button-container">
      <h2>Join Now</h2>
      <button className="landing-pay-btn" onClick={() => setShowModal(true)}>
        Pay 2399KES
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
    </div>


      
      <div className="learn-moreinfo">
        <p>In just 21 days, learn simple and powerful strategies to master LinkedIn!</p>
        <Link to="/linkedinbootcamp" className="learn-more-btn">Learn More</Link>
      </div>
      {/* Four Boxes Section */}
      <div className="landing-box-container">
        <div className="landing-box">
          <h3><strong>Daily Lessons:</strong> 21 days of actionable lessons delivered straight to your inbox.</h3>
        </div>

        <div className="landing-box">
          <h3><strong>Live Q&A Sessions:</strong> Get your questions answered by LinkedIn experts in real-time.</h3>
        </div>

        <div className="landing-box">
          <h3><strong>Templates & Tools:</strong> Access to swipe files, checklists, and templates to save time.</h3>
        </div>

        <div className="landing-box">
          <h3><strong>Private Community:</strong> Network with like-minded professionals in our exclusive community.</h3>
        
        </div>
      </div>

      <div className="benefits-section">
      {/* Title and Description */}
      <h1>Why Join This LinkedIn Bootcamp?</h1>
      <p>
        In just 21 days, you'll learn how to optimize your profile, create high-engagement content, and grow your network with proven LinkedIn strategies.
      </p>

      {/* Benefits Grid */}
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-box">
            {benefit.icon}
            <div className="benefit-content">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="instructor-section">
      <h1>Meet Your Instructor</h1>
      
      {/* Video Section */}
      <div className="instructor-video">
        <iframe 
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
          title="Instructor Introduction"
          allowFullScreen
        ></iframe>
      </div>

      {/* Content Section */}
      <div className="instructor-content">
        <h1>Hey Dreamer, </h1>
        <p>
          I’m <strong>Miriam Maru</strong>, a LinkedIn strategist with over 10 years of experience 
          helping professionals grow their personal brands. I’ve helped 500+ clients land dream jobs, 
          attract clients, and grow their businesses using LinkedIn. 
        </p>
        <p>
          Now, I’m sharing my proven strategies in this 21-day bootcamp so you can achieve the same results.
        </p>
      </div>
    </div>

    <div className="faq-section">
      <h1>FAQs</h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? "open" : ""}`}
        >
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question} <span>{openIndex === index ? "−" : "+"}</span>
          </button>
          <div className="faq-answer">{faq.answer}</div>
        </div>
      ))}
    </div>
    </div>
 {/* Buttons */}
 <div className="landing-button-container">
        <h2>Join Now</h2>
        <button className="landing-pay-btn" onClick={() => setShowModal(true)}>Pay 2399KES</button>
      </div>
    </div>
    
  );
};

export default Landing;
