import React from 'react';
import './HomePage.css';
import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="image-container">
        <img src="path_to_your_image.jpg" alt="My Image" />
      </div>
    </div>
  );
};

export default HomePage;
