//import sequelize
const  Sequelize  = require('sequelize');
const sequelize = new Sequelize('construction estimator system', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

//initiallize Datatypes
const { DataTypes } = Sequelize;
//Define Schema
    const User = sequelize.define("details", {
      //Define attributes
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user'
      },
      
    }, {
     //disbale TimeStamps
     timestamps: false 
    });
  module.exports = User;