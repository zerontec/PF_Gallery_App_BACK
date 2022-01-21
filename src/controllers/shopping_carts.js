const { Op } = require("sequelize");
const { Shopping_cart, Artwork } = require("../db");
const axios = require("axios");



async function postShoppingCart(req, res) {
    try {
        const { id, user_id, artwork_id, quantity, description, price, total } = req.body;
        const shoppingCart = await Shopping_cart.create({
            id,
            user_id,
            artwork_id,
            quantity,
            description,
            price,
            total, 
        });
        res.status(201).json(shoppingCart);
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el carrito de compras",
            error,
        });
    }
}

async function getShoppingCart(req, res) {
    try {
        const shoppingCart = await Shopping_cart.findAll({
            where: {
                user_id: req.params.id,
            },
            include: [
                {
                    model: Artwork,
                    as: "artwork",
                    attributes: ["id", "title", "description", "price", "image"],
                },
            ],
        });
        res.status(200).json(shoppingCart);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el carrito de compras",
            error,
        });
    }
}

// {
// "id": 32,
// "artwork_id": 125249,
// "user_id": 2,
// "quantity": 1,
// "description": "cuadro bonito",
// "price": 100,
// "total": 100
// }


module.exports = {
    postShoppingCart,
    getShoppingCart
};