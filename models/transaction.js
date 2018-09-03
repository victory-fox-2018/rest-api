'use strict';
module.exports = (sequelize, DataTypes) => {
  var Transaction = sequelize.define('Transaction', {
    UserId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER
  }, {});
  Transaction.associate = function(models) {
    let User = models.User
    let Item = models.Item
    Transaction.belongsTo(User,{foreignKey: 'UserId'})
    Transaction.belongsTo(Item,{foreignKey: 'ItemId'})
  };
  return Transaction;
}