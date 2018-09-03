'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn('Users','ItemId',{
     type : Sequelize.INTEGER
   })
  },

  down: (queryInterface, Sequelize) => {
  
  }
};
