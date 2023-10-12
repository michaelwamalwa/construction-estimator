import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login.js";
import  Navigate  from './components/Navigate.js';
import Register from './components/Register.js';
import Dashboard from './dashboard/Dashboard.js';
import UserDashboard from './dashboard//UserDashboard.js';
import ManagerDashboard from './dashboard/ManagerDashboard.js';
import About from './components/About.js';
import Services from './components/Services.js';
import Contact from './components/Contact.js';
import Team from './components/Team.js';

function App() {
  return (
   <>
   <BrowserRouter> 
   <Routes>

    <Route exact path="/" element={<Navigate />} />
    <Route exact path='/userdash' element={<UserDashboard />} />
    <Route exact path='/manager' element={<ManagerDashboard />} />
    <Route exact path="/login"element={<Login />} />
    <Route exact path="/register"element={<Register />} />
    <Route exact path='/dashboard'element={<Dashboard />} />
    <Route exact path='/about'element={<About />} />
    <Route exact path='/services'element={<Services />} />
    <Route exact path='/team'element={<Team />} />
    <Route exact path='/contact'element={<Contact />} />

   </Routes>
   
   </BrowserRouter>
   </>
  
  );
}

export default App;
