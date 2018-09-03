'use strict';
const bcrypt=require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: {
      type:DataTypes.STRING,
      unique:true,
      validate:{
        notEmpty:{
          args:true,
          msg:'username must be filled'
        }
      }
    },
    password: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      unique:true,
      validate:{
        allowNull:false,
        notEmpty:{
          args:true,
          msg:'username must be filled'
        },
        isEmail:{
          args:true,
          msg:'invalid email format'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate:(user)=>{
        const salt=bcrypt.genSaltSync()
        user.password=bcrypt.hashSync(user.password,salt)
      }
    }
  });

  //instance method
  User.prototype.validPassword=function(password){
    return bcrypt.compareSync(password,this.password)
  }
  return User;
};
