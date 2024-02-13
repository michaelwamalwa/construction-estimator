import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock, FaUser, FaPhone, FaEnvelope, FaGlassWhiskey } from 'react-icons/fa';
import './register.css';
import axios from 'axios';

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [registerStatus, setRegisterStatus] = useState("");
  const [data, setData] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
    role: ''
  });

  useEffect(() => {
    if (registerStatus === "ACCOUNT CREATED SUCCESSFULLY") {
      setTimeout(() => {
        navigate('/login');
      }, 4000);
    }
  }, [registerStatus, navigate]);

  const handleInput = (e) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios.post("http://localhost:5000/register", data)
      .then(res => {
        setIsLoading(false);
        setRegisterStatus(res.data.message || "ACCOUNT CREATED SUCCESSFULLY");
      })
      .catch(error => {
        setIsLoading(false);
        // Handle error
      });
  };

  if (registerStatus === "ACCOUNT CREATED SUCCESSFULLY") {
    return (
      <div className='register-page'>
        <div className='success-message'>
          <h2>Registration Successful!</h2>
          <p>Redirecting to Login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='register-page'>
      {isLoading && <div>Loading...</div>}
      <div className='container'>
        <div className='form-box'>
          <form onSubmit={handleSubmit}>
            <h2>REGISTER</h2>
            <div className='input-box'>
              <span className='icon'><FaUser /></span>
              <input type="text" onChange={handleInput} name="username" placeholder="username" />
            </div>
            <div className='input-box'>
              <span className='icon'><FaPhone /></span>
              <input type="text" onChange={handleInput} name="phone" placeholder="phone" />
            </div>
            <div className='input-box'>
              <span className='icon'><FaEnvelope /></span>
              <input type="email" onChange={handleInput} name="email" placeholder="email" />
            </div>
            <div className='input-box'>
              <span className='icon'><FaLock /></span>
              <input type="password" onChange={handleInput} name="password" placeholder="password" />
            </div>
            <div className='input-box'>
              <span className='icon'><FaGlassWhiskey /></span>
              <input type="text" onChange={handleInput} name="role" placeholder="role" />
            </div>
            <div className='button'>
              <input type="submit" className='btn' value="Register" />
            </div>
            <div className='link-container'>
              <Link to="/login">LOGIN HERE</Link>
              <Link to="/">HOME</Link>
            </div>
            <h1>{registerStatus}</h1>
          </form>
        </div>
      </div>
    </div>
  );
}
