'use strict';
module.exports = (sequelize, DataTypes) => {
  const encrypt = require('../helpers/encrypt');

  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      validate: {
        required: function(val, next) {
          if(!val) {
            next('Name is required');
          } else {
            next();
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        required: function(val, next) {
          if(!val) {
            next('Email is required');
          } else {
            next();
          }
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        required: function(val, next) {
          if(!val) {
            next('Username is required');
          } else {
            next();
          }
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        required: function(val, next) {
          if(!val) {
            next('Password is required');
          } else {
            next();
          }
        }
      } 
    },
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
        console.log('<=============== MASUK GA');
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