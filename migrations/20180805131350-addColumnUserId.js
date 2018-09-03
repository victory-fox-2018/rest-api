'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn('Items','UserId',{
     type : Sequelize.INTEGER
   })
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
