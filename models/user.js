'use strict';
module.exports = (sequelize, DataTypes) => {
const User = sequelize.define('User', {
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
  }
}, {

});
User.associate = function(models) {
  // associations can be defined here
};
return User;
};