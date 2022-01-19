const { User, Shopping_cart } = require("../db");
var bcrypt = require("bcryptjs");



async function getUsers(req, res, next) {
  try {
    let users = await User.findAll({
      include: {
        model: Shopping_cart,

        attributes: [
          "id",
          "user_id",
          "artwork_id",
          "quantity",
          "description",
          "price",
          "total",
        ],
      },
      attributes: ["id", "username", "email"],
    });
    /*   return (data && data.length > 0 ? res.send({status: true, data}): res.send({status:false, message:"No se encontro data"})) */
    return users && users.length > 0
      ? res.status(200).send({ users })
      : res.status(400).send({ message: "No se encontro usuarios" });
  } catch (error) {
    console.log(error);
    res.send({ message: "algo salio mal " });
  }
}

async function postUser(req, res, next) {
  try {
  } catch (error) {
    next(error);
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

async function postUser(req, res, next) {
  try {
    const { name, username, email, password } = req.body;
    const allUsers = await User.findAll();
    if (!name || !username || !email || !password) {
      return res.send({
        message: "Los campos name username email y password son obligatorios",
      });
    } else if (username) {
      let userName = await allUsers.filter((r) =>
        r.username.toLowerCase().includes(username.toLowerCase())
      );
      if (userName.length) {
        return res.send(" email o username ya existe en la base de datos");
      }
    }

    let newUser = await User.create({
      name,
      username,
      email,
      password: bcrypt.hashSync(req.body.password, 8),
    });

    return newUser
      ? res.status(200).send({ newUser, message: "usario creado con exito " })
      : res.status(400).send({ message: "no se pudo crear :( " });
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
  postUser,
  getUserById,
  /*  getUserByName, */
  putUser,
  deleteUser,
};

// users
// POST
// GET
// PULL
// DELETE
// un usuario un carrito
// muchos carritos muchas obras de arte
