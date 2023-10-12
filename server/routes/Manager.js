const express = require ("express");
const managerControlers = require ("../controllers/manager");

const router = express.Router();

router.get('/', managerControlers.getManagers);
router.get('/:id', managerControlers.getManagerById);
router.put('/:id', managerControlers.updateManagerById);
router.delete('/:id', managerControlers.deleteManagerById);

module.exports = router;
