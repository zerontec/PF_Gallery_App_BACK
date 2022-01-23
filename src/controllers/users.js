const { User, Shopping_cart } = require("../db");
const axios = require("axios");

async function getUsers(req, res, next) {
    try {
        const users = await User.findAll({
            include: {
                model: Shopping_cart,
                as: "shopping_cart",
                attributes: [ "quantity", "description", "price", "total"],
            },
            attributes: ["id", "name", "username", "email", "password", "image"],
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los usuarios",
            error,
        });
    }
}


module.exports = {
    getUsers,
};

