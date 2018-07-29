'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    fullName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      allowNull: true,
      type: DataTypes.STRING
    },
    phone: {
      allowNull: true,
      type: DataTypes.STRING
    },
    hash: {
      allowNull: true,
      type: DataTypes.STRING
    },
    is_active_notif: {
      type: DataTypes.TINYINT,
      defaultValue: 0
    },
    is_phone_confirmed: {
      type: DataTypes.TINYINT,
      defaultValue: 0
    },
    registration_complete: {
      type: DataTypes.TINYINT,
      defaultValue: 0
    },


  }, { timestamps: true,
    underscored: true});
  User.associate = function (models) {
   
    User.hasMany(models.Visitors, {
      foreignKey: 'User_id',
      onDelete: 'CASCADE'
    });

    // associations can be defined here
  };
  return User;
};