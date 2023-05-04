const { DataTypes } = require("sequelize");
const db = require("../../db_orm");

const Test = db.define("Test", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    }

});

Test.sync({force: false});

module.exports = Test;