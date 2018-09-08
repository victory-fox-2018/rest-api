'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name:  {type :DataTypes.STRING,
      validate : {
      notEmpty: { msg: `Name is required` },
      is : {args :[/[ a-zA-Z-0-9]{6,}/],msg : 'input minimum 8 character'}
      }},
    email: {
      type: DataTypes.STRING,
      unique: { msg: `Email is already in use` },
      validate: {
        isEmail: { msg: `Email is not valid` }
      }
    },
    password: DataTypes.STRING,
    admin : DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    let Item = models.Item
    let Transaction = models.Transaction
    User.belongsToMany(Item,{through:Transaction})
  };
  return User;
};