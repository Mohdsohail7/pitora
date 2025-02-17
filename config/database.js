const sq = require("sequelize");
const config = require("../config/config.json");

const env = process.env.NODE_ENV || "development";
const db = config[env];

const sequelize = new sq.Sequelize({
    dialect: db.dialect,
    storage: db.storage
});

// database connection
async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = { DataTypes: sq.DataTypes, sequelize, connectDB };