const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
  });
};
