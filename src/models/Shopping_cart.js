const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('shopping_cart', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        });
};


