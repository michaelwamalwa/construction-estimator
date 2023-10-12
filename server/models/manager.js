module.exports = (sequelize, Sequelize) => {
//Define Schema
  const Manager = sequelize.define('managers', {
    //Define attributes
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },  
    }, {
      //disable timeStamps
      timestamps: false
    });
    return Manager;
  };
