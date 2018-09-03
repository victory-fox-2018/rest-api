'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Mario',
      lastName: 'Bross',
      username: 'mario',
      password: '12345678',
      gender: 'Male',
      phone: '+6281803456789',
      location: 'Jakarta',
      role: 'Admin',
      createdAt: new Date,
      updatedAt: new Date
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
