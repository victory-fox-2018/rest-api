'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    
    let data = [
      {
        name: 'Vincent Wijaya',
        username: 'vincent',
        password: '0745a8edd8831287eba40282ba693ddaedf74f50b495028a6126a49302609456',
        role: 'admin',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Tono Wijaya',
        username: 'tono',
        password: '0745a8edd8831287eba40282ba693ddaedf74f50b495028a6126a49302609456',
        role: 'client',
        createdAt: new Date,
        updatedAt: new Date
      }
    ]
    
    return queryInterface.bulkInsert('Users', data, {})
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
