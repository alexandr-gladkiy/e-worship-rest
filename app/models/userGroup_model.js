// Db
const { DataTypes } = require("sequelize");
const db = require("../db/db_orm");

const UserGroup = db.define('UserGroup', 
{
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    
    Name:{
        type: DataTypes.STRING,
        allowNull: false
    },

    Description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    Status: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

});

module.exports = UserGroup;