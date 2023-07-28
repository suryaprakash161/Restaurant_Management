// OrderApp.js
import React, { useState } from 'react';
import './OrderApp.css'; // Import the external CSS for styling
import { Link } from 'react-router-dom'; 

const OrderApp = () => {
  const [userLocation, setUserLocation] = useState(null);

  const handlePlaceOrder = () => {
    // Replace this with the actual logic for placing an order
    alert('You will be redirected to Menu Page');
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className="order-container">
      <h1>Place Your Order</h1>
      <div className="location-info">
        {userLocation ? (
          <div>
            <p>Your current location:</p>
            <p>Latitude: {userLocation.latitude}</p>
            <p>Longitude: {userLocation.longitude}</p>
          </div>
        ) : (
          <button onClick={handleGetLocation}>Get My Location</button>
        )}
      </div>

      <nav>
        <Link to="/Fooddeli">


      <button className="order-button" onClick={handlePlaceOrder}>
        Place Order
      </button>
        </Link>
      </nav>
    </div>
  );
};

export default OrderApp;
