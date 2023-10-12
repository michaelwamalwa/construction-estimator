const express = require('express');
const router = express.Router();
const connection = require('../config/db.config.js');

router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const query = "SELECT * FROM details WHERE email = ? AND password = ?";
    connection.query(query, [email, password], (err, result) => {
      if (err) {
        console.error("Error executing MySQL query:", err);
        res.status(500).json({ error: "Failed to log in" });
      } else {
        if (result.length > 0) {
          const { username, role } = result[0]; // Extract username and role from the result
          res.json({ username, role }); //Send the username and role in the response
        } else {
          res.send({ message: "WRONG DETAILS" });
        }
      }
    });
  });
  module.exports = router;