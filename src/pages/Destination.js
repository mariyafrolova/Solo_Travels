
import React, { useState, useEffect } from 'react';
import '../styles/Destination.css';
import NewsletterPopup from '../components/NewsletterPopup';
import { useNavigate } from 'react-router-dom';


function Destination() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };
  const handleDestinationClick = (destinationName) => {
    navigate(`/france`);
  };

  const destinations = [
    {
      name: 'France',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94u0EyhIYQ35WVzV0LSlxZ0Ozv9tMqfzewA&usqp=CAU',
      location: 'Europe',
      price: 1000,
    },
    {
      name: 'Iceland',
      image: 'https://i.natgeofe.com/n/7d59bf92-a500-4eab-81cb-997a38ce7403/iceland_NationalGeographic_2168279_3x4.jpg',
      location: 'Europe',
      price: 2000,
    },
    {
      name: 'Colombia',
      image: 'https://www.colombia-travels.com/wp-content/uploads/adobestock-266299444-1.jpeg',
      location: 'South America',
      price: 500,
    },
    {
      name: 'South Africa',
      image:
        'https://a.cdn-hotels.com/gdcs/production21/d763/c6e30184-0bb7-4e29-badd-ffdce4892419.jpg?impolicy=fcrop&w=800&h=533&q=medium',
      location: 'Africa',
      price: 1500,
    },
    {
      name: 'Indonesia',
      image: 'https://a.cdn-hotels.com/gdcs/production143/d1112/c4fedab1-4041-4db5-9245-97439472cf2c.jpg',
      location: 'Asia',
      price: 300,
    },
    {
      name: 'Australia',
      image: 'https://a.cdn-hotels.com/gdcs/production182/d1500/2c7a151b-5ebd-41d0-a0c3-e7e59eaf3c7f.jpg?impolicy=fcrop&w=800&h=533&q=medium',
      location: 'Oceania',
      price: 1200,
    },
    {
      name: 'Japan',
      image: 'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002487/img/basic/a0002487_main.jpg?20230106161700',
      location: 'Asia',
      price: 1300,
    },
    {
      name: 'Canada',
      image: 'https://www.commonwealthfund.org/sites/default/files/styles/countries_hero_desktop/public/country_image_Canada.jpg?h=f2fcf546&itok=tfGdKLUg',
      location: 'North America',
      price: 1150,
    },
    {
      name: 'Brazil',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGjP-9MrRJQsJIDOP8VlSuSDqL_9BZF8u0RA&usqp=CAU',
      location: 'South America',
      price: 700,
    },
    {
      name: 'Kenya',
      image: 'https://www.travelandleisure.com/thmb/yTXraNrnwAhrDXxesOyo_9hGglE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/safari-truck-giraffes-micato-safaris-SAFARIGUIDETIPS0721-2549bb165aa34dc193cb8b6f3958654b.jpg',
      location: 'Africa',
      price: 200,
    },
    {
      name: 'Thailand',
      image: 'https://a.cdn-hotels.com/gdcs/production17/d398/4fc00310-ba03-4511-8028-c29f05535f08.jpg?impolicy=fcrop&w=800&h=533&q=medium',
      location: 'Asia',
      price: 350,
    },
    {
      name: 'Italy',
      image: 'https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg',
      location: 'Europe',
      price: 900,
    },
  ];

  const [selectedFilters, setSelectedFilters] = useState({});
  const [sortedDestinations, setSortedDestinations] = useState([]);
  const [sortSelectValue, setSortSelectValue] = useState('default');

  useEffect(() => {
    const filteredDestinations = destinations.filter((destination) => {
      if (Object.keys(selectedFilters).length === 0) {
        return true;
      }

      return Object.values(selectedFilters).includes(destination.location);
}).filter((destination) =>
  destination.name.toLowerCase().includes(searchQuery.toLowerCase())
);

    let sortedDestinations = [...filteredDestinations];

    if (sortSelectValue === 'lowToHigh') {
      sortedDestinations.sort((a, b) => a.price - b.price);
    } else if (sortSelectValue === 'highToLow') {
      sortedDestinations.sort((a, b) => b.price - a.price);
    }

    setSortedDestinations(sortedDestinations);
  }, [selectedFilters, sortSelectValue, destinations]);

  const handleFilterChange = (event) => {
    const checkbox = event.target;
    const value = checkbox.value;

    if (checkbox.checked) {
      setSelectedFilters((prevFilters) => ({ ...prevFilters, [value]: value }));
    } else {
      setSelectedFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters };
        delete updatedFilters[value];
        return updatedFilters;
      });
    }
    setSearchQuery('');
  };

  const handleSortChange = (event) => {
    const sortValue = event.target.value;
    setSortSelectValue(sortValue);
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
                  CONTACT </a>
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

      <p className="header">EXPLORE A DESTINATION</p>

  <div className="search-container">
  <input
    type="text"
    placeholder="Search destinations..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
</div>


      <h4 style={{ fontFamily: 'Mulish', sansSerif: 'sans-serif' }}></h4>
      
      <label>
        <input type="checkbox" name="filter" value="Europe" onChange={handleFilterChange} />
              <span className="checkbox-label">Europe</span>
      </label>
      <label>
        <input type="checkbox" name="filter" value="Asia" onChange={handleFilterChange} />
              <span className="checkbox-label">Asia</span>
      </label>
      <label>
        <input type="checkbox" name="filter" value="Africa" onChange={handleFilterChange} />
              <span className="checkbox-label">Africa</span>
      </label>
      <label>
        <input type="checkbox" name="filter" value="North America" onChange={handleFilterChange} />
              <span className="checkbox-label">North America</span>
      </label>
      <label>
        <input type="checkbox" name="filter" value="South America" onChange={handleFilterChange} />
              <span className="checkbox-label">South America</span>
      </label>
      <label>
        <input type="checkbox" name="filter" value="Australia" onChange={handleFilterChange} />
              <span className="checkbox-label">Oceania</span>
      </label>

      <h5 style={{ fontFamily: 'Mulish', sansSerif: 'sans-serif' }}>Sort by Price:</h5>
      <select id="sort-select" onChange={handleSortChange} defaultValue="default">
        <option value="default">Default</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>

      <div id="destination-container" className="card-container">
        {sortedDestinations.map((destination) => (
          <div
            key={destination.name}
            className="card card-shadow destination-card"
            onClick={() => handleDestinationClick(destination.name)}
          >
            <img src={destination.image} alt={destination.name} className="destination-image" />
            <h3 className="destination-name">{destination.name}</h3>
            <p className="destination-location">Located in: {destination.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destination;
