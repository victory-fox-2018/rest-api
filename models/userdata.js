'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserData = sequelize.define('UserData', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {

    hooks: {
      beforeCreate: (user, options) => {

        const crypto = require('crypto')

        const secret = user.email
        const hash = crypto.createHmac('sha256', secret)
                          .update(user.password)
                          .digest('hex')
        user.password = hash
      }
    }
  });
  UserData.associate = function(models) {
    // associations can be defined here
  };
  return UserData;
};
