'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    tittle: DataTypes.STRING,
    comments: DataTypes.
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};