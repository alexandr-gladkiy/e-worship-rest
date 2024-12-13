const Sequilize = require('sequelize');

const db_name = "SoundList";
const db_user = "postgres";
const db_password = "admin";

const pool = new Sequilize(db_name, db_user, db_password, {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    operatorsAliases: 0,
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    },
    define: {
      freeTableName: true,
      sync: {alter: true}
    },
});

module.exports = pool;