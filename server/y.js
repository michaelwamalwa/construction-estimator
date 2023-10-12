const Manager = require('../models/details');

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
    console.log(Manager);
    const manager = await Manager.findAll();
    res.send(manager);
  } catch (err) {
    console.log(err);
  } 
};
// Find a single user with an id
const getManagerById = async (req, res) => {
  try {
  const manager = await Manager.findAll({
    where: {
      id: req.params.id
    }
  });
  res.send(product[0]);
} catch (err) {
  console.log(err);
}
return getManagerById
};
// Update a manager by the id in the request
const updateManager  = async (req, res) => {
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

// Delete a manager with the specified id in the request
const deleteManager = async (req, res) => {
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


