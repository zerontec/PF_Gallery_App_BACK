const { Op } = require("sequelize");
const { Artwork, Type } = require("../db");
const { API_URL } = process.env;
const axios = require("axios");

async function getApiToDb(req, res, next) {
    try {
        const foundArtworkDb = await Artwork.findAll();
        console.log("length es____", foundArtworkDb.length);
        if (foundArtworkDb.length !== 0) {
            console.log("entramos a las obras de arte por data base")
            return res.json(foundArtworkDb);
        } else {
            console.log("entramos a las obras de arte por primera vez al levantar el server por la API data")
            let apiArtwork = await axios.get(API_URL);
            apiArtwork = apiArtwork.data;
            var results = apiArtwork.data.slice(0, 129).map((art) => {
                if (art.images !== null) {
                    var image = art.images.web.url;
                } else {
                    var image = 'Not found image';
                }


                var str = art.exhibitions.legacy ? art.exhibitions.legacy : null;
                if ((str === null) || (str === '')) {
                    str = 'Not found description';
                } else {
                    str = str.toString();
                    str = str.replace(/(<([^>]+)>)/ig, ''); // remove html tags
                    // return str.replace( /(<([^>]+)>)/ig, '');
                }
                //console.log("str es ____",str)

                return {
                    id: art.id,
                    title: art.title,
                    images: image,
                    creation_date: art.creation_date,
                    current_location: art.current_location ? art.current_location : 'restricted information',
                    culture: art.culture,
                    technique: art.technique,
                    collection: art.collection,
                    description: str,
                    type: art.type,
                }
            });
            results = results.filter(function (artwork) {
                return artwork.images !== 'Not found image';
            }); //---> filter para obtener como base solamente las que contienen imágenes

            // const dbArtworks = await Artwork.findAll({
            //     include: {
            //         model: Type,
            //     },
            // });
           results.map((art) => {
                Artwork.findOrCreate({
                    where: {
                        id: art.id,
                    },
                    defaults: {
                        title: art.title,
                        images: art.images,
                        description: art.description, // aquí esta el tema jua
                        creation_date: art.creation_date,
                        current_location: art.current_location,
                        culture: art.culture,
                        technique: art.technique,
                        collection: art.collection,
                        // type: art.type,
                    },
                });
            });
            return res.json(results);
        }
    } catch (error) {
        return 'no esta entrando en el if de la db whi???? ' + error;
    }
};



module.exports = {
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



