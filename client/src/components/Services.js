import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom'
import { FaCalculator, FaChartLine, FaCog, FaShieldAlt, FaTasks, FaUsers } from 'react-icons/fa'

const OurServices = () => {
  return (
    <div className="our-services-container">
      <h2 className="our-services-title">Our Services</h2>
      <div className="services-grid">
        <div className="service">
          <i className="fas fa-calculator"><FaCalculator /></i>
          <h3 className="service-title">Estimation</h3>
          <p className="service-description">Accurate project cost estimation using advanced algorithms and data analysis.</p>
        </div>

        <div className="service">
          <i className="fas fa-chart-line"><FaChartLine /></i>
          <h3 className="service-title">Analytics</h3>
          <p className="service-description">Comprehensive data analytics to gain insights into project performance and profitability.</p>
        </div>

        <div className="service">
          <i className="fas fa-tasks"><FaTasks /></i>
          <h3 className="service-title">Project Management</h3>
          <p className="service-description">Efficient project management tools for task tracking, collaboration, and progress monitoring.</p>
        </div>
        <div className="service">
          <i className="fas fa-cog"><FaCog /></i>
          <h3 className="service-title">Customization</h3>
          <p className="service-description">Tailor the system to your needs with flexible customization options and modules.</p>
        </div>
        <div className="service">
          <i className="fas fa-users"><FaUsers /></i>
          <h3 className="service-title">Team Collaboration</h3>
          <p className="service-description">Seamlessly collaborate with your team, assign tasks, and communicate effectively.</p>
        </div>
        <div className="service">
          <i className="fas fa-shield-alt"><FaShieldAlt /></i>
          <h3 className="service-title">Security</h3>
          <p className="service-description">Ensure the safety of your data and projects with advanced security measures.</p>
        </div>
        <div className="homepage-link">
        <Link to="/" className="link-button">Go to Homepage</Link>
      </div>
      </div>
    </div>
  );
};

export default OurServices;
