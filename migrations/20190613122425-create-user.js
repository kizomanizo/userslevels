'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        type: Sequelize.UUID,
        length: 36,
        unique: true,
        defaultValue: Sequelize.UUIDV4
      },
      username: {
        type: Sequelize.STRING,
        length: 60,
        unique: true,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail:true,
          allowNull: false
        }
      },
      lastlogin: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM,
        values: ['active', 'inactive'],
        defaultValue: 'active'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};