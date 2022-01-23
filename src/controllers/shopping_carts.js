const { Shopping_cart, Artwork, User } = require("../db");
 
async function postShoppingCart(req, res) {
    try {
        const { id, userId, quantity, description, price, total, artwork_id } = req.body;
        const shoppingCart = await Shopping_cart.create({
            id,
            userId,
            quantity,
            description,
            price,
            total, 
        });
        // put a obra de arte stock to false
        await shoppingCart.addArtworks(artwork_id);
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
            include: [
                {
                    model: Artwork,
                },
                {
                    model: User,
                    as: "user",
                    attributes: ["name", "username", "image"],
                }
            ],
            attributes: ["id", "quantity", "description", "price", "total"],
        });
        res.status(200).json(shoppingCart);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el carrito de compras",
            error,
        });
    }
}


async function getShoppingCartById(req, res) {
    try {
        const { id } = req.params;
        const shoppingCart = await Shopping_cart.findOne({
            where: { id },
            include: [
                {
                    model: Artwork,
                },
                {
                    model: User,
                    as: "user",
                    attributes: ["name", "username", "image"],
                }
            ],
            attributes: ["id", "quantity", "description", "price", "total"],
        });
        res.status(200).json(shoppingCart);
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el carrito de compras",
            error,
        });
    }
}

module.exports = {
    postShoppingCart,
    getShoppingCart,
    getShoppingCartById
};