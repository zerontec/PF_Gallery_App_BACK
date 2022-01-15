const { Router } = require("express");
const router = Router();
const {   
    getAllArtwors,
    
} = require("../controllers/artworks.js");

  

router.get('/', getAllArtwors);


module.exports = router;