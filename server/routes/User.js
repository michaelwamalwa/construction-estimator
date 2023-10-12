const express = require ("express");

const userControlers = require( "../controllers/user.js");

const login = require("../controllers/login.js")
// const register = require("../controllers/register.js")

//Iitialize express router

const router = express.Router();

//import { Router } from "express"; 
//import login from '../controllers/login.js';
//import signup from '../controllers/register.js';
//const {Router} = ('express');
//const router = Router() 

//Route 
router.get('/', userControlers.getUsers);
// router.get('/users/:id', getUserById);
// router.post('/users', createUser);
// router.put('/users/:id', updateUser);
// router.delete("/users/:id", deleteUser);

// router.post("/login", login)
// router.post("/register", register) 


module.exports = router;
