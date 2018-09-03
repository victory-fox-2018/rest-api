'use strict';

module.exports = (sequelize, DataTypes) => {
  const hassPassword = require('../helpers/hashPassword')
  const Op = sequelize.Op
  const User = sequelize.define('User', {
    name:{
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          args: true,
          msg: `name cant be empty`
        }
      }
    },
    email:{
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          args: true,
          msg: `email cant be empty`
        },
        isEmail:{
          args: true,
          msg: `formal email wrong`
        },
        isEmailUnique(value, cb){
          User
            .findOne({
              where:{
                email: value,
                id:{
                  [Op.ne]: this.id
                }
              }
            })
            .then(users => {
              if(users){
                cb('email already taken')
              }else{
                cb()
              }
            })
            .catch(err => {
              cb(err.message)
            })
        }
      }
    },
    password:{
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          args: true,
          msg: `password cant empty`
        }
      }
    },
    role:{
      type: DataTypes.STRING
    }
  }, {
    hooks:{
      beforeCreate: (user, option) => {
        let hash = hassPassword(user.password)
        user.password = hash
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};