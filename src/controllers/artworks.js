const { Op } = require("sequelize");
const { Artwork, Type } = require("../db");
const { API_URL } = process.env;
const axios = require("axios");
 
async function getApiToDb(req, res, next) {
    try {
        const foundArtworkDb = await Artwork.findAll({
            include: {
                model: Type,
            },
        });
        console.log("length es____", foundArtworkDb.length);
        if (foundArtworkDb.length !== 0) {
            console.log("entramos a las obras de arte por data base")
            return res.json(foundArtworkDb);
        } else {
            console.log("entramos a las obras de arte por primera vez al levantar el server por la API data")
            let apiArtwork = await axios.get(API_URL);
            apiArtwork = apiArtwork.data;

            let allPrices = [550, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 8000, 8500, 9000, 9500, 10000, 10500, 11000, 11500, 12000, 12500, 13000, 13500, 14000, 14500, 15000, 15500, 16000, 16500, 17000, 17500, 18000, 18500, 19000, 19500, 20000, 20500, 21000, 21500, 22000, 22500, 23000, 23500, 24000, 24500, 25000, 25500, 26000, 26500, 27000, 27500, 28000, 28500, 29000, 29500, 30000, 30500, 31000, 31500, 32000, 32500, 33000, 33500, 34000, 34500, 35000, 35500, 36000, 36500, 37000, 37500, 38000, 38500, 39000, 39500, 40000, 40500, 41000, 41500, 42000, 42500, 43000, 43500, 44000, 44500, 45000, 45500, 46000, 46500, 47000, 47500, 48000, 48500, 49000, 49500, 50000, 50500, 51000, 51500, 52000, 52500, 53000, 53500, 54000, 54500, 55000, 55500, 56000, 56500, 57000, 57500, 58000, 58500, 59000, 59500, 60000, 60500, 61000, 61500, 62000, 62500, 63000, 63500, 64000, 64500, 65000, 65500, 66000, 66500, 67000, 67500, 68000, 68500, 69000, 69500, 70000, 70500, 71000, 71500, 72000, 72500, 73000, 73500, 74000, 74500, 75000, 75500, 76000, 76500, 77000, 77500, 78000, 78500, 79000, 79500, 80000, 80500, 81000, 81500, 82000, 82500,
                83000, 83500, 84000, 84500, 85000, 85500, 86000, 86500, 87000, 87500, 88000, 88500, 89000, 89500, 90000, 90500, 91000, 91500, 92000, 92500, 93000, 93500, 94000, 94500, 95000, 95500, 96000, 96500, 97000, 97500, 98000, 98500, 99000, 99500, 100000, 100500, 101000, 101500, 102000, 102500, 103000, 103500, 104000, 104500, 105000, 105500, 106000, 106500, 107000, 107500, 108000, 108500, 109000, 109500, 110000, 110500, 111000, 111500, 112000, 112500, 113000, 113500, 114000, 114500, 115000, 115500, 116000, 116500, 117000, 117500, 118000, 118500, 119000, 119500, 120000, 120500, 121000, 121500, 122000, 122500, 123000, 123500, 124000, 124500, 125000, 125500, 126000, 126500, 127000, 127500, 128000, 128500, 129000, 129500, 130000, 130500, 131000, 131500, 132000, 132500, 133000, 133500, 134000, 134500, 135000, 135500, 136000, 136500, 137000, 137500, 138000, 138500, 139000, 139500, 140000, 140500, 141000, 141500, 142000, 142500, 143000, 143500, 144000, 144500, 145000, 145500, 146000, 146500, 147000, 147500, 148000, 148500, 149000, 149500, 150000, 150500, 151000, 151500, 152000, 152500, 153000, 153500, 154000, 154500, 155000, 155500, 156000, 156500,
                157000, 157500, 158000, 158500, 159000, 159500, 160000, 160500, 161000, 161500, 162000, 162500, 163000, 163500, 164000, 164500, 165000, 165500, 166000, 166500, 167000, 167500, 168000, 168500, 169000, 169500, 170000, 170500, 171000, 171500, 172000, 172500, 173000, 173500, 174000, 174500, 175000, 175500, 176000, 176500, 177000, 177500, 178000, 178500, 179000, 179500, 180000, 180500, 181000, 181500, 182000, 182500, 183000, 183500, 184000, 184500, 185000, 185500, 186000, 186500, 187000, 187500, 188000, 188500, 189000, 189500, 190000, 190500, 191000, 191500, 192000, 192500, 193000, 193500, 194000, 194500, 195000, 195500, 196000, 196500, 197000, 197500, 198000, 198500, 199000, 199500, 200000, 200500, 201000, 201500, 202000, 202500, 203000, 203500, 204000, 204500, 205000, 205500, 206000, 206500, 207000, 207500, 208000, 208500, 209000, 209500, 210000, 210500, 211000, 211500, 212000, 212500, 213000, 213500, 214000, 214500, 215000, 215500, 216000, 216500, 217000, 217500, 218000, 218500, 219000, 219500, 220000, 220500, 221000, 221500, 222000, 222500, 223000, 223500, 224000, 224500, 225000, 225500, 226000, 226500, 227000, 227500, 228000, 228500,
                229000, 229500, 230000, 230500, 231000, 231500, 232000, 232500, 233000, 233500, 234000, 234500, 235000, 235500, 236000, 236500, 237000, 237500, 238000, 238500, 239000, 239500, 240000, 240500, 241000, 241500, 242000, 242500, 243000, 243500, 244000, 244500, 245000, 245500, 246000, 246500, 247000, 247500, 248000, 248500, 249000, 249500, 250000, 250500, 251000, 251500, 252000, 252500, 253000, 253500, 254000, 254500, 255000, 255500, 256000, 256500, 257000, 257500, 258000, 258500, 259000, 259500, 260000, 260500, 261000, 261500, 262000, 262500, 263000, 263500, 264000, 264500, 265000, 265500, 266000, 266500, 267000, 267500, 268000, 268500, 269000, 269500, 270000, 270500, 271000, 271500, 272000, 272500, 273000, 273500, 274000, 274500, 275000, 275500, 276000, 276500, 277000, 277500, 278000, 278500, 279000, 279500, 280000, 280500, 281000, 281500, 282000, 282500, 283000, 283500, 284000, 284500, 285000, 285500, 286000, 286500, 287000, 287500, 288000, 288500, 289000, 289500, 290000, 290500, 291000, 291500, 292000, 292500, 293000, 293500, 294000, 294500, 295000, 295500, 296000, 296500, 297000, 297500, 298000, 298500, 299000, 299500, 300000, 300500,
                301000, 301500, 302000, 302500, 303000, 303500, 304000, 304500, 305000, 305500, 306000, 306500, 307000, 307500, 308000, 308500, 309000, 309500, 310000, 310500, 311000, 400000, 450000, 500000, 550000, 600000, 650000, 750000, 800000, 850000, 950000, 1000000, 1100000, 1150000]
        
            // let stock = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            //     21, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11,
            // 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
            // 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 70, 75, 80, 84, 86, 88, 92, 95, 97, 99, 100, 102, 104, 107];
            

            //var count = 1;

            var results = apiArtwork.data.slice(6, 124).map((art) => {

                let randomPrice = allPrices[Math.floor(Math.random() * allPrices.length)];
                // console.log("randomPrice es ___ ", randomPrice);

                // let randomStock = stock[Math.floor(Math.random() * stock.length)];

                if (art.images !== null) {
                    var image = art.images.web.url;
                } else {
                    var image = 'Not found image';
                }
                var str = art.wall_description ? art.wall_description : art.exhibitions.legacy ? art.exhibitions.legacy : null;
                if ((str === null) || (str === '')) {
                    str = 'Not found description';
                } else {
                    str = str.toString();
                    str = str.replace(/(<([^>]+)>)/ig, ''); // remove html tags
                    str = str.substring(0, 508) + '...'; // limita la cantidad de texto en la description
                }

                //console.log("str es ____",str)
                var creators = art.creators.length === 0 ? "anonymous" : art.creators[0].description;
                var creators_id = art.creators.length === 0 ? 5040 : art.creators[0].id;

                //console.log("creador es ____", count++ + " " + creators );
                //console.log("creador id es ____", creators_id)
                return {
                    id: art.id,
                    title: art.title,
                    images: image,
                    price: randomPrice,
                    creation_date: art.creation_date,
                    current_location: art.current_location ? art.current_location : 'restricted information',
                    culture: art.culture,
                    technique: art.technique,
                    collection: art.collection,
                    description: str,
                    type: art.type,
                    creators_id: creators_id,
                    creators_description: creators,
                    stock: true,
                }
            });
            results = results.filter(function (artwork) {
                return artwork.images !== 'Not found image';
            }); //---> filter para obtener como base solamente las que contienen imágenes


            results.map(async (art) => {
                var newArtwork = await Artwork.findOrCreate({
                    where: {
                        id: art.id,
                    },
                    defaults: {
                        title: art.title,
                        images: art.images,
                        price: art.price,
                        description: art.description, // aquí esta el tema jua
                        creation_date: art.creation_date,
                        current_location: art.current_location,
                        culture: art.culture,
                        technique: art.technique,
                        collection: art.collection,  
                        creators_id: art.creators_id,
                        creators_description: art.creators_description,
                        stock: art.stock,
                    },
                    include: {
                        model: Type,
                    },
                }); 
                let type_id = await Type.findOne({
                    where: {
                        type: art.type
                    }
                });
                // console.log("type_id es ____", type_id.id);
                // console.log("newArtwork is __", newArtwork);
                await newArtwork[0].setTypes(type_id); // 
 
            }); 
            return res.json(results);
        }
    } catch (error) {
        return 'no esta entrando en el if de la db whi???? ' + error;
    }
}; 





