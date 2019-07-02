'use strict';
module.exports = (sequelize, DataTypes) => {
const User = sequelize.define('User', {
  id: {
      autoIncrement: true,
      primaryKey: true,
      DataTypes:INTEGER
  },
  username: {
    DataTypes:STRING,
    length: 60,
    unique: true,
    allowNull: false
  },
  password: {
    DataTypes:STRING,
    allowNull: false
  },
  email: {
    DataTypes:STRING,
    validate: {
      isEmail:true,
      allowNull: false
    }
  },
  lastlogin: {
    DataTypes:DATE,
  },
  status: {
    // DataTypes:ENUM('active', 'inactive'),
    type: DataTypes.ENUM,
    values: ['active', 'inactive'],
    defaultValue:'active'
  },
}, {

});
User.associate = function(models) {
  // associations can be defined here
};
return User;
};