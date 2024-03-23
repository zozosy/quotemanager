import React from 'react';
import { useLocation } from 'react-router-dom'; //ChatGPT refrence

const Home = () => {
  const location = useLocation();

  // Check if the current location matches the home route // refrence from Chatgpt
  const isHomePage = location.pathname === '/home';

  return (
    <div className="home-page">
      {isHomePage && (
        <div className="welcome-message">
          <h2>Welcome to InspireMe!</h2>
          <p>Discover inspiration, wisdom, and motivation with InspireMe.</p>
          <p>Explore a vast collection of quotes on various topics.</p>
          <p>Find the perfect words to uplift your spirits, inspire your creativity, and brighten your day.</p>
          <p>Start your journey of self-discovery and empowerment today!</p>
        </div>
      )}
    </div>
  );
};

export default Home;
