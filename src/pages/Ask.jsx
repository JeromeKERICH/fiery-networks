import { useState } from "react";
import "./styles/Ask.css"; // Importing external CSS file

const Ask = () => {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [expanded, setExpanded] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      setSubmitted(true);
      setQuestion("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const toggleAnswer = (index) => {
    setExpanded((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "How do I optimize my LinkedIn profile?",
      answer: "Focus on a strong headline, keyword-rich summary, and engaging content.",
    },
    {
      question: "What's the best way to attract recruiters on LinkedIn?",
      answer: "Engage with their posts, share insightful content, and build a strong network.",
    },
    {
      question: "How can I get better at social media marketing?",
      answer: "Understand your audience, create a content calendar, and engage consistently.",
    },
  ];

  return (
    <div className="ask-container">
      <h1 className="ask-title">Pick My Brain - Ask Me Anything!</h1>
      <p className="ask-subtitle">
        Have a burning question about LinkedIn, social media, or digital marketing? Ask away and I'll do my best to help!
      </p>

      {/* Question Form */}
      <form onSubmit={handleSubmit} className="ask-form">
        <textarea
          className="ask-textarea"
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        ></textarea>
        <button className="ask-submit" type="submit">
          Submit Question
        </button>
        {submitted && <p className="ask-confirmation">✅ Question submitted successfully!</p>}
      </form>

      {/* Past Questions & Answers */}
      <h2 className="faq-title">Past Questions & Answers</h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className={`faq-item ${expanded === index ? "open" : ""}`}>
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {item.question}
              <span className="faq-arrow">{expanded === index ? "▲" : "▼"}</span>
            </div>
            <div className="faq-answer" style={{ display: expanded === index ? "block" : "none" }}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>

      {/* Social Media Links */}
      <div className="social-container">
        <p className="social-title">Join the Conversation</p>
        <div className="social-links">
          <a href="https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=miriammaru-ghostwriter-copywriter-contentwriter" className="social-link linkedin">LinkedIn</a>
          <a href="https://wa.me/254729466141" className="social-link whatsapp">WhatsApp Group</a>
        </div>
      </div>
    </div>
  );
};

export default Ask;
