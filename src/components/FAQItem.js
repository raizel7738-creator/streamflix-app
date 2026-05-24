import React, { useState, useRef } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); // Ref to get the height of the content

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={toggleFAQ}>
        {question}
        <span className={`faq-icon ${isOpen ? 'open' : ''}`}>+</span>
      </button>
      
      {/* This container's max-height will be animated */}
      <div
        className="faq-answer-container"
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
        }}
      >
        {/* This inner div provides the padding for the text */}
        <div className="faq-answer-content">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
