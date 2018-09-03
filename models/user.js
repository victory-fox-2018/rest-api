'use strict';
const { hashPassword } = require('../helpers/hash')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hashPassword(user.password, process.env.HASH_SECRET)
        user.role = 'client'
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};