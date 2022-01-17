const { Router } = require("express");
const router = Router();
const {   
    getApiToDb,
    
} = require("../controllers/artworks.js");

  

router.get('/', getApiToDb);


module.exports = router;