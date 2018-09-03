'use strict';
module.exports = (sequelize, DataTypes) => {
  const USer = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
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