'use strict';
module.exports = (sequelize, DataTypes) => {
  const Op = sequelize.Op
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate : {
        isEmail : {
          args : true,
          msg : `wrong email format`
        },
        isUnique: function(value,cb) {
          User.findOne({
            where : {
              email: value,
              id : {
                [Op.ne] : this.id
              }
            }
          })
          .then(function(data){
            if (data){
              let error = `email is unavailable`
              cb(error)
            } else {
              cb()
            }
          })
          .catch(function(err){
            cb(err)
          })
        }
      }
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};