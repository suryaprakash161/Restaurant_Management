import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import 'table.jpg';
const HomePage = () => {
  return (
    <div className="home-page">
      <nav className="navbar">
        <ul className="navbar-list">
        <nav>
        <Link to="/log" style={{textDecoration: 'none'}}>
         <li className="navbar-item">Login</li>
        </Link>
        </nav>
        <nav>
        <Link to="/Sign" style={{textDecoration: 'none'}}>
         <li className="navbar-item">Signup</li>
        </Link>
        </nav>
        {/* <li className="navbar-item">SignUp</li> */}
          {/* <li className="navbar-item">Home</li> */}
          <li className="navbar-item">About</li>

          <nav>
            <Link to="/Cont">
          <li className="navbar-item">Feedback</li>
          </Link>
          </nav>
      {/* <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-button">Search</button>
      </div> */}
        </ul>
      </nav>

      <svg data-testid="AccountCircle"></svg>
      <h1 style={{color:'Red'}}>SSS Restaurant</h1>
      <div className="featured">
        {/* <img className="image" alter='tab'></img> */}
        <div className='img-card3'>
            <div height='300px' width='380px' alt='tab'/>
            <h2 style={{color: 'white'}}>Table Reservation</h2>
            <nav>
            <Link to="/table" style={{textDecoration: 'none',textAlign:'center'}}>
            <button className='click-button'><b>Click here to reserve table</b></button>
            </Link>
            </nav>    
        </div>
            
      {/* <div className="featured"> */}
        {/* <img className="image" alter='tab'></img> */}
        <div className='img-card2'>
            <div  height='300px' width='380px' alt='tab'/>
            <h2>Menu </h2>
            <nav>
              <Link to="/Menu">

            <button className='click-button'><b>Click here to view menu</b></button>
              </Link>

            </nav>

        </div>
      {/* </div> */}
      {/* <div className="featured"> */}
        <div className='img-card'>
            <div height='300px' width='380px' alt='tab'/>
            <h2 style={{color:'white'}}>Order</h2>

            <div className='TOrder'>
            <nav>
              <Link to="/Fooddeli">
            <button className='click-button'><b>Click here to Order</b></button>
            </Link>
            </nav>
            </div>
            
            </div>
      {/* </div> */}
      {/* <div className="featured"> */}
        <div className='img-card4'>
            <div height='300px' width='380px' alt='tab'/>
            <h2>Delivery Service</h2>

            <button className='click-button'><b>Click here for Delivery</b> </button>

        </div>
      </div>
    </div>
  );
};

export default HomePage;