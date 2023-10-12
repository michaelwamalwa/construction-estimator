import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import './style.css';
import axios from 'axios';

export default function Login() {
 // Define state variables using the useState hook
  const [data, setData] = useState({
    email: '',
    password: '',
  })
const [loginStatus, setLoginStatus] = useState("");
  // Access the navigate function from the useNavigate hook
const navigate = useNavigate();
  const handleInput = (e) => {
    setData(prev => ({...prev,[e.target.name]: e.target.value,}))
  }
  // Event handler for input change
  const handleSubmit = (e) => {
    e.preventDefault();
    // Make a POST request to the login endpoint
    axios.post("http://localhost:5000/login", data )
    .then(res => {
      if(res.data.message) {
        setLoginStatus(res.data.message)
       
      } else {
        const { role } = res.data;
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        if (role === 'user') {
          navigate('/userdash');// Navigate to the user dashboard
        }else if (role === 'manager') {
          navigate('/manager')// Navigate to the manager dashboard
        }
      }
    })
    .catch(error => {
      console.log(error);
    });
  };
  return(
    <section>
    <div className="login-box">
      <form action=""
      onSubmit={handleSubmit}
      >
        <h2>LOGIN HERE</h2>
        <div className='input-box'>
          <span className='icon'>
            <FaEnvelope />
          </span>
          <input type="email" required 
          onChange={handleInput}
          name="email"
          placeholder="email"
          
          />
        </div>
        <div className='input-box'>
          <span className='icon'>
            <FaLock />
          </span>
          <input type="password" required 
          onChange={handleInput}
          name="password"
          placeholder="password"
          /> 
        </div>
        <button type="submit">Login</button>
        <div className='register-link'>
          <p>Don't have an account?</p> 
          <Link style={{ textDecoration: 'none', color: 'white' }}to="/Register">NEW USER</Link>
        </div>
        <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>
      </form>
    </div>
    </section>
  )
}