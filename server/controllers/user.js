const User = require('../models/details.js');

// Create and Save a new user
exports.createUser = async (req, res) => {
   try {
    await User.create(details);
    res.json({
      "message": "User Added"
    });
  } catch (err) {
    console.log(err);
  }
  return createUser
};

 // Retrieve all users from the database.
 exports.getUsers = async (req,res) => {
  try {
    console.log(User);
    const user = await User.findAll();
    res.send(user);
  } catch (err) {
    console.log(err);
  }
  
};

//Retrieve user with ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
};