async function getByName(req, res, next) {
    const { name } = req.query;
    // petición postman para solicitar por name es: localhost:5040/home?name=Monet
    try {
        if (name) {
            // console.log('in search x name');
            // console.log("name is ___ ", name);
            const dbArtworks = await Artwork.findAll({
                where: {
                    title: {
                        [Op.iLike]: '%' + name + '%', // Op.iLike: '%' + name + '%' es una forma de buscar una palabra en un string (name) usando Op.iLike que es un operador de sequelize y trabaja con expresiones regulares
                    },
                },
                include: {
                    model: Type,
                },
            })
            res.json(dbArtworks);
        }
    } catch (error) {
        next(error);
    }
};


async function postArtwork(req, res, next) {
    const { title, images, price, description, creation_date, current_location, culture, technique, collection, creators_description, creators_id, type } = req.body;
    // console.log('req es ___ ', req.query);
    // console.log('title es ___ ', title);
    try {
        const newArtwork = await Artwork.create({
            title,
            images,
            price,
            description,
            creation_date,
            current_location,
            culture,
            technique,
            collection,
            creators_description,
            creators_id,
            stock
        });
        await newArtwork.addTypes(type);
        // await newArtwork.addShopping_carts(creators_id);
        res.json(newArtwork);
    } catch (error) {
        next(error);
    }
};


async function getArtworkById(req, res, next) {
    // console.log('entraaaaaaaaaaaaaaaa por id ID id _');
    const { id } = req.params;
    let artwork;
    try {
        // console.log('el id dentro del condicional es ', id);
        artwork = await Artwork.findOne({
            where: {
                id,
            },
            include: {
                model: Type,
            },
        });
        // console.log('el artwork es ', artwork);
        if (artwork) {
            res.json(artwork);
        } else {
            res.status(404).json({
                message: 'Not found',
            });
        }
    } catch (error) {
        next(error);
    }
};
 

// --->>> json para testear el POST postman
// {
//   "title": "yoyoko loco",
//   "images": "hhtp.cualquiera",
//   "price": 30,
//   "description": "casa",
//   "creation_date": "5",
//   "current_location": "coooooooo",
//   "culture": ["piuuuu"],
//   "technique": "berr",
//   "collection": "as",
//   "creators_description": "kol",
//   "creators_id": 1,
//   "type": [2]
// }


module.exports = {
    getApiToDb,
    getByName,
    postArtwork,
    getArtworkById,
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



