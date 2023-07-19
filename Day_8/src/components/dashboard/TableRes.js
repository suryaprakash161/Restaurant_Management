// ReservationForm.js
import React, { useState } from 'react';
import './TableRes.css'; // Import external CSS file
import { Link } from 'react-router-dom'; 

const TableRes = () => {
  const [name, setName] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [reservationTime, setReservationTime] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberOfGuestsChange = (event) => {
    setNumberOfGuests(event.target.value);
  };

  const handleReservationTimeChange = (event) => {
    setReservationTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process reservation form data here
    console.log('Name:', name);
    console.log('Number of guests:', numberOfGuests);
    console.log('Reservation time:', reservationTime);
  };

  return (
    <div className="reservation-form-container">
      <h2>Table Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="numberOfGuests">Number of Guests:</label>
          <input
            type="number"
            id="numberOfGuests"
            value={numberOfGuests}
            onChange={handleNumberOfGuestsChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reservationTime">Reservation Time:</label>
          <input
            type="time"
            id="reservationTime"
            value={reservationTime}
            onChange={handleReservationTimeChange}
            required
          />
        </div>
        <nav>
            <Link to="/Home">

        <button type="submit">Submit</button>
        </Link>
        </nav>
      </form>
    </div>
  );
};

export default TableRes;
