'use strict';
module.exports = (sequelize, DataTypes) => {
  var bcrypt = require('bcryptjs');
  var salt = bcrypt.genSaltSync(10);

  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: {type: DataTypes.STRING, 
              unique: true,
              validate: {
                isUnique: function (value, next) {
                  var self = this;
                  User.find({where: {username: value}})
                      .then(function (user) {
                          // reject if a different user wants to use the same username
                          if (user && self.id !== user.id) {
                              return next('username already in use!');
                          }
                          return next();
                      })
                      .catch(function (err) {
                          return next(err);
                      });
              }
              }},
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {hooks : {
    beforeCreate(user) {
      user.password = bcrypt.hashSync(user.password, salt);
    },
  }});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};