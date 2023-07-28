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
import redux from './components/dashboard/redux';
import Payment from './Payment/Payment';
import ReceiptPage from './Payment/ReceiptPage';
import OrderApp from './components/dashboard/OrderApp';
import Customer from './components/dashboard/Customer';
import Feedback from './components/dashboard/feedback';
import PaymentGateway from './Payment/PaymentGateway';









const App=() => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/LoginPage' element={<LoginPage/>} />
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
          <Route path='/Redux' element={<redux/>}/>
          {/* <Route path='/k'element={<HomePage/>}/> */}
          <Route path='/OR'element={<OConfirm/>}/>

          {/* <Route path='/table' element={<ReservationForm/>} /> */}



          <Route path='/Hm' element={<HomePage/>}/>
          <Route path='/OConfirm' element={<OConfirm/>}/>

          <Route path="/Pay" element={<Payment/>}/>

          <Route path='/Location' element={<OrderApp/>}/>
          <Route path='/Customer' element={<Customer/>}/>

          <Route path='/PayGate' element={<PaymentGateway/>}/>
          <Route path='/Reci'element={<ReceiptPage/>}/>
          <Route path='/feed'element={<Feedback/>}/>


        

        </Routes>
        {/* <HomePage/> */}
    </div>
  );
}

export default App;