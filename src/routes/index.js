const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const artworkRoutes = require('./artworks');
const typesRoutes = require('./types_of_art');
const usersRoutes = require('./users');

const galleryRoutes = require('./gallery');

const { verifySignUp,authJwt} = require('../middleware');




const router = Router();







const { signup, signin } = require("../controllers/auth.controller");

router.post(
  "/auth/signup",
  [verifySignUp.checkDuplicateUsernameOrEmail, 
    verifySignUp.checkRolesExisted],
  signup
);

router.post("/auth/signin", signin);



const {
  allAccess,
  userBoard,
  vendedorBoard,
  adminBoard,
} = require("../controllers/user.controller");

router.get("/auth/all", allAccess);

router.get("/auth/user", [authJwt.verifyToken], userBoard);

router.get(
  "/auth/vend",
  [authJwt.verifyToken, authJwt.isVendedor],
  vendedorBoard
);

router.get("/dashboard/admin", [authJwt.verifyToken, authJwt.isAdmin], adminBoard);




/////////////////////////////////////////////


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/home', artworkRoutes);
router.use('/types', typesRoutes);
router.use('/users',[authJwt.verifyToken, authJwt.isAdmin], usersRoutes);
router.use('/gallery', galleryRoutes);
router.get('/', (req, res) => {
    res.status(200).send(' > > > > ||| . . . GO TO /home please __ ||| > > >');
});



module.exports = router;
