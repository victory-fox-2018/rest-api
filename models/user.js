'use strict';
module.exports = (sequelize, DataTypes) => {
  var bcrypt = require('bcryptjs');
  var salt = bcrypt.genSaltSync(10);
  
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {hooks : {
    beforeCreate(user) {
      user.password = bcrypt.hashSync(user.password, salt);
    },
  }});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};