// Db
const { DataTypes } = require("sequelize");
const db = require("../../db_orm");

const User = db.define('Sound', 
{
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    Login:{
        type: DataTypes.STRING,
        allowNull: false
    },
    
    First_Name:{
        type: DataTypes.STRING,
        allowNull: false
    },

    Middle_Name:{
        type: DataTypes.STRING,
        allowNull: false
    },

    Last_Name:{
        type: DataTypes.STRING,
        allowNull: false
    },

    Email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    Phone: {
        type: DataTypes.STRING,
        allowNull: false
    },

    Status: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

});

module.exports = User;