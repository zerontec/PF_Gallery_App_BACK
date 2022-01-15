const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("gallery", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nameGallery: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    addresGallery: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    ownGallery: {
      type: DataTypes.STRING,
    },
    telf: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },

    facebookPages: {
      type: DataTypes.STRING,
    },

    imageGallery:{

        type:DataTypes.STRING,
        
    },
    stock:{

        type:DataTypes.INTEGER,
    }
  });
};
