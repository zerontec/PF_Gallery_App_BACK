const { Router } = require("express");
const router = Router();
const {   
    getApiToDb,
    getByName,
    postArtwork,
    getArtworkById,
} = require("../controllers/artworks.js");

router.get('/', getApiToDb);
router.get('/name', getByName);
router.post('/', postArtwork);
router.get('/:id', getArtworkById);

module.exports = router;