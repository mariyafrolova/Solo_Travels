import React, { useState } from 'react';
import '../styles/Itinerary.css';
import NewsletterPopup from '../components/NewsletterPopup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';




function Itinerary() {
  const [showSpinner, setShowSpinner] = useState(false);


  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const [selectedDestination, setSelectedDestination] = useState(' ');
  const [selectedBudget, setSelectedBudget] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState(1);

  const handleDestinationChange = (event) => {
    setSelectedDestination(event.target.value);
  };

  const handleBudgetChange = (event) => {
    setSelectedBudget(parseInt(event.target.value));
  };

  const handleDurationChange = (event) => {
    setSelectedDuration(parseInt(event.target.value));
  };

  const generateItinerary = () => {
    setShowSpinner(true); 


  setTimeout(() => {
    setShowSpinner(false);
    navigate('/itinerary2');
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
    <div className="background-container">
    <img className="background-image" src="https://images.prismic.io/caaneo-website/779a8691-5666-4a14-adee-fc0aa160bdfd_iStock-1125762717.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&rect=0%2C691%2C2162%2C676&w=3840&h=1200" alt="Background" />
      <div className="destination-selection">
        <label htmlFor="destination-input">Enter your destination:</label>
        <input
          type="text"
          id="destination-input"
          placeHolder="Type your destination..."
        />
      </div>

      <div className="budget-range">
        <label htmlFor="budget-slider">Select your budget range:</label>
        <input type="range" id="budget-slider" min="0" max="5000" step="10" onChange={handleBudgetChange} />
        <span id="selected-budget">{selectedBudget}$</span>
      </div>

      <div className="duration-range">
        <label htmlFor="duration-slider">Select the duration of your trip:</label>
        <input type="range" id="duration-slider" min="0" max="4" step="1" onChange={handleDurationChange} />
        <span id="selected-duration">{selectedDuration} week(s)</span>
      </div>

      <div className="destination-selection">
        <label htmlFor="destination-input">Enter your main interests:</label>
        <input
          type="text"
          id="destination-input"
          placeHolder="Type your main interests..."
        />
      </div>
      
      <div className="generate-itinerary">
        <button id="generate-itinerary-btn" onClick={generateItinerary}>
          Generate Itinerary
        </button>
        {showSpinner && <Spinner />}

      </div>
    </div>
    </div>
  );
}

export default Itinerary;
