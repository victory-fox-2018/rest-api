'use strict';
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };

  User.beforeCreate(function(user){
    user.salt = bcrypt.genSalt(10)
    user.password = bcrypt.hashSync(user.password, user.salt)
  })

  return User;
};