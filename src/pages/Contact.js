import React, { useState } from 'react';
import '../styles/Contact.css';
import NewsletterPopup from '../components/NewsletterPopup';
import EmailPopup from '../components/EmailPopup';


import translationsEN from '../translations/en.json';
import translationsFR from '../translations/fr.json';

function Contact() {
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [language, setLanguage] = useState('en');
  const translations = language === 'fr' ? translationsFR : translationsEN;
  


  const handleNewsletterPopupOpen = () => {
    setShowNewsletterPopup(true);
    setShowEmailPopup(false);
  };

  const handleNewsletterPopupClose = () => {
    setShowNewsletterPopup(false);
  };

  const handleEmailPopupOpen = () => {
    setShowEmailPopup(true);
    setShowNewsletterPopup(false);
  };

  const handleEmailPopupClose = () => {
    setShowEmailPopup(false);
  };

  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
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

      <nav className="navbar navbar-expand-lg bg-color-danger custom-navbar navbar-text" role="navigation">
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
                  {translations.home}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/destination">
                  {translations.destination}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/itinerary">
                  {translations.itinerary}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">
                  {translations.blog}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/contact">
                  {translations.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="cta-container">
        <button className="cta-button" onClick={handleNewsletterPopupOpen} aria-label={translations.subscribe} aria-haspopup="dialog" aria-expanded={showNewsletterPopup}>
          {translations.subscribe}
        </button>
      </div>
      {showNewsletterPopup && <NewsletterPopup onClose={handleNewsletterPopupClose} />}

      <p className="header">{translations.contactUs}</p>

      <div className="h1">
        <h1 style={{ fontSize: '28px', fontFamily: 'Mulish, sans-serif' }}>{translations.workWithUs}</h1>
        <p style={{ marginTop: '25px', fontFamily: 'Mulish, sans-serif', fontWeight: 'lighter' }}>
          {translations.welcomeText1}
        </p>
        <p style={{ marginTop: '25px', fontFamily: 'Mulish, sans-serif', fontWeight: 'lighter' }}>
          {translations.welcomeText2}
        </p>
        <p style={{ marginTop: '25px', fontFamily: 'Mulish, sans-serif', fontWeight: 'lighter' }}>
          {translations.welcomeText3}
        </p>
        <p style={{ marginTop: '25px', fontFamily: 'Mulish, sans-serif', fontWeight: 'lighter' }}>
          {translations.welcomeText4}
        </p>
 
          <button className="button" onClick={handleEmailPopupOpen} aria-label={translations.getInTouch} aria-haspopup="dialog" aria-expanded={showEmailPopup}>{translations.getInTouch}</button>
    
      </div>
      {showEmailPopup && <EmailPopup onClose={handleEmailPopupClose} />}

      <footer>
        <div className="footer1">
          <div className="row">
            <div className="col-md-6">
              <p>123-456-7890</p>
              <p>Operating hours: 9-5 pm</p>
              <p>123 Rue de l'Aiglon, Gatineau, Canada</p>
            </div>
            <div className="col-md-6">
            <button className="language-button" onClick={() => changeLanguage('en')} aria-label="English">
                English
              </button>
              <button className="language-button1" onClick={() => changeLanguage('fr')} aria-label="French">
                French
              </button>
            </div>
          </div>
          </div>
      </footer>
    </div>
  );
}

export default Contact;
