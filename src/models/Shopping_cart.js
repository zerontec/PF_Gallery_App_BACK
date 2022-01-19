const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('shopping_cart', {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        artwork_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        artwork_title: {
            type: DataTypes.STRING,
            allowNull: false,
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

    },
        {
            timestamps: false
        });
};
