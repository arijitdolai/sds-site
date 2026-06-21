import { useState } from 'react';

const faqs = [
  { question: "What is the Society for Data Science (SDS)?", answer: "SDS is a student-led organization dedicated to fostering a community of data enthusiasts, providing resources, and hosting events focused on machine learning, AI, and analytics." },
  { question: "Who can join the club and what are the requirements?", answer: "Any student with an interest in data science can join! There are no strict prerequisites, just a willingness to learn and participate." },
  { question: "What is the motto and vision of SDS?", answer: "Our vision is to bridge the gap between academic learning and industry application in the field of Data Science." },
  { question: "How can I participate in upcoming hackathons and workshops?", answer: "We announce all our events on our platform and social media. You can register via the links provided in our Event announcements." },
  { question: "Does SDS offer project mentorship or research collaborations?", answer: "Yes! We frequently connect experienced members with beginners for mentorship and organize group projects to build practical skills." }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="card">
        {faqs.map((faq, index) => (
          <div key={index} className="accordion-item" style={{ borderBottom: index === faqs.length - 1 ? 'none' : '' }}>
            <button 
              className="accordion-header" 
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
            >
              <span style={{ paddingRight: '1rem' }}>{faq.question}</span>
              <span style={{ 
                transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)', 
                transition: 'transform 0.3s ease',
                color: 'var(--color-primary)'
              }}>
                ▼
              </span>
            </button>
            <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
              <p style={{ marginTop: '0.5rem', lineHeight: '1.6' }}>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
