import React, { useState } from 'react';
import './Takeaway.css'; // Import your CSS file

const Takeaway = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (item) => {
    const updatedItems = [...selectedItems];
    const existingItem = updatedItems.find((selectedItem) => selectedItem.name === item.name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      item.quantity = 1;
      updatedItems.push(item);
    }

    setSelectedItems(updatedItems);
  };

  const handleRemoveItemClick = (item) => {
    const updatedItems = selectedItems.filter((selectedItem) => selectedItem !== item);
    setSelectedItems(updatedItems);
  };

  const handleIncrementQuantity = (item) => {
    const updatedItems = [...selectedItems];
    const selectedItem = updatedItems.find((selectedItem) => selectedItem.name === item.name);
    selectedItem.quantity += 1;

    setSelectedItems(updatedItems);
  };

  const handleDecrementQuantity = (item) => {
    const updatedItems = [...selectedItems];
    const selectedItem = updatedItems.find((selectedItem) => selectedItem.name === item.name);

    if (selectedItem.quantity > 1) {
      selectedItem.quantity -= 1;
    } else {
      const updatedItems = selectedItems.filter((selectedItem) => selectedItem !== item);
      setSelectedItems(updatedItems);
    }

    setSelectedItems(updatedItems);
  };

  const menuItems = [
    { name: 'Burger', image: '/images/burger.jpg', price: 8.99 },
    { name: 'Pizza', image: '/images/pizza.avif', price: 10.99 },
    { name: 'Fries', image: '/images/fries.jpg', price: 3.99 },
    { name: 'Salad', image: '/images/salad.jpg', price: 6.99 },
    { name: 'Sushi', image: '/images/sushi.jpg', price: 12.99 },
    { name: 'Pasta', image: '/images/pasta.jpg', price: 9.99 },
  ];

  return (
    <div className="food-menu-container">
      <h2>Food Menu</h2>
      <div className="menu-items">
        {menuItems.map((menuItem, index) => (
          <div
            key={index}
            className="menu-item"
            onClick={() => handleItemClick(menuItem)}
          >
            <img src={menuItem.image} alt={menuItem.name} />
            <p>{menuItem.name}</p>
            <p>${menuItem.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="selected-items">
        <h3>Selected Items:</h3>
        {selectedItems.length === 0 ? (
          <p>No items selected</p>
        ) : (
          <ul>
            {selectedItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price.toFixed(2)}
                <div className="quantity-controls">
                  <button onClick={() => handleDecrementQuantity(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrementQuantity(item)}>+</button>
                </div>
                <button onClick={() => handleRemoveItemClick(item)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button type="submit">Submit</button>
    </div>
  );
};

export default Takeaway;