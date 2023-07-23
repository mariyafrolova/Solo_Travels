import React, { useState } from 'react';
import '../styles/Newsletter.css';

const NewsletterPopup = ({ onClose }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
 
    setEmail('');
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="newsletter-popup">
      <div className="newsletter-content">
        <h2>Subscribe to our Newsletter</h2>
        <p>Stay updated with the latest solo travel news, tips, and destinations.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        <button className="close-button" onClick={handleClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default NewsletterPopup;
