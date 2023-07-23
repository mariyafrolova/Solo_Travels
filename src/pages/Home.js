
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NewsletterPopup from '../components/NewsletterPopup';
import '../styles/Home.css';

function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };
  return (
    <div>
      <header>
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />

        <title>Project 2</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          cross0rigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="styles.css" />

        

        <div className="title">
          <p className="custom-text">
            <span className="blue">Solo</span> <span className="green">Travels</span>
          </p>
        </div>
      </header>

      <nav className="navbar navbar-expand-lg bg-color-danger custom-navbar navbar-text ">
        <a className="navbar-brand" href="/">
          <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap" width="30" height="24" />
        </a>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/destination">DESTINATION</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/itinerary">ITINERARY</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">BLOG</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="cta-container">
        <button className="cta-button" onClick={handlePopupOpen}>
          Subscribe to our Newsletter
        </button>
      </div>


      <div className="carousel-container">
        <div id="carouselExample" className="carousel slide" data-bs-ride="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://www.intrepidtravel.com/adventures/wp-content/uploads/2017/11/Intrepid-Travel-iceland_jokulsarlon-glacier-lake.jpg" className="d-block w-100" alt="Image 1" />
            </div>
            <div className="carousel-item">
              <img src="https://www.edreams.com/blog/wp-content/uploads/sites/3/2018/11/solo-asia.jpg.webp" className="d-block w-100" alt="Image 2" />
            </div>
            <div className="carousel-item">
              <img src="https://www.usnews.com/object/image/00000185-e46e-d665-a5fd-e6ff584c0000/17-paris-stock.jpg?update-time=1674574714780&size=responsiveFlow640" className="d-block w-100" alt="Image 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {showPopup && <NewsletterPopup onClose={handlePopupClose} />}
        
    
      
        

      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>

      <p className="description">Empowering solo travelers worldwide.</p>

      <p className="description2">Discover, connect, and explore independently.</p>

      <p className="description3">Start your solo adventure today.</p>

      <a
        href="/destination"
        className="btn"
        style={{
          display: 'inline-block',
          padding: '10px 50px',
          backgroundColor: '#215F88',
          color: 'white',
          fontSize: '16px',
          fontFamily: '"Mulish", sans-serif',
          textDecoration: 'none',
          position: 'relative',
          top: '40px',
          marginLeft: '600px',
          marginBottom: '100px',
        }}
      >
        Choose a destination
      </a>

      <div className="popular-destinations">
        <h2>Popular Destinations</h2>
        <div className="destinations-container">
          <div className="destination">
            <img src="https://www.travelweek.ca/wp-content/uploads/2022/08/Chasing-the-Midnight-Sun-in-Iceland-Skolavordustigur_Inside-2.jpg" alt="Destination 1" />
            <p>Iceland</p>
          </div>
          <div className="destination">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmgD5DrSTsAPa3YMF4RB6bidE0wscQkxHYQ&usqp=CAU" alt="Destination 2" />
            <p>Costa Rica</p>
          </div>
          <div className="destination">
            <img src="https://www.axisbank.com/images/default-source/progress-with-us_new/what-to-do-in-switzerland.jpg" alt="Destination 3" />
            <p>Switzerland</p>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer">
          <div className="row">
            <div className="col-md-6">
              <p>123-456-7890</p>
              <p>Operating hours: 9-5 pm</p>
              <p>123 Rue de l'Aiglon, Gatineau, Canada</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
