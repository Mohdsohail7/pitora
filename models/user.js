const { sequelize, DataTypes} = require("../config/database");

const user = sequelize.define("user",
    {
        username: DataTypes.STRING,
        email: DataTypes.STRING,
    }
);
module.exports = {user};