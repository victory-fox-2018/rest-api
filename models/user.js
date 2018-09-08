'use strict';

const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-z]+$",'i'],
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-z]+$",'i'],
      }
    },
    username: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      validate: {
        min: {
          args: 8,
          msg: 'Password is at least 8 characters'
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-z]+$",'i'],
      }
    },
    phone: {
      type: DataTypes.STRING,
      unique: true
    },
    location: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-z]+$",'i'],
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-z]+$",'i'],
      }
    }
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        let salt = crypto.createHash('md5').update(user.username).digest('hex');
        let combined = user.password + salt;
        let encryptedPassword = crypto.createHash('md5').update(combined).digest('hex');
        user.password = encryptedPassword;
      }
    }

    
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};