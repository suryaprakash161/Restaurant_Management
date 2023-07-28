import React, { useState } from 'react';
import './Fooddeli.css';
import { Link } from 'react-router-dom'; 


const Fooddeli = () => {
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleFoodSelection = (food) => {
    // Check if the food is already selected
    if (selectedFoods.includes(food)) {
      setSelectedFoods(selectedFoods.filter((item) => item !== food)); // Deselect the food
    } else {
      setSelectedFoods([...selectedFoods, food]); // Select the food
    }
  };

  const placeOrder = () => {
    setOrderPlaced(true);
  };

  const foodItems = [
    'Chicken Briyani',
    'Shakes',
    'Burgers',
    'Chicken Thandoori',
    'Deserts',
    // Add more food items here
  ];

  return (
    <div className="food-delivery">
      <h1>Place your Order</h1>
      {orderPlaced ? (
        <div className="order-confirmation">
          <p>Your order for:</p>
          <ul>
            {selectedFoods.map((food) => (
              <li key={food}>{food}</li>
            ))}
          </ul>
          <p>has been placed!</p>
          <p>Enjoy your meal!</p>
          
      <nav>
<Link to="/Pay"style={{textDecoration: 'none'}}>
      
<button type="submit">Select Payments</button>

</Link>
      </nav>
        </div>
      ) : (
        <div className="menu">
          <h2>Menu</h2>
          <ul>
            {foodItems.map((food) => (
              <li
                key={food}
                className={selectedFoods.includes(food) ? 'selected' : ''}
                onClick={() => handleFoodSelection(food)}
              >
                {food}
              </li>
            ))}
          </ul>
          <button
            className="order-button"
            onClick={placeOrder}
            disabled={selectedFoods.length === 0}
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Fooddeli;
