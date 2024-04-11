import React, { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaFacebookF, FaLinkedin } from 'react-icons/fa';
import './contact.css';
import { Link } from 'react-router-dom'

const mapContainerStyle = {
  width: '100%',
  height: '400px',
  size: 'center',
};
const center = {
  lat: -34.397,
  lng: 150.644
}
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Simulate form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to the server
    console.log(formData);
    setFormSubmitted(true);
    // Reset form (optional)
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <LoadScript 
      googleMapsApiKey='YOUR_API_KEY'>
      <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={10}
      ></GoogleMap>
      </LoadScript>
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <div className="contact-info">
          <div className="contact-method">
            <FaPhone className="contact-icon" />
            <p>+254 110 179220</p>
          </div>
          <div className="contact-method">
            <FaEnvelope className="contact-icon" />
            <p>support@jayconstructions.com</p>
          </div>
          <div className="contact-method">
            <FaMapMarkerAlt className="contact-icon" />
            <p>Kiamyko, Kenya</p>
          </div>
        </div>
        {formSubmitted ? (
          <div className="thank-you-message">
            Thank you for contacting us. We will get back to you as soon as possible!
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Your Name" 
              name="name" 
              required 
              value={formData.name}
              onChange={handleChange}
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              name="email" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
            <textarea 
              placeholder="Your Message" 
              name="message" 
              required 
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        )}
        <div className="social-media-links">
          Follow us:
          <a href="https://twitter.com/wudan_champ"><FaTwitter /></a>
          <a href="https://www.facebook.com/jeff.elchapa"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/in/jeff-michael-26115223a/"><FaLinkedin /></a>
         
        </div>
        <Link to="/" className='cta-button'>HOME</Link>
      </div>
    </div>
  );
};

export default ContactUs;
