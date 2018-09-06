'use strict';
module.exports = (sequelize, DataTypes) => {
  const bcrypt = require('bcrypt')
  const salt = bcrypt.genSaltSync(8)
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    role: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});

  User.beforeCreate((user, options) => {
    var hash = bcrypt.hashSync(user.password, salt);
    user.password = hash
  })

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};