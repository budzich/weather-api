const {v4: uuid} = require('uuid');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Favorites', [{
      id: uuid(),
      title: 'London',
      info: 'London',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Favorites', null, {});
  }
};
