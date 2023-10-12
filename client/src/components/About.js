import React from 'react';
import { Link } from 'react-router-dom'
import { FaCalculator, FaChartLine, FaRProject, FaTasks, FaTeamspeak } from 'react-icons/fa';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2 className="about-us-title">JAY CONSTRUCTIONS</h2>
      <p className="about-us-description">
         <FaTeamspeak className='about-us-icon'/>
        Welcome to the JAY CONSTRUCTIONS, a cutting-edge platform that revolutionizes project estimation and management in the construction industry. Our mission is to simplify and streamline the estimation process, empowering construction professionals to make informed decisions and deliver successful projects.
      </p>
      <div className="about-us-features">
        <div className="feature">
          <i className="fas fa-calculator"><FaCalculator /></i>
          <h3>Accurate Estimations</h3>
          <p>Our advanced algorithms and data-driven approach ensure precise project estimations, helping you stay within budget and meet client expectations.</p>
        </div>
        <div className="feature">
          <i className="fas fa-tasks"><FaTasks /></i>
          <h3>Efficient Project Management</h3>
          <p>Manage your construction projects effectively with our intuitive dashboard, task tracking, team collaboration, and progress monitoring features.</p>
        </div>
        <div className="feature">
          <i className="fas fa-chart-line"><FaChartLine /></i>
          <h3>Data Analytics</h3>
          <p>Gain valuable insights into project performance, productivity, and profitability through our comprehensive data analytics and reporting capabilities.</p>
        </div>
      </div>
      <div className="about-us-cta">
        <p>Ready to transform your construction projects?</p> <i >
        <FaRProject className='cta-icon'/></i>
        <Link to="/Register" className='cta-button'>GET STARTED</Link>
   
      </div>
    </div>
  );
};

export default AboutUs;
