import React, { useState } from 'react';
import '../styles/Itinerary4.css';
import NewsletterPopup from '../components/NewsletterPopup';
import { useNavigate } from 'react-router-dom';

function Itinerary4() {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

  const handleBack = () => {
    navigate('/home');
  };
  

    const handlePopupOpen = () => {
      setShowPopup(true);
    };
  
    const handlePopupClose = () => {
      setShowPopup(false);
    };

  return (
    <div>
      <header>
        <div className="title">
          <p className="custom-text">
            <span className="blue">Solo</span> <span className="green">Travels</span>
          </p>
        </div>
      </header>

      <nav className="navbar navbar-expand-lg bg-color-danger custom-navbar navbar-text">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
              alt="Bootstrap"
              width="30"
              height="24"
            />
          </a>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/destination">
                  DESTINATION
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/itinerary">
                  ITINERARY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="cta-container">
        <button className="cta-button" onClick={handlePopupOpen}>
          Subscribe to our Newsletter
        </button>
      </div>
      {showPopup && <NewsletterPopup onClose={handlePopupClose} />}
      <p className="header">PLAN YOUR ITINERARY</p>
      <button className="back-button" onClick={handleBack}>
          Return to Home Page
        </button>

      <div className="content-container">
        <h2 className="confirmation-title">Confirmation</h2>
        <p className="confirmation-message">
          Thank you for your order! Your itinerary has been successfully booked.
        </p>

        <div className="order-details">
          <p className="order-number">
            Order Number: <span className="order-number-value">123456</span>
          </p>
          <p className="total-amount">
            Total: <span className="total-amount-value">10.00$</span>
          </p>
        </div>

        <p className="receipt-message">
          A receipt has been sent to your email address. Please check your inbox for the receipt.
        </p>

        <p className="itinerary-message">
          Your itinerary details will be sent to your email address. If you have any questions or need further assistance,
          please contact us at <span className="contact-email">solo@travels.com</span>.
        </p>

        <p className="satisfaction-guarantee">
          We strive to provide the best service to our customers. If you are not satisfied with your itinerary,
          please contact us within 30 days for a refund.
        </p>
      </div>
    </div>
  );
}

export default Itinerary4;
