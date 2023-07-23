import React, { useState } from 'react';
import '../styles/Blog.css';
import NewsletterPopup from '../components/NewsletterPopup';

function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const blogPosts = [
    {
      id: 1,
      title: 'The Many Benefits of Solo Travelling',
      image: 'https://d1bv4heaa2n05k.cloudfront.net/user-images/1531729141976/shutterstock-1030050604_main_1531729223400.jpeg',
      content: 'Discover the joys of solo travel: self-discovery, freedom, and experiences await!',
      author: 'John Doe',
    },
    {
      id: 2,
      title: 'Wanderlust on a Shoestring: Be a Master of Budgeting for Solo Travels',
      image: 'https://www.transitionsabroad.com/listings/travel/articles/images/solo-travel-woman-hiking-pix.jpg',
      content: 'Unlock the secrets: Wanderlust without breaking the bank!',
      author: 'Jane Smith',
    },
    {
      id: 3,
      title: 'Finding Courage in Solitude: Overcoming Challenges as a Solo Traveler',
      image: 'https://solotravelerworld.com/wp-content/uploads/2022/09/solo-travelers-1.jpg',
      content: 'Discover the empowering journey of a solo traveler: Conquer the challenges and find strengths in solitude.',
      author: 'Alex Johnson',
    },
    {
      id: 4,
      title: 'The Art of Disconnect: Rejuvenating Your Mind, Body, and Soul Through Solo Travels',
      image: 'https://deih43ym53wif.cloudfront.net/solo-traveller-shutterstock_623123408_509518df42.jpeg',
      content: 'Rejuvenate mind, body & soul through solo travel: Embrace the art of disconnecting.',
      author: 'Alex Johnson',
    },
    {
      id: 5,
      title: 'Off the Beaten Path: Uncovering Hidden Gems as a Solo Traveler',
      image: 'https://files.tvo.org/files/s3fs-public/styles/full_width_1280/public/article-thumbnails/woman%20travelling%20alone.JPG?itok=udMzYteW',
      content: 'Uncover hidden gems as a solo traveler: Embark on an off the beaten path adventure.',
      author: 'Alex Johnson',
    },
    {
      id: 6,
      title: 'Embracing Solitude: A Solo Traveler\'s Guide to Exploration',
      image: 'https://res.cloudinary.com/dfcsmghw4/image/upload/v1650898202/articles/article2022-04-25%2014:50:01%20%2B0000893.jpg',
      content: 'Unlocking the Self: A Solo Traveler\'s Journey to Inner Exploration.',
      author: 'Alex Johnson',
    },
  ];

  const filteredBlogPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
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
                <a className="nav-link" href="/itinerary">
                  ITINERARY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/blog">
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

      <p className="header">OUR BLOG</p>

      <div className="search-container">
        <form action="/search" method="GET">
          <input
            type="text"
            name="query"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
      
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>

      {filteredBlogPosts.length === 0 ? (
        <p>No articles found for your search.</p>
      ) : (
        filteredBlogPosts.map((post) => (
          <div className="blog-post" key={post.id}>
            <img src={post.image} alt={post.title} />
            <div className="post-details">
              <a href={`/article${post.id}`}>
                <h2>{post.title}</h2>
              </a>
              <p>{post.content}</p>
              <p className="author">Author: {post.author}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Blog;
