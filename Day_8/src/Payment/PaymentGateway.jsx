import React, { useState } from 'react';
import './PaymentGateway.css';

const PaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [receiptData, setReceiptData] = useState(null);

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpirationDateChange = (e) => {
    setExpirationDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const generateReceipt = () => {
    const receipt = {
      cardNumber,
      expirationDate,
      amount,
      timestamp: new Date().toLocaleString(),
    };
    setReceiptData(receipt);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Perform payment processing logic here
    setTimeout(() => {
      // Simulate async processing
      console.log('Payment submitted:', { cardNumber, expirationDate, cvv, amount });
      setIsSubmitting(false);
      setPaymentStatus('success'); // Set the payment status to success
      generateReceipt(); // Generate the receipt
    }, 2000);
  };

  return (
    <div className="payment-gateway-container">
      <h2>Payment Gateway</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="1234 5678 9012 3456"
            maxLength="16"
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expirationDate">Expiration Date</label>
            <input
              type="text"
              id="expirationDate"
              value={expirationDate}
              onChange={handleExpirationDateChange}
              placeholder="MM/YY"
              maxLength="5"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={handleCvvChange}
              placeholder="123"
              maxLength="3"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter the amount"
            required
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
      {paymentStatus === 'success' && receiptData && (
        <div className="receipt">
          <h3>Receipt</h3>
          <p>Card Number: {receiptData.cardNumber}</p>
          <p>Expiration Date: {receiptData.expirationDate}</p>
          <p>Amount: {receiptData.amount}</p>
          <p>Timestamp: {receiptData.timestamp}</p>
          <p className="success-message">Payment Successfully Completed!</p>
        </div>
      )}
    </div>
  );
};

export default PaymentGateway;
