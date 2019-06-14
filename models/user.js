'use strict';
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
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
            type: Sequelize.DATE,
        },
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue:'active'
        },
    }, {

    });
User.associate = function(models) {
// associations can be defined here
};
return User;
};