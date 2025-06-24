import React, { useState } from 'react';
import './Accordion.css'; // ใส่สไตล์แยก

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-container">
      <button
        className="accordion-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▸</span>
        {title}
      </button>

      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;