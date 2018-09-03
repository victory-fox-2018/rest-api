'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name:{
      type: DataTypes.STRING,
      notEmpty: true
    },
    email:{
      type: DataTypes.STRING,
      notEmpty: true
    },
    password:{
      type: DataTypes.STRING,
      notEmpty: true
    },
    role:{
      type: DataTypes.STRING
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};