const express = require("express");
const router = express.Router();
const db = require("../config/db.config");

function isLoggedIn(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.status(403).json({ error: "Please log in First" });
    }
}

//Route handler for the GEt

router.get("/", isLoggedIn, (req, res) => {
    if (req.session.user) {
        const { role } =  req.session.user;
        if (role === "user") {
            res.redirect("/dashboard/user");
        } else if (role === "manager") {
            res.redirect("/dashboard/manager");
        } else {
            res.send("invalid role");
        }
    }else {
       res.send("User not logged in") 
    }
})
//Route handler for the GET request to "dahboard/manager"
router.get("/dashboard/manager", isLoggedIn, async (req, res) => {
    try {
        const managers = await db.user.findAll({
            where: {
                role: "manager",
            },
        });
        res.json({ messages: "Manager Dashboard", data: managers });
    } catch (error) {
        res.status(500).json({ error: "An error occurred" });
     }
});

// Route handler for the GET request to "/dashboard/user"
router.get("/dashboard/user", isLoggedIn, async (req, res) => {
    try {
        const users = await db.user.findAll({
            where: {
                role: "user",
            },
        });
        res.json({ message: "User Dashboard", data: users });
    } catch (error) {
        res.status(500).json({ error: "An error Occurred"});
    }
});

module.exports = router;