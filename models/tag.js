const { sequelize, DataTypes } = require("../config/database");
// const { photo } = require("./photo");

const tag = sequelize.define("tag", {
    name: DataTypes.STRING,
    photoId: {
        type: DataTypes.INTEGER,
        references: { model: "photos", key: "id"}
    }
});

//tag.belongsTo(photo, { foreignKey: "photoId" });

module.exports = {tag};
