'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      full_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        allowNull: true,
        type: Sequelize.STRING
      },
      phone: {
        allowNull: true,
        type: Sequelize.STRING,
        unique: true
      },
      hash: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      is_active_notif: {
        allowNull: true,
        type: Sequelize.TINYINT,
        defaultValue: 0
      },
      registration_complete: {
        allowNull: true,
        type: Sequelize.TINYINT,
        defaultValue: 0
      },
      is_phone_confirmed: {
        allowNull: true,
        type: Sequelize.TINYINT,
        defaultValue: 0
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
    return queryInterface.dropTable('Users');
  }
};