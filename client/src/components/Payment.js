import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './payment.css';

export default function Payment() {
  const { cartTotalAmount } = useSelector((state) => state.cart);
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const navigate = useNavigate();

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Replace with your backend endpoint
      const response = await axios.post('http://localhost:5000/api/payment', { amount: cartTotalAmount, phone });
      setIsLoading(false);
      // Handle response based on your backend implementation
      if (response.data.success) {
        setPaymentStatus('Payment initiated. Please complete the payment on your phone.');
        // Optionally, navigate to a confirmation page or handle success scenario
      } else {
        setPaymentStatus('Payment failed. Please try again.');
      }
    } catch (error) {
      setIsLoading(false);
      setPaymentStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div className="payment-container">
      <h2>Complete Your Payment</h2>
      <img src="https://codetribe.co.ke/wp-content/uploads/2020/12/MPESA-API-Integration-Services-kenya.jpg" alt="M-Pesa Logo" className="mpesa-logo" />

      <form onSubmit={handlePayment}>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter M-Pesa phone number"
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Processing...' : 'Pay with M-Pesa'}
        </button>
      </form>
      {paymentStatus && <p>{paymentStatus}</p>}
    </div>
  );
}
