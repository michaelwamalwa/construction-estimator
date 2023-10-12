const mysql = require('mysql');
const bcrypt = require('bcrypt');
// const jwt = require("jsonwebtoken");
const express = require("express"); // Importing the express module
const cors = require("cors"); // Importing the cors module
const app = express();
const dashboardRouter  = require("./routes/dashboard");
const userRouter  = require("./routes/User.js");
const managerRouter = require("./routes/Manager.js");

app.use(cors({ origin: "http://localhost:3000" })); //~Allow them cross-origin requests

const Sequelize = require('sequelize');
const session = require("express-session"); // Importing the express-session module
const crypto = require("crypto");
const path = require("path");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password:'',
  database: "construction estimator system",
 });
 connection.connect((err) => {
  if (err) {
    console.error("Failed to connect to MySQL:" + err.message);
    return;
  }
  console.log("Connected to MySQL database");
 }); 

const db = require("./config/db.config.js");  
db.sequelize.sync().then(() => {
  console.log('Database Synced')
})
.catch((err) => {
  console.log('Failed to sync database:' + err.message);
});

app.use(express.json()); //Parsing JSON request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// Define a function to generate a secret key
const generateSecretKey = () => {
  // Generate a random sequence of bytes and convert it to a hexadecimal string
  const secretKey = crypto.randomBytes(32).toString("hex");
  return secretKey; // Return the generated secret key
};
const secretKey = generateSecretKey(); // Generate a secret key using the generateSecretKey function



//middlewares
app.get('/',(req, res) => {
  res.json({ message: "Welcome"})
})

//register logic
app.post("/register", async (req, res) => {
  //THis is a post request to the signup endpoint
  const { username, phone, email, password, role } = req.body; //it extracts the value of username, password and role from the request body
  try{
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  const query = `INSERT into details( username, phone, email, password, role) VALUES (?,?,?,?,?)`; //constructs a SQL query to inser the extracted values to tables details
  connection.query(query,[username, phone, email, hashPassword, role],(err, result) => {
      //It takes the query string as the first parameter and an array containing the extracted values as the second parameter.
      if (err) {
        //The arrow function passed as the third parameter is the callback function that will be executed once the query is complete.
        console.error("Error executing MySQL query:", err); //there is an error handling logic. If an error occurs during the execution of the query,
        res.status(500).json({ error: "Failed to register user" }); //it logs the error message to the console and sends a JSON response with a status code of 500 and an error message indicating the failure to register the user.
      } else {
        return res.render('register', {
          message: "Welcome Aboard!"
        });
      }
    });
} catch (error) {
  console.error("Error during password hashing:", error);
  res.status(500).json({ error: "Failed to register user" });
}
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
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
app.use("/dashboard", dashboardRouter);
app.use("/users", userRouter);
app.use("/managers", managerRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000 ");
});
