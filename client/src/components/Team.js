import React from 'react';
import { Link } from 'react-router-dom'
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Keith Brody',
      position: 'CEO and Founder',
      description: 'Keith is the visionary behind Construction Estimator System. With his strong leadership and passion for innovation, he has driven the company to new heights. He brings a wealth of experience in the construction industry and is committed to revolutionizing project estimation.',
      image: require('../images/pope.jpg'),
    },
    {
      name: 'Oliver Carswell',
      position: 'Associate Director',
      description: 'Oliver is an integral part of our team, overseeing key operations and ensuring seamless project management. His expertise in construction planning and execution has contributed to the success of numerous projects. He is dedicated to delivering high-quality results.',
      image: require('../images/oliver.jpg'),
    },
    {
      name: 'Vaas Montenegro',
      position: 'Tech Department',
      description: 'Vaas is a talented tech professional who leads our innovative technology department. With his deep knowledge of software development and data analytics, he drives the development of cutting-edge solutions for project estimation and management.',
      image: require('../images/vaas.jpeg'),
    },
    {
      name: 'Hoyt Voyker',
      position: 'Head of Human Resources',
      description: 'Hoyt is responsible for managing our human resources department. With his expertise in talent acquisition and employee development, he ensures that our team is composed of skilled professionals who are empowered to succeed. He plays a key role in fostering a positive work environment.',
      image: require('../images/hoyt.jpg'),
    },
  ];

  return (
    <div className="team-container">
      <h2 className="team-title">MEET THE TEAM</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} className="member-image" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-position">{member.position}</p>
            <p className="member-description">{member.description}</p>
          </div>
        ))}
      </div>
      <div className="join-us-container">
        <h2 className="join-us-title">Want to Join Us?</h2>
        <p className="join-us-description">We're always looking for talented individuals to join our team. If you're passionate about construction, innovation, and making a difference, we'd love to hear from you.</p>
        <Link to="/careers" className="join-us-button">View Careers</Link>
<p><Link to="/" className="join-us-button">
        <i className="fas fa-arrow-left"></i>
        Back to Home
      </Link>
      </p>
      </div>
     
    </div>
  );
};

export default Team;
