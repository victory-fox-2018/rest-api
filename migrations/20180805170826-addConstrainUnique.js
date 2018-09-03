'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Users', ['email'], {
      type: 'unique'
    });
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
