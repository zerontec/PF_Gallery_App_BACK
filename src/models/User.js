const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
        {
            timestamps: false
        });
};


// telf: {
//     type: DataTypes.NUMBER, //---> NUMBER determina un error en la base de datos
//     allowNull: false,
//   },