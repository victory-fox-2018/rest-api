'use strict';
const hash = require('../helpers/hashPassword')
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: { args: true, msg: `INVALID INPUT EMAIL` }
      },
      unique: { args:true, msg: `Email Already Exist` }
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: function(user, options){
        user.password = hash(user.email, user.password)
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};