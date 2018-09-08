'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('Users',[{
    name : 'Khodhi Robbani',
    email : 'khodhirobbani@gmail.com',
    password : 'robbani',
    createdAt : new Date(),
    updatedAt : new Date()
  },{
    name : 'Fakhri Azmi',
    email : 'fakhriazmi@gmail.com',
    password : 'fakhri',
    createdAt : new Date(),
    updatedAt : new Date()
  },{
    name : 'Sekar Asrini',
    email : 'sekarasrini@gmail.com',
    password : 'sekar',
    createdAt : new Date(),
    updatedAt : new Date()
  }])
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
