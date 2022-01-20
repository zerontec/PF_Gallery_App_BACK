const { Router } = require("express");
const router = Router();
const { postGallery, getGallery, putGallery } = require("../controllers/gallery");


router.post('/', postGallery);
router.get('/:id', getGallery);
router.put('/:id', putGallery);


module.exports = router;