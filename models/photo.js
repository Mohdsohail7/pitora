const { sequelize, DataTypes } = require("../config/database");
// const { tag } = require("./tag");

const photo = sequelize.define("photo",
    {
        imageUrl: DataTypes.STRING,
        description: DataTypes.STRING,
        altDescription: DataTypes.STRING,
        dateSaved: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        userId: {
            type: DataTypes.INTEGER,
            references: { model: "users", key: "id"}
        }
    }
);

 // photo.hasMany(tag, { foreignKey: "photoId" });
module.exports = { photo };