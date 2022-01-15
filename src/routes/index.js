const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const artworkRoutes = require('./artworks');
const typesRoutes = require('./types_of_art');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/home', artworkRoutes);
router.use('/types', typesRoutes);
router.get('/', (req, res) => {
    res.status(200).send('--->>> go to /home please <<<---');
});



module.exports = router;
