import React from 'react';
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h2 className="contact-us-title">CONTACT US </h2>
      <div className="contact-flex-container">
        <div className="contact-info">
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p className="contact-text">123 Construction Street, Cityville</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p className="contact-text">info@constructionestimator.com</p>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <p className="contact-text">+1 123-456-7890</p>
          </div>
        </div>
        <form className="contact-form">
          <textarea className="contact-message" placeholder="Your message"></textarea>
          <label htmlFor="your-name">Your Name:</label>
          <input type="text" id="your-name" className="contact-input" />
          <label htmlFor="your-email">Your Email:</label>
          <input type="email"  id="your-email" className="contact-input" placeholder="Your email" />
          <button className="contact-button" type="submit">Send Message</button>
        </form> 
      </div>
      <Link to="/" className="back-home-link">
        <i className="fas fa-arrow-left"></i>
        Back to Home
      </Link>
    </div>
  );
};

export default ContactUs;
