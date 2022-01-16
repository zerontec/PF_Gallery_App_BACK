const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('gallery', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    galleryName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    galleryAddress: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    galleryOwner: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },

    facebookPages: {
      type: DataTypes.STRING,
    },

    galleryImage:{

        type:DataTypes.STRING,
        
    },
    stock:{

        type:DataTypes.INTEGER,
    },

  });
};
