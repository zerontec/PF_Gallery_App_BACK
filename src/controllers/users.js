const { User, Shopping_cart } = require("../db");
const { API_URL } = process.env;
const axios = require("axios");

async function getUsers(req, res, next) {
    try {
        const users = await User.findAll({
            include: {
                model: Shopping_cart,
                as: "shopping_cart",
                attributes: ["id", "user_id", "artwork_id", "quantity", "description", "price", "total"],
            },
            attributes: ["id", "username", "email", "role"],
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los usuarios",
            error,
        });
    }
}









async function getUserById(req, res, next) {
    try {
        console.log('estamos en el getUserById');
    } catch (error) {
        next(error);
    }
};

async function getUserByName(req, res, next) {
    try {
        console.log('estamos en el getUserByName');
    } catch (error) {
        next(error);
    }
};

async function putUser(req, res, next) {
    try {
        console.log('estamos en el pullUser');
    } catch (error) {
        next(error);
    }
};

async function deleteUser(req, res, next) {
    try {
        console.log('estamos en el deleteUser');
    } catch (error) {
        next(error);
    }
};



module.exports = {
    getUsers,
    getUserById,
    getUserByName,
    putUser,
    deleteUser
};



// users
// POST
// GET
// PULL
// DELETE
// un usuario un carrito
// muchos carritos muchas obras de arte
