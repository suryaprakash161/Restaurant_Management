// MenuView.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'; // Import the external CSS for styling

const Menu = () => {
  // Sample menu data (replace with your actual menu items)
  const menuItems = [
    {
      id: 1,
      name: 'Briyani',
      price: '150₹',
      imageSrc: 'anil-sharma-seJrQGuPJKw-unsplash (1).jpg',
      link: ' /Components/Payment/Payment', // Replace with your desired route for this menu item
    },
    {
      id: 2,
      name: 'Burger',
      price: '120₹',
      imageSrc: 'ben-kim-JjzjBLmANVA-unsplash.jpg',
      link: '/menu/pizza', // Replace with your desired route for this menu item
    },
    {
      id: 3,
      name: 'Pasta',
      price: '110₹',
      imageSrc: 'penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg',
      link: '/menu/burger', // Replace with your desired route for this menu item
    },
    {
      id: 4,
      name: 'cake',
      price: '250₹',
      imageSrc: 'sam-moghadam-khamseh-yxZSAjyToP4-unsplash.jpg',
      link: '/menu/burger', // Replace with your desired route for this menu item
    },
    {
      id: 5,
      name: 'Noodles',
      price: '110₹',
      imageSrc: 'orijit-chatterjee-wEBg_pYtynw-unsplash.jpg',
      link: '/menu/burger', // Replace with your desired route for this menu item
    },
    {
      id: 6,
      name: 'Meals',
      price: '90₹',
      imageSrc: 'shashi-chaturvedula-oYvZ-stypr4-unsplash.jpg',
      link: '/menu/burger', // Replace with your desired route for this menu item
    },
    {
      id: 7,
      name: 'Veg Roll',
      price: '80₹',
      imageSrc: 'anil-sharma-3Je9IRHdFjs-unsplash.jpg',
      link: '/menu/burger', // Replace with your desired route for this menu item
    },
    {
      id: 8,
      name: 'Dosa',
      price: '55₹',
      imageSrc: 'anil-sharma-S6WyKp5jdkQ-unsplash.jpg',
      link: '/menu/burger', // Replace with your desired route for this menu item
    },
    {
      id: 9,
      name: 'Egg Pasta',
      price: '160₹',
      imageSrc: 'amirali-mirhashemian-ZSukCSw5VV4-unsplash.jpg',
      link: '/menu/burger', // Replace with your desired route for this menu item
    }
    // Add more menu items as needed
  ];

  return (
    <div className="menu-container">
      <h1>Restaurant Menu</h1>
      <div className="menu-items">
        {menuItems.map((item) => (
          <Link key={item.id} to={item.link} className="menu-item">
            <img src={item.imageSrc} alt={item.name} />
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>{item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
