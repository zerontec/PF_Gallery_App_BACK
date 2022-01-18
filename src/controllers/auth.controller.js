const { User, Role } = require("../db");
const config = require("../config/auth.config");
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

const signup = (req, res) => {
  User.create({
    name: req.body.name,
    username: req.body.username,
    email:req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then((user) => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          user.setRoles(roles).then(() => {
            res.send({ message: "Usuario Registrado Exitosamente" });
          });
        });
      } else {
        user.setRoles(
          [1].then(() => {
            res.send({ message: "Usuario Registrado Exitosamente" });
          })
        );
      }
    })

    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
const signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "Usuario no Encontrado." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Password Invalido!",
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name);
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

module.exports = {
    signin,signup
}