const { Router } = require('express');

const artworkRoutes = require('./artworks');
const typesRoutes = require('./types_of_art');
const usersRoutes = require('./users');
const shoppingCartRoutes = require('./shopping_cart');
const galleryRoutes = require('./gallery');

const { verifySignUp,authJwt} = require('../middleware');

const router = Router();

const { signup, signin } = require("../controllers/auth.controller");

router.post(
  "/auth/signup",
  [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted],
  signup
);

router.post("/auth/signin", signin);

const {
  allAccess,
  userBoard,
  adminBoard,
} = require("../controllers/user.controller");

router.get("/auth/all", allAccess);

router.get("/auth/user", [authJwt.verifyToken], userBoard);


router.get(
  "/dashboard/admin",
  [authJwt.verifyToken, authJwt.isAdmin],
  adminBoard
);

router.use("/users", [authJwt.verifyToken, authJwt.isAdmin], usersRoutes);

router.use('/home', artworkRoutes);
router.use('/types', typesRoutes);

router.use('/gallery', galleryRoutes);
router.use('/shopping', shoppingCartRoutes)
router.get('/', (req, res) => {
    res.status(200).send(' > > > > ||| . . . GO TO /home please __ ||| > > >');

});

module.exports = router;
