import React, { useState } from 'react';

function EmailPopup({ onClose }) {
    const [to, setTo] = useState('solo@travels.com');
    const [from, setFrom] = useState('');
    const [message, setMessage] = useState('');
  
    const handleToChange = (e) => {
      setTo(e.target.value);
    };
  
    const handleFromChange = (e) => {
      setFrom(e.target.value);
    };
  
    const handleMessageChange = (e) => {
      setMessage(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      console.log('To:', to);
      console.log('From:', from);
      console.log('Message:', message);
      onClose();
    };
  
    return (
      <div className="email-popup">
        <div className="email-popup-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
          <h2>Write an Email</h2>
          <div className="form-group">
            <label htmlFor="to">To:</label>
            <input type="text" id="to" value={to} onChange={handleToChange} disabled />
          </div>
          <div className="form-group">
            <label htmlFor="from">From:</label>
            <input type="text" id="from" value={from} onChange={handleFromChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" value={message} onChange={handleMessageChange} />
          </div>
          <button onClick={handleSubmit}>Send</button>
        </div>
      </div>
    );
  }
  export default EmailPopup;

  