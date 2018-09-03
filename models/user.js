'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
      defaultValue: "user"
    }
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        var bcrypt = require('bcryptjs');
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(user.password, process.env.PASSWORD_SECRET);
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};