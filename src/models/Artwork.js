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
        // dimensions_height: {
        //     type: DataTypes.INTEGER,
        // },
        // dimensions_width: {
        //     type: DataTypes.INTEGER,
        // },
        // digital_description: {
        //     type: DataTypes.STRING,
        // },
        // wall_description: {
        //     type: DataTypes.STRING,
        // },
        // exhibitions_legacy: {
        //     type: DataTypes.ARRAY(DataTypes.STRING),
        //     allowNull: false,
        // },
        images: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // creators_id: {
        //     type: DataTypes.INTEGER,
        // },
        // creators_description: {
        //     type: DataTypes.STRING,
        // },
        // creators_biography: {
        //     type: DataTypes.STRING,
        // },
        // creators_birth_year: {
        //     type: DataTypes.INTEGER,
        // },
        // creators_death_year: {
        //     type: DataTypes.INTEGER,
        // },
        // pricing: {
        //     type: DataTypes.INTEGER, //---> va por random entre 1000 a 1.000.000 dolares
        //     allowNull: false,
        // },

    },
        {
            timestamps: false
        });
};

// id: art.id,
//             title: art.title,
//             creation_date: art.creation_date,
//             current_location: art.current_location,
//             culture: art.culture,
//             technique: art.technique,
//             collection: art.collection,
//             // type
//             dimensions: art.dimensions.unframed.height 
//                         y art.dimensions.unframed.width, ---> paiting
//                       or art.dimensions.sheet.height ---> Drawing y Manuscript
//                         y art.dimensions.sheet.width,
//                      or art.dimensions.pendant.height ---> Jewelry
//                         y art.dimensions.pendant.width,
//                     or art.dimensions.height.height ---> Ceramic
//                     or art.dimensions.overall.height ---> Furniture and woodwork y Silver y Sculpture
//                      y art.dimensions.overall.width,
//                    or
//             wall_description: art.wall_description,
//             exhibitions_legacy: art.exhibitions.legacy,
//             images: art.images.web.url,
//             // exhibitions.legacy <<< --- esta es mucha info y está con tag tipo de un doc.html
//             creators_id: art.creators.id,
//             creators_description: art.creators.description,
//             creators_biography: art.creators.biography,
//             creators_birth_year: art.creators.birth_year,
//             creators_death_year: art.creators.death_year,




// set client_encoding to UTF8;