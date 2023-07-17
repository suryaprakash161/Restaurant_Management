import React from 'react';
import './Menu.css'; // Import your CSS file for styling

const Menu = () => {
  // Define your menu items
  const menuItems = [
    {
      name: 'Chicken Briyani',
      img: "anil-sharma-seJrQGuPJKw-unsplash (1).jpg",
      price: 'Chicken Briyani only at ₹200',
      description: ''
    }
  
    ,
    {
        name: 'Shakes',
        img: "clarissa-carbungco-uy9DJw9e_vs-unsplash.jpg",
        price: 'MilkShakes Starting at ₹150',
        description: ''
    },
    {
        name: 'Burgers',
        img: "ben-kim-JjzjBLmANVA-unsplash.jpg",
        price: 'Burgers Starting at ₹49',
        description: ''
    },
    {
        name: 'Chicken Thandoori',
        img: "markus-winkler-WHtVB-RiW2I-unsplash.jpg",
        price: 'Chicken thandoori only at ₹180',
        description: ''
      },
    {
        name: 'Deserts',
        img: "serghei-savchiuc-Qaruw62_kmM-unsplash.jpg",
        price: 'Frozen Deserts Starting at ₹100',
        description: ''
    }
    // Add more menu items as needed
  ];

  return (
    <div className="menu">
      <h1 className='hhh1'><center>Restaurant Menu</center></h1>
      {menuItems.map((item, index) => (
        
        <div className="menu-item" key={index}>
          <h2 className="item-name">{item.name}</h2>
          <img className="menu-image" src={item.img}/>
          <p className="item-price">{item.price}</p>
          <p className="item-description">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;