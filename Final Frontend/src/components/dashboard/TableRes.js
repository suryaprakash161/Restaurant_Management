// TableReservation.js
import React, { useState } from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import './TableRes.css'; // Import the external CSS for styling

// Action Types
const RESERVE_TABLE = 'RESERVE_TABLE';

// Action Creators
const reserveTable = (tableNumber, name) => ({
  type: RESERVE_TABLE,
  payload: { tableNumber, name },
});

// Reducer
const initialState = {
  tables: [
    { number: 1, reserved: false, name: '' },
    { number: 2, reserved: false, name: '' },
    { number: 3, reserved: false, name: '' },
    { number: 4, reserved: false, name: '' }
    // Add more tables as needed
  ],
};

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVE_TABLE:
      const { tableNumber, name } = action.payload;
      return {
        ...state,
        tables: state.tables.map((table) =>
          table.number === tableNumber ? { ...table, reserved: true, name } : table
        ),
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(reservationReducer);

// Table Reservation Component
const TableReservation = () => {
  const [tableNumber, setTableNumber] = useState('');
  const [name, setName] = useState('');
  const tables = useSelector((state) => state.tables);
  const dispatch = useDispatch();

  const handleReservation = () => {
    if (tableNumber && name) {
      dispatch(reserveTable(parseInt(tableNumber), name));
      setTableNumber('');
      setName('');
    }
  };

  return (
    <div className="reservation-container">
      <h1>Restaurant Table Reservation</h1>
      <div className="tables">
        {tables.map((table) => (
          <div key={table.number} className={`table ${table.reserved ? 'reserved' : ''}`}>
            Table {table.number}
            {table.reserved && <span className="reserved-by">Reserved by {table.name}</span>}
          </div>
        ))}
      </div>
      <div className="reservation-form">
        <input
          type="number"
          placeholder="Table Number"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleReservation}>Reserve</button>
      </div>
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <TableReservation />
  </Provider>
);

export default App;
