'use strict';
module.exports = (sequelize, DataTypes) => {
  const HashPassword = require('../helpers/HashPassword')
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
      hooks:{
        beforeCreate :(user)=>{
          let hash = HashPassword(user.password);
          user.password = hash;
          this.createdAt = new Date(),
          this.updatedAt = new Date()
        }
      }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};