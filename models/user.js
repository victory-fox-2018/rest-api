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
        const crypto = require('crypto');
        const secret = process.env.PASSWORD_SECRET;
        const hash = crypto.createHmac('sha256', secret)
                          .update(user.password)
                          .digest('hex');
        console.log(hash);
        user.password=hash
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};