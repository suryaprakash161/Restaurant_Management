// CustomerList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Customer.css'

const Customer = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch customer data from the backend API
    axios.get('http://localhost:2020/cus/get') // Replace '/api/customers' with your actual API endpoint URL
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching customer data:', error);
      });
  }, []);

  return (
    <div style={{paddingTop:"10%"}}>
      <h2><center>Star Customers</center></h2>
      <table>
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Times Visited</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.cust_id}>
              <td>{customer.cust_id}</td>
              <td>{customer.name}</td>
              <td>{customer.times_Visited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customer;
