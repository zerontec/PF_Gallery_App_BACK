const { Type } = require("../db");
const { API_URL } = process.env;
const axios = require("axios");


async function getTypes(req, res, next) {
    try {
        const foundTypeDb = await Type.findAll();
        if (foundTypeDb.length !== 0) {
            return foundTypeDb;
        } else {
            let apiTypes = await axios.get(API_URL);
            var types = [];
            apiTypes = apiTypes.data;
            for (let i = 0; i < apiTypes.data.length; i++) {
                let info = apiTypes.data[i].type;
                if (info) {
                    types = types.concat(info.split(","));
                }
            };
            let noRepeatType = [...new Set(types)];
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
        return 'no esta entrando en el if de la db' + error;
    }
};

module.exports = {
    getTypes
};