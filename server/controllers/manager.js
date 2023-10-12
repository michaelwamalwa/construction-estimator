const Manager = require('../models/details');

// Create and Save a new manager
exports.createManager = async (req, res) => {
  try {
  const manager = await Manager.create(req.body);
   res.json({
     "message": "Manager Added",
     manager //send the newly created manager as part of the response
   });
 } catch (err) {
   console.log(err);
   res.status(500).json('Internal Server Error');
 }
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
// Find a single user with an id
//Retrieve a manger by Id 
exports.getManagerById =  async(req,res) => {//
  try {
    console.log("getManagerById called", req.params.id);
  const manager = await Manager.findByPk(req.params.id);//find by pk searches for a manger by Id
  if(!manager) {
    return res.status(404).send('Manager not found.');
  }
  res.send(manager);
}catch (err) {
  console.log(err);
  res.status(500).json('Internal Server Error');
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