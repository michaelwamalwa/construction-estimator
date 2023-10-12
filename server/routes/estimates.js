const express = require("express");
const router = express.Router();
const connection = require('../config/db.config');

router.post("/", (req, res) => {
    const { area, materialcost, equipment, othercost, totalcost } = req.body;
    const query = `INSERT into estimates(area, materialcost, equipent, othercost, totalcost) VALUES (?,?,?,?,?)`;
    connection.query(
        query,
        [area, materialcost, equipment, othercost, totalcost],
        (err, result) => {
            if (err) {
                console.error("Error executing MySQL query:", err);
                res.status(500).json({ error: "Faile to include estimates"});
            } else {
                res.send(result);
            }
        }
    );
});
module.exports = router;