const sq = require("sequelize");
const config = require("../config/config.json");

const env = process.env.NODE_ENV || "development";
const db = config[env];

const sequelize = new sq.Sequelize({
    dialect: db.dialect,
    storage: db.storage
});

module.exports = { DataTypes: sq.DataTypes, sequelize };