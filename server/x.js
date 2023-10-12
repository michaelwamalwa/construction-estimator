import express, { json } from "express"; // Importing the express module
const app = express();
import userRouter from "./routes/User.js";
import { urlencoded, json as _json } from "body-parser";
import { createConnection } from "mysql"; // Importing the mysql module
import session from "express-session"; // Importing the express-session module
import cors from "cors"; // Importing the cors module

import { randomBytes } from "crypto";
//const { Router } = require("express"); // Importing the Router object from express
//const router = Router(); // Creating a new Router

app.use(urlencoded({ extended: false }));
app.use(_json());

//Databse Connection
const connection = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "construction estimator system",
});
connection.connect((err) => {
  if (err) {
    console.error("Failed to connect to MySQL:" + err.message);
    return;
  }
  console.log("Connected to MySQL database");
});

app.use(json()); //Parsing JSON request bodies

// Define a function to generate a secret key
const generateSecretKey = () => {
  // Generate a random sequence of bytes and convert it to a hexadecimal string
  const secretKey = randomBytes(32).toString("hex");
  return secretKey; // Return the generated secret key
};

const secretKey = generateSecretKey(); // Generate a secret key using the generateSecretKey function

//middlewares
app.use(cors({ origin: true, credentials: true })); //Allow them cross-origin requests
app.use(urlencoded({ extended: false }));
app.use(_json());

//sync database
import { sequelize, user as _user } from "./models";
sequelize
  .sync()
  .then(() => {
    console.log("Database Synced");
  })
  .catch((err) => {
    console.log("Failed to sync database:" + err.message);
  });

app.use(
  //This code sets up the usage of the Express.js session middleware using app.use method.
  session({
    //The session function is called with an object as its configuration parameter.
    secret: secretKey, //The secretKey variable holds the value of the secret key.
    resave: false, //resave is an optional option.it is set to false, indicating that the session should not be saved if it is not modified.
    saveUninitialized: true, //saveUninitialized is an optional option that specifies whether to save uninitialized sessions it is set to true,
  })
); // indicating that uninitialized sessions should be saved

//APIs
app.get("/", (req, res) => res.send("Hello world"));

//Use Routes
app.use("/user", userRouter);
app.post("/estimates", (req, res) => {
  const { area, materialcost, equipmentcost, othercost, totalcost } = req.body;
  const query = `INSERT into estimates( area, materialcost, equipmentcost, othercost, totalcost) VALUES (?,?,?,?,?)`;
  connection.query(
    query,
    [area, materialcost, equipmentcost, othercost, totalcost],
    (err, result) => {
      if (err) {
        console.error("Error executing MySQL query:", err);
        res.status(500).json({ error: "Failed to include estimates" });
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/register", (req, res) => {
  //THis is a post request to the signup endpoint
  const username = req.body.username; //it extracts the value of username, password and role from the request body
  const phone = req.body.phone;
  const email = req.body.email;
  const password = req.body.password; //
  const role = req.body.role;
  const query = `INSERT into details( username, phone, email, password, role) VALUES (?,?,?,?,?)`; //constructs a SQL query to inser the extracted values to tables details
  connection.query(
    query,
    [username, phone, email, password, role],
    (err, result) => {
      //It takes the query string as the first parameter and an array containing the extracted values as the second parameter.
      if (err) {
        //The arrow function passed as the third parameter is the callback function that will be executed once the query is complete.
        console.error("Error executing MySQL query:", err); //there is an error handling logic. If an error occurs during the execution of the query,
        res.status(500).json({ error: "Failed to register user" }); //it logs the error message to the console and sends a JSON response with a status code of 500 and an error message indicating the failure to register the user.
      } else {
        res.send(result);
      }
    }
  );
});
/*
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const query = "SELECT * FROM details WHERE email = ? AND password = ?";
  connection.query(query, [email, password], (err, result) => {
    if(err){
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Failed to log in' });
    } else {
     if(result.length > 0) {
      const { username, role } = result[0]; // Extract username and role from the result
      res.json({ username, role }); //Send the username and role in the response
     } else {
      res.send({message: "WRONG DETAILS"});
        }
      } 
    });
  });
*/
app.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;
    //Validation for email and password
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Insert Email and password",
        data: null,
      });
    }
  } catch (error) {}
});

