'use strict';

const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user) => {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(user.password, salt);
        user.password = hash;
      },
      beforeBulkUpdate: function(user) {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(user.attributes.password, salt);
        user.attributes.password = hash;
      }
    }
  });

  // Instance Method
  User.prototype.validPassword = function (password, hash) {
    return bcrypt.compareSync(password, hash);
  }

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};