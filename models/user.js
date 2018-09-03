'use strict';
module.exports = (sequelize, DataTypes) => {
  const USer = sequelize.define('User', {
    firstName: {
      type : DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "first name is required"
        }
      }
    },
    lastName: {
      type : DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "first name is required"
        }
      }
    },
    email: {
      type : DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "first name is required"
        }
      }
    },
    password:{
      type : DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "first name is required"
        }
      }
    },
    role: DataTypes.STRING
  }, {
    
    hooks: {
      beforeCreate: (instance, options) => {
        const crypto = require('crypto');

        const secret = instance.email;
        const hash = crypto.createHmac('sha256', secret)
                          .update(instance.password)
                          .digest('hex');

        instance.password = hash
      },
    }

  });
  USer.associate = function(models) {
    // associations can be defined here
  };
  return USer;
};