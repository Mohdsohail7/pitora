const { sequelize, DataTypes } = require("../config/database");

const searchHistory = sequelize.define("searchHistory", {
    query: DataTypes.STRING,
    userId: {
        type: DataTypes.INTEGER,
        references: { model: "users", key: "id"}
    },
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});
module.exports = { searchHistory };
