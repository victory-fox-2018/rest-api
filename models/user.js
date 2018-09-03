'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          message: 'Invalid email'
        },
        isUnique: function (value, next) {
          const Op = sequelize.Op
          User.find({
            where: {
              email: value,
              id: {
                [Op.ne]: this.id
              },
            }
          })
          .then(datum => {
            if (datum) {
              next('Email has been registered before')
            } else {
              next()
            }
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