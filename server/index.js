const mysql = require("mysql2");
const { initiateC2BTransaction } = require("./mpesa/mpesa");
const bcrypt = require("bcrypt");
const products = require("./products");
// const jwt = require("jsonwebtoken");
const express = require("express"); // Importing the express module
const cors = require("cors"); // Importing the cors module
const session = require("express-session"); // Importing the express-session module
const crypto = require("crypto");
const path = require("path");
const HttpException = require("./utils/HttpException.utils.js");
const errorMiddleware = require("./middleware/error.middleware.js");
const managerRouter = require("./routes/manager.route.js");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // THis allows the server to send cookies
  })
); //~Allow them cross-origin requests

const connection = mysql.createConnection({
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

const secretKey = crypto.randomBytes(32).toString("hex");

app.use(
  //This code sets up the usage of the Express.js session middleware using app.use method.
  session({
    //The session function is called with an object as its configuration parameter.
    secret: secretKey, //The secretKey variable holds the value of the secret key.
    resave: false, //resave is an optional option.it is set to false, indicating that the session should not be saved if it is not modified.
    saveUninitialized: true, //saveUninitialized is an optional option that specifies whether to save uninitialized sessions it is set to true,
    cookie: {
      secure: false, //For development, over HTTP, if HTTPS then true
      httpOnly: true, //Helps against XSS attacks
      sameSite: "lax", //This is important for cross-site usage.
    },
  })
); // indicating that uninitialized sessions should be saved
app.use(`/api/managers`, managerRouter);
app.use(express.json()); //Parsing JSON request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));
app.use(errorMiddleware);

//middlewares
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

//register logic
app.post("/register", async (req, res) => {
  //THis is a post request to the signup endpoint
  const { username, phone, email, password, role } = req.body; //it extracts the value of username, password and role from the request body
  try {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    const query = `INSERT into details( username, phone, email, password, role) VALUES (?,?,?,?,?)`; //constructs a SQL query to inser the extracted values to tables details
    connection.query(
      query,
      [username, phone, email, hashPassword, role],
      (err, result) => {
        //It takes the query string as the first parameter and an array containing the extracted values as the second parameter.
        if (err) {
          //The arrow function passed as the third parameter is the callback function that will be executed once the query is complete.
          console.error("Error executing MySQL query:", err); //there is an error handling logic. If an error occurs during the execution of the query,
          return res.status(500).json({ error: "Failed to register user" }); //it logs the error message to the console and sends a JSON response with a status code of 500 and an error message indicating the failure to register the user.
        }
        return res.json({ message: "User registered successfully" });
      }
    );
  } catch (error) {
    console.error("Error during password hashing:", error);
    res.status(500).json({ error: "Failed to register user" });
  }
});

//Login Logic
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM details WHERE email = ?";
  connection.query(query, [email], (err, result) => {
    if (err) {
      console.error("Error executing MySQL query:", err);
      return res.status(500).json({ error: "Failed to log in" });
    }

    if (result.length > 0) {
      const { username, password: hashedPassword, role } = result[0]; // Extract username and role from the result
      bcrypt.compare(password, hashedPassword, (compareErr, match) => {
        if (compareErr) {
          console.error("Error comparing passwords:", compareErr);
          return res.status(500).json({ error: "Failed to log in" });
        }

        if (match) {
          //Set user information in session
          req.session.user = { email, username, role };
          res.json({ username, role });
        } else {
          res.json({ message: "Incorrect credentials" });
        }
      });
    } else {
      res.json({ message: "User not found" });
    }
  });
});
app.get("/manager-info", (req, res) => {
  connection.connect();
  if (req.session.user) {
    const { email, role } = req.session.user;

    if (role === "manager") {
      const query =
        "SELECT * FROM details WHERE email = ? AND role = 'manager'";
      connection.query(query, [email], (err, results) => {
        if (err) {
          console.error("Error executing MYSQL query", err);
          return res
            .status(500)
            .json({ error: "Failed to fetch manager infromation" });
        }

        if (results.length > 0) {
          const { username, email, phone } = results[0];
          res.json({ username, email, phone });
        } else {
          res.status(404).json({ message: "Manager not found" });
        }
      });
    } else {
      //user is not a manager
      res.status(403).json({ message: "Access Denied" });
    }
  } else {
    //No user session
    res.status(401).json({ message: "Access Denied" });
  }
});
const dashboardRouter = require("./routes/dashboard");
const userRouter = require("./routes/User.js");
const Sequelize = require("sequelize");
const db = require("./config/db.config.js");
db.sequelize
  .sync()
  .then(() => {
    console.log("Database Synced");
  })
  .catch((err) => {
    console.log("Failed to sync database:" + err.message);
  });
//APIs
app.use("/dashboard", dashboardRouter);
app.use("/users", userRouter);
app.use("/managers", managerRouter);

app.get("/products", (req, res) => {
  res.send(products);
});
app.post("/api/payment", async (req, res) => {
  const { amount, phoneNumber } = req.body;

  // Simulate a delay to mimic real transaction processing
  setTimeout(() => {
    // Simulating a successful transaction
    res.json({
      success: true,
      message: "Payment simulated successfully",
      data: {
        transactionId: "1234567890", // Example transaction ID
        amount: amount,
        phoneNumber: phoneNumber,
        status: "Completed",
      },
    });
  }, 2000); // 2 seconds delay
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server running on port ${port}`));
