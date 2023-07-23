import React, { useState } from 'react';
import '../styles/Itinerary2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsletterPopup from '../components/NewsletterPopup';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';


function Itinerary2() {
    const [showSpinner, setShowSpinner] = useState(false);

    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
  

    const handlePopupOpen = () => {
      setShowPopup(true);
    };
  
    const handlePopupClose = () => {
      setShowPopup(false);
    };

    const handleBack = () => {
      const shouldGoBack = window.confirm('Are you sure you want to go back?');
      if (shouldGoBack) {
        navigate('/itinerary');
      }
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
    navigate('/itinerary3');
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
        <p className="promotion-text">Enjoy our latest promotion: 10$ for a detailed itinerary!</p>

        <h2 className="checkout-title">CHECKOUT</h2>
        <div className="price-container">
          <span className="price-label">Total price:</span>
          <span className="total-price">10.00$</span>
        </div>

        <p className="details-message">Please enter your details:</p>
        <p className="security-message">We collect this information to help combat fraud and keep your payment secure.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email-input">Email address:</label>
            <input
              type="email"
              id="email-input"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="country-input">Country:</label>
            <input
              type="text"
              id="country-input"
              className="form-control"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="postcode-input">Postcode:</label>
            <input
              type="text"
              id="postcode-input"
              className="form-control"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-button">Continue</button>
          {showSpinner && <Spinner />}
        </form>
      </div>
    </div>
  );
}

export default Itinerary2;
