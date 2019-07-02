'use strict';
module.exports = (sequelize, DataTypes) => {
  const Level = sequelize.define('Level', {
    uuid: DataTypes.UUID,
    name: DataTypes.STRING,
    level: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    created_by: DataTypes.INTEGER
  }, {});
  Level.associate = function(models) {
    // associations can be defined here
  };
  return Level;
};