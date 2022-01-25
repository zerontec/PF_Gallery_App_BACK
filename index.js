//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { getTypes } = require('./src/controllers/types_of_art');
const { getApiToDb } = require('./src/controllers/artworks');

const {Role }= require ('./src/db');

const port = process.env.PORT || 5040;


function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "vendedor"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}


// Syncing all the models at once.
conn.sync({ force: true}).then(() => {
  server.listen(port, () => {
    console.log('o|O_O|o robot Σωκράτης listening at 5040');
     // eslint-disable-line no-console
initial()
  });
  getTypes(); // <<<--- para iniciar la base de datos
  getApiToDb(); 
});  

// deployment heroku
