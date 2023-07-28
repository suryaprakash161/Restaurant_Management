import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';
import { Link } from 'react-router-dom';

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handlePaymentMethodChange = (method) => {
    setSelectedMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Perform payment processing logic here
    setTimeout(() => {
      // Simulate async processing
      console.log('Payment submitted:', selectedMethod);
      setIsSubmitting(false);

      if (selectedMethod === 'card') {
        // window.location.href = 'https://razorpay.com/';// Redirect to payment gateway page
       navigate('/payGate');
      } else if (selectedMethod === 'gpay') {
        window.location.href = 'https://pay.google.com'; // Redirect to Google Pay website
      } else if (selectedMethod === 'phonepe') {
        window.location.href = 'https://www.phonepe.com'; // Redirect to PhonePe website
      }
    }, 2000);
  };

  return (
    <div className="payment-gateway-container">
      <h2>Payment Type</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="payment-options">
          <label className={`payment-option ${selectedMethod === 'card' ? 'selected' : ''}`}>
            <input
              type="radio"
              value="card"
              checked={selectedMethod === 'card'}
              onChange={() => handlePaymentMethodChange('card')}
            />
            <img src="atm-card.png" alt="Card" style={{ height: '100px' }} />
            <p1>Debit/credit card</p1>
          </label>
          <label className={`payment-option ${selectedMethod === 'gpay' ? 'selected' : ''}`}>
            <input
              type="radio"
              value="gpay"
              checked={selectedMethod === 'gpay'}
              onChange={() => handlePaymentMethodChange('gpay')}
            />
            <img src="google-pay (1).png" alt="Google Pay" style={{ height: '80px' }} />
            <p1>Google Pay</p1>
          </label>
          <label className={`payment-option ${selectedMethod === 'phonepe' ? 'selected' : ''}`}>
            <input
              type="radio"
              value="phonepe"
              checked={selectedMethod === 'phonepe'}
              onChange={() => handlePaymentMethodChange('phonepe')}
            />
            <img src="payment.png" alt="PhonePe" style={{ height: '70px' }} />
            <p1>PhonePe</p1>
          </label>
        </div>
        <button type="submit" disabled={!selectedMethod || isSubmitting}>
          {isSubmitting ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
};

export default Payment;
