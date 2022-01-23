const { User, Shopping_cart, Artwork } = require("../db");

const axios = require("axios");

async function getUsers(req, res, next) {
    try {
        console.log("entramos a getUsers");
        const users = await User.findAll({
            attributes: ["id", "name", "username", "email", "image"],
        });
        const userShopping = users.map(async (user) => {
          var shoppingCart = await Shopping_cart.findAll({
            where: {
              userId: user.id,
            },
            include: [
              {
                model: Artwork,
              },
            ],
            attributes: ["id", "quantity", "description", "price", "total"],
          });
          // console.log("shoppingCart", shoppingCart);
            return {
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                image: user.image,
                shoppingCart: shoppingCart
            };
        });
        Promise.all(userShopping).then((data) => {
            // console.log("data", data);
            res.status(200).send({ data });
        });
         
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los usuarios",
            error,
        });
    }
}


async function getUserById(req, res, next) {
  try {
    let { id } = req.params;
    let data = await User.findOne({
      where: { id },
    });
    return data
      ? res.status(200).send({ data, message: "Id encontrado" })
      : res.status(400).send({ message: "No se encontro ID " });
  } catch (error) {
    console.log(error);
    res.send({ message: "algo salio mal " });
  }
}

async function putUser(req, res, next) {
  try {
    let data = await User.findByPk(req.params.id);
    data.update(req.body);
    res
      .status(202)
      .send({ data, message: "Usuario Actualizado Exitosamente " });
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(req, res, next) {
  try {
    let { id } = req.body;
    if (id) {
      const data = await User.findOne({
        where: { id },
      });
      if (data) {
        await data.destroy();
        res.status(200).send({ message: "usuario borrado satisfactoriamente" });
      } else {
        res.status(400).send({ message: "usuario no Existe" });
      }
    }
  } catch (error) {
    console.log(error);
    res.send({ message: "algo salio mal " });
  }
}

module.exports = {
  getUsers,
  getUserById,
  putUser,
  deleteUser,
};


