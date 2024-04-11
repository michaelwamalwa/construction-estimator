import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../features/cartSlice';
import './Checkout.css';

export default function Checkout() {
  const { cartTotalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

   const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Submit order:', data);
    // Clear the cart and navigate to the payment page after form submission
    dispatch(clearCart());
    navigate('/store/payment'); // Navigate to the payment page instead of products page
  };

  const handleClearCartAndNavigate = () => {
    dispatch(clearCart());
    navigate('/store/products'); // Assuming this navigates to the main shopping page
  };

  const handleBackToShopping = () => {
    navigate('/store/products'); // Navigate back to the products page without clearing the cart
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="checkout-container"
    >
      <h2>Checkout</h2>
      <motion.form 
        onSubmit={handleSubmit(onSubmit)}
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <div className="form-group">
          <label htmlFor="customerName">Name</label>
          <input {...register('customerName', { required: true })} />
          {errors.customerName && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input {...register('address', { required: true })} />
          {errors.address && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input {...register('email', { required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>
        {/* Display cartTotalAmount here */}
        <div className="total-amount">
            
          <p>Total Amount: KES {cartTotalAmount}</p>

        </div>
        <div className="buttons">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="submit-btn"
            type="submit"
          >
            Place Order
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cancel-btn"
            type="button"
            onClick={handleClearCartAndNavigate}
          >
            Cancel Order
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="submit-btn"
            type="button"
            onClick={handleBackToShopping}
          >
            Back to Shopping
          </motion.button>
        </div>
      </motion.form>
    </motion.div>
  );
}
