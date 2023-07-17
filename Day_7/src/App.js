import React from 'react';
import {Routes, Route} from 'react-router-dom';
// import FrontPage from './components/frontPage/frontPage';
import LoginPage from './components/login/LoginPage';
import RegisterForm from './components/registration/RegisterForm';
import HomePage from './components/dashboard/HomePage';
import ReservationForm from './components/table/ReservationForm';
import Contact from './components/dashboard/Contact';
import Menu from './components/dashboard/Menu';
import Fooddeli from './components/dashboard/Fooddeli';
import About from './components/dashboard/About';
import Order from './components/dashboard/Order';
import './components/dashboard/Menu';
import TableRes from './components/dashboard/TableRes';
import Takeaway from './components/dashboard/Takeaway';
import OConfirm from './components/dashboard/OConfirm';



const App=() => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Log' element={<LoginPage/>} />
          <Route path='/Sign' element={<RegisterForm/>}/>
          <Route path='/Home' element={<HomePage/>}/>
          {/* <Route path='/Home1' element={<HomePage/  >}/> */}
          <Route path='/fp' element={<RegisterForm/>}/>
          <Route path='/li' element={<LoginPage/>} />
          <Route path='/cont' element={<Contact/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/Fooddeli'element={<Fooddeli/>}/>
          <Route path='/About' element={<About/>}/>

          <Route path='/Order' element={<Order/>}/>
          <Route path='/MenuO' element={<Menu/>}/>
          <Route path='/Reserved' element={<TableRes/>}/>
          {/* <Route path='/k'element={<HomePage/>}/> */}

          {/* <Route path='/table' element={<ReservationForm/>} /> */}



          <Route path='/Hm' element={<HomePage/>}/>
          <Route path='/OConfirm' element={<OConfirm/>}/>

        </Routes>
        {/* <HomePage/> */}
    </div>
  );
}

export default App;