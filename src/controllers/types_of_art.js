const { Type } = require("../db");
const { API_URL } = process.env;
const axios = require("axios");


async function getTypes(req, res, next) {
    try {
        const foundTypeDb = await Type.findAll();
        // console.log('foundTypeDb es: ', foundTypeDb);
        if (foundTypeDb.length !== 0) {
            //console.log('estamos en la db');
            return foundTypeDb;
        } else {
            let apiTypes = await axios.get(API_URL);
            // console.log('apiTypes es: ', apiTypes.data);
            var types = [];
            //console.log('estamos en la api por 1ra vez wuaa wua');
            apiTypes = apiTypes.data;
            for (let i = 0; i < apiTypes.data.length; i++) {
                let info = apiTypes.data[i].type;
                //console.log('info es: ', info);
                if (info) {
                    types = types.concat(info.split(","));
                }
            };
            let noRepeatType = [...new Set(types)];
            //console.log('noRepeatType es: ', noRepeatType);
            noRepeatType.map(element => {
                Type.findOrCreate({
                    where: {
                        type: element
                    }
                });
            });
            // return res.json(noRepeatType);
        }
    } catch (error) {
        return 'no esta entrando en el if de la db whi???? ' + error;
    }
};

module.exports = {
    getTypes
};