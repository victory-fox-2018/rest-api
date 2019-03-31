'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'role', 
  {
    type : Sequelize.STRING,
    defaultValue: 'member'
  });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'role');
  }
};
