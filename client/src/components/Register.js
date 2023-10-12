import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock, FaUser, FaPhone, FaEnvelope, FaGlassWhiskey} from 'react-icons/fa';
import './style.css';
import axios from 'axios';

export default function RegisterPage(){
const [data, setData] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
    role: ''
})
const navigate = useNavigate();
const [registerStatus, setRegisterStatus] = useState("");

const handleInput = (e) => {
    setData(prev => ({...prev,[e.target.name]: e.target.value,}))    
}
const handleSubmit = (e) => {
    e.preventDefault(); 
    axios.post("http://localhost:5000/register", data )
    .then(res => {
    if(res.data.message) {
        setRegisterStatus(res.data.message);
    }else{
        setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
        navigate('/login');
    }
});
}

    return(
        <>
        <div className='container'>
        <div className='form-box'>
            <form action=""
            onSubmit={handleSubmit}
            name='Formfill'>
                <h2>REGISTER</h2>
                <div className='input-box1'>
                    <span className='icon'>
                    <FaUser />
                    </span>
                    <input type="text"
                    onChange={handleInput}
                     name="username" placeholder="username" />
                </div>
                <div className='input-box1'>
                <span className='icon'>
                <FaPhone />
                </span>
                <input type="text"
                 onChange={handleInput}
                 name="phone" placeholder="phone" />  
                </div>
                <div className='input-box1'>
                    <span className='icon'>
                    <FaEnvelope />
                    </span>
                    <input type="email"
                    onChange={handleInput}
                    name="email" 
                    placeholder="email" />
                </div>
                <div className='input-box1'>
                    <span className='icon'>
                        <FaLock />
                    </span>
                    <input type="password" 
                    onChange={handleInput}
                    name="password" placeholder="password" />
                   
                </div>

                <div className='input-box1'>
                    <span className='icon'>
                        <FaGlassWhiskey />
                    </span>
                    <input type="text" 
                    onChange={handleInput}
                    name="role" placeholder="role" />
                   
                </div>
                <div className='button'>
                     <input type="submit" className='btn' value="Register" />
                </div>
                <div className='register-link'>  
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/login">LOGIN HERE</Link>
                </div>
                <div className='register-link'>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/">HOME</Link>
                </div>
                  <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1>
            </form>
        </div>
        </div> 
        </>
    );
}
