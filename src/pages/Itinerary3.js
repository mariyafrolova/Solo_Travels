import React, { useState } from 'react';
import '../styles/Itinerary3.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsletterPopup from '../components/NewsletterPopup';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';


function Itinerary3() {
    const [showSpinner, setShowSpinner] = useState(false);

    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleBack = () => {
      const shouldGoBack = window.confirm('Are you sure you want to go back?');
      if (shouldGoBack) {
        navigate('/itinerary2');
      }
    };
  

    const handlePopupOpen = () => {
      setShowPopup(true);
    };
  
    const handlePopupClose = () => {
      setShowPopup(false);
    };

  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [postcode, setPostcode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSpinner(true); 


  setTimeout(() => {
    setShowSpinner(false);
    
    console.log('Form submitted:', email, country, postcode);
    navigate('/itinerary4');
}, 2000);
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
      <nav className="navbar navbar-expand-lg bg-color-danger custom-navbar navbar-text ">
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
          Back
        </button>

      <div className="content-container">
        

        <h2 className="checkout-title">CHECKOUT</h2>
        <div className="price-container">
          <span className="price-label">Total price:</span>
          <span className="total-price">10.00$</span>
        </div>

        <p className="details-message">Pay by card below:</p>
        <p className="security-message">We collect this information to help combat fraud and keep your payment secure.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="card-number-input">Card Number:</label>
            <input
              type="text"
              id="card-number-input"
              className="form-control"
              placeholder="xxxx xxxx xxxx xxxx"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cardholder-name-input">Cardholder Name:</label>
            <input
              type="text"
              id="cardholder-name-input"
              className="form-control"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="expiration-date-input">Expiration Date:</label>
            <input
              type="text"
              id="expiration-date-input"
              className="form-control"
              placeholder="MM/YY"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="security-code-input">Security Code / CVV:</label>
            <input
              type="text"
              id="security-code-input"
              className="form-control"
              placeholder="XXX"
              required
            />
          </div>
          <button type="submit" className="submit-button">Pay now</button>
          {showSpinner && <Spinner />}

        </form>
      </div>
    </div>
  );
}

export default Itinerary3;
