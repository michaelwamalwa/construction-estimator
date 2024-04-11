import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalculator, FaChartLine, FaProjectDiagram, FaTasks, FaTree, FaRobot, FaVrCardboard } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';
import { Md3DRotation } from 'react-icons/md';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='about-page'>
      <div className="about-us-container">
        <h2 className="about-us-title">JAY CONSTRUCTIONS</h2>
        <p className="about-us-description">
          <FaTree className='about-us-icon' />
          Welcome to JAY CONSTRUCTIONS, a pioneering platform that revolutionizes project estimation and management in the construction industry with state-of-the-art technology.
        </p>
        <div className="about-us-features">
          <div className="feature">
            <Md3DRotation />
            <h3>Interactive 3D Models</h3>
            <p>Explore projects with interactive 3D models, offering a comprehensive understanding from every angle.</p>
          </div>
          <div className="feature">
            <FaRobot />
            <h3>AI Chatbot</h3>
            <p>Get instant support and project estimations from our AI-powered assistant, enhancing your planning process.</p>
          </div>
          <div className="feature">
            <FaVrCardboard />
            <h3>Virtual Reality Tours</h3>
            <p>Immerse yourself in VR tours of our past and future projects for a unique pre-construction visualization experience.</p>
          </div>
          <div className="feature">
            <FaCalculator />
            <h3>Accurate Estimations</h3>
            <p>Utilize advanced algorithms for precise project estimations, ensuring budget adherence and client satisfaction.</p>
          </div>
          <div className="feature">
            <FaTasks />
            <h3>Efficient Project Management</h3>
            <p>Streamline your project management with our intuitive tools, designed for effective collaboration and oversight.</p>
          </div>
          <div className="feature">
            <FaChartLine />
            <h3>Advanced Analytics</h3>
            <p>Leverage detailed analytics for insightful project performance assessments and data-driven decision-making.</p>
          </div>
          <div className="feature">
            <GiBrain />
            <h3>Smart Contracts</h3>
            <p>Experience secure and automated transactions with blockchain-based smart contracts for reliable project milestones fulfillment.</p>
          </div>
        </div>
        <div className="about-us-cta">
          <p>Ready to transform your construction projects?</p>
          <FaProjectDiagram className='cta-icon' />
          <Link to="/register" className='cta-button'>GET STARTED</Link>
          <Link to="/" className='cta-button'>HOME</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
