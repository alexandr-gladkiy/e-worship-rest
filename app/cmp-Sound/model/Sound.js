// Db
const { DataTypes } = require("sequelize");
const db = require("../../db_orm");

const Sound = db.define('Sound', 
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

    Text: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    Reit: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    Status: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

});

module.exports = Sound;