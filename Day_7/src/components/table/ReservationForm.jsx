import React, { useState } from 'react';

const ReservationForm = () => {
  const [name, setName] = useState('');
  const [partySize, setPartySize] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Reservation submitted');
    console.log('Name:', name);
    console.log('Party Size:', partySize);
    console.log('Date:', date);
    console.log('Time:', time);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="partySize">Party Size:</label>
      <input
        type="number"
        id="partySize"
        value={partySize}
        onChange={(e) => setPartySize(e.target.value)}
      />

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="time">Time:</label>
      <input
        type="time"
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ReservationForm;
