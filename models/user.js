'use strict';
module.exports = (sequelize, DataTypes) => {
  const encrypt = require('../helpers/encrypt');

  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = encrypt(user.password);
        user.role = 'client';
        user.createdAt = new Date();
        user.updatedAt = new Date();
      },
      beforeUpdate: (user, options) => {
        user.password = encrypt(user.password);
        user.updatedAt = new Date();
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};