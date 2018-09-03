'use strict';

const Sequelize = require('sequelize');
const op = Sequelize.Op;
const hashPass = require('../helpers/hashPassword')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING
      // type: DataTypes.STRING,
      // validate: {
      //   notEmpty: {msg: 'Username is required'},
      //   isUnique: function(value, next) {
      //     User.findOne({
      //       where: {
      //         username: value,
      //         id: {
      //           [op.ne]: this.id
      //         }
      //       }
      //     }).then(function(data){
      //       if (data) next(`Username is already used`)
      //       else next()
      //     })
      //   }
      // }
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    email: {
      type: DataTypes.STRING
      // type: DataTypes.STRING,
      // validate: {
      //   notEmpty: {msg: 'Email is required'},
      //   isEmail: {
      //     args: true,
      //     msg: 'Must be a valid email address'
      //   },
      //   isUnique: function(value, next) {
      //     User.findOne({
      //       where: {
      //         email: value,
      //         id: {
      //           [op.ne]: this.id
      //         }
      //       }
      //     }).then(function(data){
      //       if (data) next(`Email is already used`)
      //       else next()
      //     })
      //   }
      // }
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};