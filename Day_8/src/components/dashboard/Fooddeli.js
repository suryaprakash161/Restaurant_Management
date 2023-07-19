import React, { useState } from 'react';
import './Fooddeli.css';


const Fooddeli = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleFoodSelection = (food) => {
    setSelectedFood(food);
  };

  const placeOrder = () => {
    setOrderPlaced(true);
  };

  return (
    <div className="food-delivery">
      <h1>Place your Order</h1>
      {orderPlaced ? (
        <div className="order-confirmation">
          <p>Your order for {selectedFood} has been placed!</p>
          <p>Enjoy your meal!</p>
        </div>
      ) : (
        <div className="menu">
          <h2>Menu</h2>
          <ul>
            <li
              className={selectedFood === 'Chicken Briyani' ? 'selected' : ''}
              onClick={() => handleFoodSelection('Chicken Briyani')}
            >
              Chicken Briyani
            </li>
            <li
              className={selectedFood === 'Shakes' ? 'selected' : ''}
              onClick={() => handleFoodSelection('Shakes')}
            >
              Shakes
            </li>
            <li
              className={selectedFood === ' Burgers' ? 'selected' : ''}
              onClick={() => handleFoodSelection(' Burgers')}
            >
              Burgers
            </li>

            <li
              className={selectedFood === 'Chicken Thandoori' ? 'selected' : ''}
              onClick={() => handleFoodSelection('Chicken Thndoori')}
            >
              Chicken Thandoori
            </li>

            <li
              className={selectedFood === 'Deserts' ? 'selected' : ''}
              onClick={() => handleFoodSelection('Deserts')}
            >
              Deserts
            </li>

            
          </ul>
          <button
            className="order-button"
            onClick={placeOrder}
            disabled={!selectedFood}
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Fooddeli;
