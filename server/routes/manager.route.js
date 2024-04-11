const express = require('express');
const router = express.Router();
const managerController = require('../controllers/manager.controller.js');
const auth = require('../middleware/auth.middleware');
const Role = require('../utils/userRoles.utils');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { createManagerSchema, updateManagerSchema, validateLogin } = require('../middleware/validators/userValidator.middleware');


router.get('/', auth(), awaitHandlerFactory(managerController.getAllManagers)); // localhost:3000/api/v1/users
router.get('/id/:id', auth(), awaitHandlerFactory(managerController.getManagerById)); // localhost:3000/api/v1/users/id/1
router.get('/username/:username', auth(), awaitHandlerFactory(managerController.getManagerByuserName)); // localhost:3000/api/v1/users/usersname/julia
router.get('/whoami', auth(), awaitHandlerFactory(managerController.getCurrentManager)); // localhost:3000/api/v1/users/whoami
router.post('/', createManagerSchema, awaitHandlerFactory(managerController.createManager)); // localhost:3000/api/v1/users
router.patch('/id/:id', auth(Role.User), updateManagerSchema, awaitHandlerFactory(managerController.updateManager)); // localhost:3000/api/v1/users/id/1 , using patch for partial update
router.delete('/id/:id', auth(Role.User), awaitHandlerFactory(managerController.deleteManager)); // localhost:3000/api/v1/users/id/1


router.post('/login', validateLogin, awaitHandlerFactory(managerController.managerLogin)); // localhost:3000/api/v1/users/login

module.exports = router;