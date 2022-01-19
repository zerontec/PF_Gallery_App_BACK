require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/galleryb`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {  Gallery, User, Artwork, Type, Shopping_cart, Role} = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);


// Aca vendrian las relaciones
// Product.hasMany(Reviews);
// Gallery.hasMany(Artwork);
// Gallery.hasMany(User);  
// User.hasMany(Shopping_cart);
// Shopping_cart.belongsToMany(Artwork, { through: 'Shopping_cart_artwork' });
// Artwork.belongsToMany(Shopping_cart, { through: 'Shopping_cart_artwork' });
Artwork.belongsToMany(Type, {through: 'artwork_type'});
Type.belongsToMany(Artwork, {through: 'artwork_type'});
User.hasMany(Shopping_cart);
Shopping_cart.belongsToMany(Artwork, { through: 'Shopping_cart_artwork' });
User.belongsToMany(Role, {through: "user_Roles" });
Role.belongsToMany(User, {through: "user_Roles" });



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};





/* 
const { Gallery, User, Artwork, Type, Shopping_cart, Role } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Gallery.hasMany(Artwork);
Gallery.hasMany(User); 
User.hasMany(Shopping_cart);
Shopping_cart.belongsToMany(Artwork, { through: 'Shopping_cart_artwork' });
Artwork.belongsToMany(Shopping_cart, { through: 'Shopping_cart_artwork' });
Artwork.belongsToMany(Type, {through: 'artwork_type'});
Type.belongsToMany(Artwork, {through: 'artwork_type'});

User.belongsToMany(Role, {through: "user_Roles" });
Role.belongsToMany(User, {through: "user_Roles" });
 */