import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// import 'table.jpg';
const HomePage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="home-page">
      <nav className="navbar">
        <ul className="navbar-list">
        <nav>
        <Link to="/LoginPage" style={{textDecoration: 'none'}}>
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

          <nav>
<Link to="/About" style={{textDecoration:"none"}}>

          <li className="navbar-item">About</li>
</Link>
          </nav>

          <nav>
            <Link to="/feed" style={{textDecoration:"none"}}>
          <li className="navbar-item">Feedback</li>
          </Link>
          </nav>

          <nav>
            <Link to="/Customer" style={{textDecoration:"none"}}>
          <li className="navbar-item">StarCustomers</li>
          </Link>
          </nav>
      {/* <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-button">Search</button>
      </div> */}
      <div className='me'>
      <nav>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {/* <div className='image'> */}

        <img src="me2.png" alt='user' width="100px"height="100px" className='image'></img>
        {/* </div> */}
        
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>


<div>

        <nav>
          <Link to="/LoginPage">


        <MenuItem onClick={handleClose} style={{textDecoration:'none'}}> Logout</MenuItem>
          </Link>
        </nav>
</div>
      </Menu>
      </nav>
      </div>
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
            <Link to="/Reserved">
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
<nav>
<Link to="/Order">

            <button className='click-button'><b>Click here for Delivery</b> </button>
</Link>
</nav>

        </div>
      </div>
    </div>
  );
};

export default HomePage;