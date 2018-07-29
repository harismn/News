'use strict';
module.exports = (sequelize, DataTypes) => {
  var Visitor = sequelize.define('Visitor', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      user_id: {
          allowNull: false,
          type: DataTypes.INTEGER,
          foreignKey: true,
          references: {
            model: 'user',
            key: 'id'
          }
        },
      gender: {
        type: DataTypes.TINYINT,
        defaultValue: 0
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      timestamps: true,
      underscored: true
  }, {});
  Visitor.associate = function(models) {
    // associations can be defined here

    Visitor.belongsTo(models.User, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    });
  };
  return Visitor;
};