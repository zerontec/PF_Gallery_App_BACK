const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const artworkRoutes = require("./artworks");
const typesRoutes = require("./types_of_art");
const usersRoutes = require("./users");

const galleryRoutes = require("./gallery");

const { verifySignUp, authJwt } = require("../middleware");

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

router.get(
  "/dashboard/admin",
  [authJwt.verifyToken, authJwt.isAdmin],
  adminBoard
);

/////////////////////////////////////////////

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/home", artworkRoutes);
router.use("/types", typesRoutes);
router.use("/users", [authJwt.verifyToken, authJwt.isAdmin], usersRoutes);
router.use("/gallery", galleryRoutes);
router.get("/", (req, res) => {
  res.status(200).send(" > > > > ||| . . . GO TO /home please __ ||| > > >");
});

module.exports = router;

//RUTAS PARA PRUEBAS

//RGISTR USUARIO
// POST a   localhost:5040/auth/signup

//Ejemplo en postman
//{
/* "username": "Dania",
	"email":"dania@gmail.com",
	"name":"dania",
	"password":"12345678",
	"roles": ["user", "admin"]
} */

//INICIO DE USUARIO

// Un POST a  //localhost:5040/auth/signin
// el el body
/*   {
	"username":"Dania",
	"password": "12345678"
	
} */
// OBTENER TODOS LOS USURIOS
//  GET  http://localhost:5040/users/
// antes estar registrado e iniciar sesion como administrador
// agregar el token que se genera al iniciar sesion en Header
//luego hacer el get

//OBETNER USUARIO POR ID

// GET localhost:5040/users/11   => 11 es el id del usuerio
//siempre registrado como admin y pasarr el token

//CREAR USUARIO POR ADMIN
//POST 		http://localhost:5040/users/create

//en el Body ejemplo
/*  {
	
		"name":"daniel",
	"username": "daniel",
	"email":"daniel@gmail.com",

	"password":"12345678"

} */

// obtienes una respuata con el usuario creado verifiquen en get user
//pasen el token jejeje

// ACTUALIZAR USUARIO

//PUT http://localhost:5040/users/12  //se tiene que pasar el id
//en el body
//
/* {
           
  "name": "Danielos",
  "username": "danielos"
  

} */

//debemos obtener una respuesta con la actualizacion verifiquen tambien en get user

//BORRAR USUARIO

//DEL http://localhost:5040/users/3  se pasa un id tambien
