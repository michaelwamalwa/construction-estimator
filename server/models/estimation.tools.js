export default (sequelize, Sequelize) => {
    const Estimates = sequelize.define("Estimates", {
      area: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      materialcost: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      equipmentcost: {
        type: Sequelize.FLOAT,
        allowNull: false,  
      },  
      othercost: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      totalcost: {
        type: Sequelize.FLOAT,
        allowNull: false
      }
    });
 // Synchronize the model with the database
sequelize.sync()
.then(() => {
  console.log('Estimate model synchronized with database.');
})
.catch(error => {
  console.error('Error synchronizing the Estimate model:', error);
});
    return Estimates;
  };