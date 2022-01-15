const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('gallery', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
        {
            timestamps: false
        });
};