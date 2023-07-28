import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Define Redux actions
const ADD_ORDER = 'ADD_ORDER';

// Define Redux reducer
const initialState = {
  orders: [],
};

function orderReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    default:
      return state;
  }
}

// Create Redux store
const store = createStore(orderReducer);

// Define a React component
const redux = () => {
  const handleAddOrder = () => {
    const order = {
      id: Math.random().toString(36).substr(2, 9), // Generate a unique ID
      name: 'Pizza',
      quantity: 2,
    };
    store.dispatch({ type: ADD_ORDER, payload: order });
  };

  return (
    <Provider store={store}>
      <div>
        <h1>Restaurant Management System</h1>
        <button onClick={handleAddOrder}>Add Order</button>
      </div>
    </Provider>
  );
};

export default redux;
