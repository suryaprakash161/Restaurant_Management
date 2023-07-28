import React, { useState } from 'react';
import './PaymentPortal.css'; // Import the external CSS for styling

const PaymentPortal = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardNameChange = (e) => {
    setCardName(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 2000);
  };

  return (
    <div className="payment-container">
      <h1>Payment Portal</h1>
      {paymentSuccess ? (
        <div className="payment-success">
          <p>Payment successful! Thank you for your purchase.</p>
        </div>
      ) : (
        <form onSubmit={handlePaymentSubmit}>
          <div className="form-group">
            <label>Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="Enter your card number"
              required
            />
          </div>
          <div className="form-group">
            <label>Card Holder Name</label>
            <input
              type="text"
              value={cardName}
              onChange={handleCardNameChange}
              placeholder="Enter card holder name"
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Expiry Date</label>
              <input
                type="text"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input
                type="text"
                value={cvv}
                onChange={handleCvvChange}
                placeholder="CVV"
                required
              />
            </div>
          </div>
          <button type="submit" className="pay-button">
            Pay Now
          </button>
        </form>
      )}
    </div>
  );
};

export default PaymentPortal;
