'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn('Users','role', { type: Sequelize.STRING });
  },

  down: (queryInterface, Sequelize) => {
  
  }
};
