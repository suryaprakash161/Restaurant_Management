import React, { useState } from 'react';
import './Order.css';
import { Link } from 'react-router-dom'; 

const Order= () => {
  const [location, setLocation] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle location submission, e.g., API call or further processing
    console.log('Selected location:', location);
  };

  return (
    <div className="location-container">
      <h1>Enter Your Delivery Location</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your location"
          value={location}
          onChange={handleLocationChange}
        />  

        <nav>
<Link to="/Fooddeli">
        <button type="submit">Go to Menu</button>
</Link>
        </nav>
      </form>

      <nav>
<Link to="/Redux">
      <p>Click me here</p>
</Link>
      </nav>

    
    </div>
  );
};

export default Order;
