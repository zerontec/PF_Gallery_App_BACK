const { Router } = require("express");
const { verifySignUp, authJwt } = require("../middleware");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const { signup, signin } = require("../controllers/auth.controller");

router.post(
  "/auth/signup",
  [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted],
  signup
);

router.post("/auth/signin", signin);

//para pruebas
const {
  allAccess,
  userBoard,
  vendedorBoard,
  adminBoard,
} = require("../controllers/user.controller");

router.get("/test/all", allAccess);

router.get("/test/user", [authJwt.verifyToken], userBoard);

router.get(
  "/test/vend",
  [authJwt.verifyToken, authJwt.isVendedor],
  vendedorBoard
);

router.get("/test/admin", [authJwt.verifyToken, authJwt.isAdmin], adminBoard);

module.exports = router;
