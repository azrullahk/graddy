'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addConstraint('Students', ['BuddyId'], {
  type: 'foreign key',
  name: 'custom_fkey_BuddyId',
  references: { //Required field
    table: 'Budds',
    field: 'id'
  },
  onDelete: 'cascade',
  onUpdate: 'cascade'
});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.removeConstraint('Students', ['BuddyId'], {});
  }
};
