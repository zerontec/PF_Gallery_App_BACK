const { Router } = require("express");
const router = Router();
const {   
    getApiToDb,
    getByName,
    postArtwork,
} = require("../controllers/artworks.js");

   

router.get('/', getApiToDb);
router.get('/name', getByName);
router.post('/', postArtwork);
     

module.exports = router;