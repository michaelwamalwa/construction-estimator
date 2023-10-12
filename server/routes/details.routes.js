import user from "../controllers/details.js";
    import { Router } from 'express';
    const router = Router();
    import db from "../models";
    //Manager Dashboard Route
    router.get("/dashboard/manager", async (req, res) => {
        try {
        const managers = await db.user.findAll({
            where: {
                role: "manager"
            }
        });
        res.json({ messages: "Manager Dashboard", data: managers });
    } catch (error) {
        res.status(500).json({ error: "An error occured"});
    }
});

//User Dashboard ROute
router.get('/dashboard/user', async (req, res) => {
    try{
        const users = await db.user.findAll({
            where: {
                role: "user"
            }
        });
        res.json({ message: "User Dashboard", data: users });
    } catch (error) {
        res.status(500).json({ error: "An Error Occured" });
    }
});
     // Create a new User
    // router.post("/", user.create);
  
     // Retrieve all users
    //router.get("/", user.findAll);
   
     // Retrieve a single user with id
     //router.get("/:id", user.findOne);
   
     // Update a user with id
    // router.put("/:id", user.update);
   
     // Delete a user with id
    // router.delete("/:id", user.delete);
   
     // Delete all users
     //router.delete("/", user.deleteAll);
export default (app) => {
     app.use('/api/user', router);
};
