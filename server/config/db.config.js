const { Sequelize } = require('sequelize');
//Create connection
const sequelize = new Sequelize('construction estimator system', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
// export connection
module.exports = { sequelize };
  
   