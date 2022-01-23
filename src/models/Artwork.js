const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('artwork', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        creation_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        current_location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        culture: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        technique: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        collection: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        images: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        creators_id: {
            type: DataTypes.INTEGER,
        },
        creators_description: {
            type: DataTypes.STRING,
        },
        stock: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        });
};

// set client_encoding to UTF8;