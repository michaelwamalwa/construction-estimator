import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import './login.css';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    // Simple validation check (can be expanded)
    return email.length > 0 && password.length > 0;
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setLoginStatus("Please fill in all fields correctly.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/login", { email, password });
      const { data } = response;

      if (data.message) {
        setLoginStatus(data.message);
      } else {
        localStorage.setItem("user", JSON.stringify(data));
        navigate(data.role === 'user' ? '/userdash' : '/manager');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginStatus('Failed to login. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='login-page'>
    <section>
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <h2>LOGIN HERE</h2>
          <div className='input-box'>
            <span className='icon'><FaEnvelope /></span>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              name="email"
              placeholder="Email"
            />
          </div>
          <div className='input-box'>
            <span className='icon'><FaLock /></span>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              name="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
          <div className='register-link'>
            <p>Don't have an account?</p>
            <Link to="/Register">NEW USER</Link>
          </div>
          {loginStatus && (
            <div style={{ fontSize: '15px', textAlign: 'center', marginTop: '20px', color: 'red' }}>
              {loginStatus}
            </div>
          )}
        </form>
      </div>
     
    </section>
    </div>
  );
}
