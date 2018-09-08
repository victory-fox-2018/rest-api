'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: `Name is required` }        
      }
    },
    price: {type :DataTypes.INTEGER,
      validate : {
      not : {args :["[a-z]",'i'],msg : 'input must be a number'}
      }},
    type: DataTypes.STRING,
    image: DataTypes.BLOB
  }, {});
  Item.associate = function(models) {
    let User = models.User
    let Transaction = models.Transaction
    Item.belongsToMany(User,{through:Transaction})
  };
  return Item;
};