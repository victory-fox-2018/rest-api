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
   return queryInterface.bulkInsert('Users', 
   [{"firstName":"Minnnie","lastName":"Lyosik","email":"mlyosik0@addthis.com","gender":"Female"},
   {"firstName":"Clare","lastName":"Lewins","email":"clewins1@netscape.com","gender":"Male"},
   {"firstName":"Jenine","lastName":"Demaine","email":"jdemaine2@auda.org.au","gender":"Female"},
   {"firstName":"Gardy","lastName":"Earles","email":"gearles3@shareasale.com","gender":"Male"},
   {"firstName":"Joshia","lastName":"MacGaffey","email":"jmacgaffey4@devhub.com","gender":"Male"}])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Users', null, {})
  }
};
