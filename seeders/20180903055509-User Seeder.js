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
    return queryInterface.bulkInsert('Users',[{
      name: 'Andi Santosa',
      username: 'andi',
      password: '123',
      role: 'admin',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      name: 'Garry Ahmand',
      username: 'garry',
      password: '123',
      role: 'user',
      createdAt : new Date(),
      updatedAt : new Date()
    }
    ])
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
