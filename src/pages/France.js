import React, { useState } from 'react';
import '../styles/France.css'
import NewsletterPopup from '../components/NewsletterPopup';
import { useNavigate } from 'react-router-dom';

function France() {
  const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
  

    const handlePopupOpen = () => {
      setShowPopup(true);
    };
  
    const handlePopupClose = () => {
      setShowPopup(false);
    };

    const handleBack = () => {
        navigate('/destination');
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
                <a className="nav-link active" aria-current="page" href="/destination">
                  DESTINATION
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/itinerary">
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
      <p className="header">FRANCE</p>
      <button className="back-button" onClick={handleBack}>
          Back
        </button>
    <div>
    <img src="https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/018/837/slideshow/f5dcea49bded9c3c268b041fdec1f4f2/france-loire-villandry-chateau.jpg" alt="Header Image" className="image"/>
      
      <p style={{ marginTop: '25px', fontFamily: 'Mulish, sans-serif', fontWeight: "lighter" }}>Best time of the year to go: June</p>
      <p style={{ marginTop: '25px', fontFamily: 'Mulish, sans-serif', fontWeight: "lighter" }}>Popular cities to visit: Paris, Nice, Lyon</p>
      <p style={{ marginTop: '25px', fontFamily: 'Mulish, sans-serif', fontWeight: "lighter" }}>Hidden gems: Aix-en-Provence, Strasbourg, Toulouse</p>
      <p style={{ marginTop: '25px', fontFamily: 'Mulish, sans-serif', fontWeight: "lighter" }}>Budget for a week (minimum): 1000$</p>
      <p style={{ marginTop: '25px', fontFamily: 'Mulish, sans-serif', fontWeight: "lighter", marginBottom: "40px" }}>Official language: French</p>

      <h2 style={{ fontSize: '28px', fontFamily: 'Mulish, sans-serif' }}>Accommodations</h2>
      <div>
        <a href="https://www.french.hostelworld.com/st/auberges-de-jeunesse/europe/france/?source=ppc_gooads_brand_dsk_search_ds_fr_row&network=g&campaign_id=15922181203&adgroup_id=134921342120&criteria_id=kwd-379892871006&creative_id=582300489279&location_physical_id=9000459&location_interest_id=2250&adposition=null&uniqueclickID=2343292715183745920&sub_keyword=hostelworld%20france&sub_ad=e&sub_publisher=ADW&gclsrc=aw.ds&gclid=Cj0KCQjwzdOlBhCNARIsAPMwjbxOBGLjocUtiYMh2-RlFNZc4ak_ececbmiS4bRNsC2w1zj6iq7UiF0aAjd7EALw_wcB">
          <img src="https://bstatic.com/xdata/images/xphoto/1182x887/58907485.jpg?k=c6a6c7ff39b320e1ff919b6f21f06a1aacd64efcc3b3c925b123309fbfac9875&o=?size=S" alt="Hostel"className="activity-image" />
          <p style={{ marginTop: '25px', fontFamily: 'Mulish, sans-serif', fontWeight: "lighter" }}>Hostel</p>
        </a>
        <a href="https://www.expedia.ca/Hotel-Search?destination=France&endDate=2023-08-02&gad=1&gclid=Cj0KCQjwzdOlBhCNARIsAPMwjbyQkSjlI_iXw4yojLM2mP33HncSevc_iw3Sf63KaJWnQiBfs5TiYmwaAs07EALw_wcB&locale=en_CA&regionId=59&semcid=CA.UB.GOOGLE.DT-c-EN.HOTEL&semdtl=a111848862125.b1129891308534.g1aud-1665158934460%3Akwd-38943390.e1c.m1Cj0KCQjwzdOlBhCNARIsAPMwjbyQkSjlI_iXw4yojLM2mP33HncSevc_iw3Sf63KaJWnQiBfs5TiYmwaAs07EALw_wcB.r181e7891e80012cbd12b6bd422fa28735c014751b3ef3b7c9e0fde84887bf3ef0.c1.j19000459.k1.d1618082407555.h1e.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&siteid=4&sort=RECOMMENDED&startDate=2023-08-01&theme=&useRewards=false&userIntent=">
          <img src="https://www.franceeiffel.com/usermedia/photo-635978177168175008-1.jpg?dummy=0&crop=True&w=1100&h=735" alt="Hotel"className="activity-image" />
          <p style={{ marginTop: '25px', fontFamily: 'Mulish, sans-serif', fontWeight: "lighter" }}>Hotel</p>
        </a>
        <a href="https://fr.airbnb.ca/a/stays/France?c=.pi0.pk193019855_9522533255&localized_ghost=true&gclid=Cj0KCQjwzdOlBhCNARIsAPMwjbwTB-LPXYDQAiNzy5nkvFsSxNeVFa17_TGggbz0tKaTq7qhdPwP-mEaAnJeEALw_wcB">
          <img src="https://media.cntraveller.com/photos/62612d1155bc897043337b2b/3:2/w_1200,h_800,c_limit/22260481-airbnb-sof.jpg" alt="RBnB"className="activity-image" />
          <p style={{ marginTop: '25px', fontFamily: 'Mulish, sans-serif', fontWeight: "lighter" }}>RBnB</p>
        </a>
      </div>

      <h2 style={{ fontSize: '28px', fontFamily: 'Mulish, sans-serif', marginTop:"70px" }}>Activities</h2>
      <div>
        <a href="https://www.tripadvisor.com/Attractions-g187070-Activities-zft11295-France.html">
          <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/07/Palace-of-Versailles.jpg" alt="Indoor activities" className="activity-image" />
          <p style={{ marginTop: '25px', fontFamily: 'Mulish, sans-serif', fontWeight: "lighter" }}>Indoor activities</p>
        </a>
        <a href="https://www.lonelyplanet.com/articles/best-outdoor-activities-france">
          <img src="https://img.theculturetrip.com/wp-content/uploads/2015/12/france-76949_960_720.jpg" alt="Outdoor activities"className="activity-image" />
          <p style={{ marginTop: '25px', fontFamily: 'Mulish, sans-serif', fontWeight: "lighter" }}>Outdoor activities</p>
        </a>
      </div>

      <h2 style={{ fontSize: '28px', fontFamily: 'Mulish, sans-serif', marginTop:"70px" }}>Transport</h2>
      <div>
        <a href="https://www.rome2rio.com/?gclid=Cj0KCQjwzdOlBhCNARIsAPMwjbwL7r5ivsB6lRD4t51ogBLONCMXQ0TogtGftE0YAqLeGqVHSlsXQOQaAnwCEALw_wcB">
          <img src="https://play-lh.googleusercontent.com/a024hUcWexzK5buEeu7tXevB3vEWxzDzfZ7TLpXzBPXFdFB3mwGHFUdz0IOhVXO-1Q" alt="Rome 2 Rio"className="activity-image" />
          <p style={{ marginTop: '25px', fontFamily: 'Mulish, sans-serif', fontWeight: "lighter" }}>Rome 2 Rio</p>
        </a>
      </div>
    </div>
    </div>
  );
}

export default France;
