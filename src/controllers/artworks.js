const { Op } = require("sequelize");
const { Artwork, Type } = require("../db");
const { API_URL } = process.env;
const axios = require("axios");

async function getApiToDb(req, res, next) {
    try {
        const foundArtworkDb = await Artwork.findAll();
        if (foundArtworkDb.length !== 0) {
            return foundArtworkDb;
        } else {
        let apiArtwork = await axios.get(API_URL);
        apiArtwork = apiArtwork.data;
        var results = apiArtwork.data.slice(0, 129).map((art) => {
            if(art.images !== null){
                var image = art.images.web.url;
            }else{
                var image = 'Not found image';
            }
            return {
                id: art.id,
                title: art.title,
                images: image,
                type: art.type,
            }
        });
        const dbArtworks = await Artwork.findAll({
            include: {
                model: Type,
            },
        });
        results.map((art) => {
            Artwork.findOrCreate({
                where: {
                    id: art.id,
                },
                defaults: {
                    title: art.title,
                    images: art.images,
                    //type: art.type,
                },
            });
        });
        //return res.json(results);
    }
    } catch (error) {
        next(error);
    }
}; 
   


async function getAllArtwors(req, res, next) {
    try {
        const foundArtworkDb = await Artwork.findAll();
        console.log("lengyh es____",foundArtworkDb.length)
        if (foundArtworkDb.length !== 0) {
            console.log("entramos a las obras de arte por data base")
            res.json(foundArtworkDb);
        } else {
        let apiArtwork = await axios.get(API_URL);
        apiArtwork = apiArtwork.data;
        // console.log('apiArtwork es _______ ', apiArtwork);
        apiArtwork = apiArtwork.data.slice(0, 129).map((art) => {
            if(art.images !== null){
                var image = art.images.web.url;
            }else{
                var image = 'Not found image';
            }
            return {
                id: art.id,
                title: art.title,
                images: image,
                type: art.type,
            }
        });
        const dbArtworks = await Artwork.findAll({
            include: {
                model: Type,
            },
        }); 
        let formatedArtworks = [];
        if (dbArtworks.length > 0) {
            for (let i = 0; i < dbArtworks.length; i++) {
                // let typeArray = dbArtworks[i].type?.map(e => e);
                // let typeString = typeArray.join(', ');
                let artworkFormat = {
                    title: dbArtworks[i].title,
                    id: dbArtworks[i].id,
                    images: dbArtworks[i].images,
                    type: dbArtworks[i].type,
                   
                };
                formatedArtworks.push(artworkFormat);
            }
        }
        res.json([...formatedArtworks, ...apiArtwork]);
    }
        // res.json(apiArtwork)
    } catch (error) {
        next(error);
    }
};



module.exports = {
    getAllArtwors,
    getApiToDb
};


// id
// title
// creation_date
// current_location
// culture
// technique
// collection
// type
// dimensions.unframed
// wall_description
// images.web.url

// exhibitions.legacy <<<--- esta es mucha info y está con tag tipo de un doc. html


// creators.id
// creators.description
// creators.biography
// creators.birth_year
// creators.death_year