app.get("/dashboard", (req, res) => {
  if (req.session.user) {
    // Check if the user is logged in by verifying the existence of the 'user' property in the session object
    const { role } = req.session.user; // Destructure the 'role' property from the 'user' object in the session
    if (role === "user") {
      // If the role is 'user', redirect to the user dashboard
      res.redirect("/userdash");
      //User dashboard
      res.redirect("/userdash");
    } else if (role === "manager") {
      // If the role is 'manager', redirect to the manager dashboard
      //Manager dashboard
      res.redirect("/manager");
    } else {
      res.send("Invalid role"); // If the role is neither 'user' nor 'manager', send a response indicating an invalid role
    }
  }
});

router.get("/dashboard/manager", async (req, res) => {
  try {
    // Retrieve managers from the database where role is "manager"
    const managers = await _user.findAll({
      where: {
        role: "manager",
      },
    });
    // Send a JSON response with the message and data
    res.json({ messages: "Manager Dashboard", data: managers });
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ error: "An error occured" });
  }
});

// Define a route handler for the GET request to the "/dashboard/user" endpoint
router.get("/dashboard/user", async (req, res) => {
  try {
    // Retrieve users from the database where role is "user"
    const users = await _user.findAll({
      where: {
        role: "user",
      },
    });
    // Send a JSON response with the message and data
    res.json({ message: "User Dashboard", data: users });
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ error: "An Error Occured" });
  }
});

// Route to handle the GET request for manager information
router.get("/manager", (req, res) => {
  // Query to fetch manager information from the database table
  const query = "SELECT * FROM managers";
  // Execute the query
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error executing the query: ", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    // If there are no results, return an empty response
    if (results.length === 0) {
      res.json({});
      return;
    }
    // Get the first manager from the results
    const manager = results[0];
    // Sending the manager information as a JSON response
    res.json(manager);
  });
});

app.listen(5000, () => {
  console.log("Hey there !");
});
//
const { Manager } = require('../models/details');

// Create and Save a new manager
exports.createManager = async (req, res) => {
  try {
   await Manager.create(details);
   res.json({
     "message": "Manager Added"
   });
 } catch (err) {
   console.log(err);
 }
 return createManager
};
 // Retrieve all managers from the database.
 exports.getManagers = async (req,res) => {
  try {
    const managers = await Manager.findAll();
    res.send(managers);
  } catch (err) {
    console.error(err);
    res.status(500).json('Internal Server Error');
  } 
};
//Retrieve a manger by Id 
exports.getManagerById = async (req,res) => {
  try {
    const manager = await Manager.findByPk(req.params.id);
    if (!manager) {
      return res.status(404).send('Sorry! Manager not found');
    }
    res.send(manager);
  } catch (err) {
    console.log(err);
    res.status(500).send('Sorry! Internal Server Error');
  }
};

// Update a manager by the id in the request

exports.updateManagerById = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;//object containing the values of the updated fields sent in the request body form the client
  try {
    const manager = await Manager.findByPk(id);
    if (!manager) {
      return res.status(404).send('Sorry. MAnager not found');
    }
    //update the manager's data with the new values
    await manager.update(updatedData);

    res.send(manager);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sorry! Something went wrong')
  }
};
/*const updateManager  = async (req, res) => {
  try {
    await Manager.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.json({
      "message": "Manager Updated"
    });
  } catch (err) {
    console.log(err);
  }
  return updateManager
}
*/
// Delete a manager with the specified id in the request
exports.deleteManagerById = async (req, res) => {
  const { id } = req.params;

  try {
    const manager = await Manager.findByPk(id);

    if(!manager) {
      return res.status(404).send('Sorry! Manager no found!');
    }
    //Delete the manager from the database
    await manager.destroy();

    res.send("Manager deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Sorry! Internal Server Error");
  }
};
/*const deleteManager = async (req, res) => {
  try {
    await Manager.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json({
      "message": "Manager Deleted"
    });
  } catch (err) {
    console.log(err);
  }
  return deleteManager
}
*/
