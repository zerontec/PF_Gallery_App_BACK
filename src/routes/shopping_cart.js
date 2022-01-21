const { Router } = require("express");
const router = Router();
const { postShoppingCart, getShoppingCart } = require("../controllers/shopping_carts");


router.post('/', postShoppingCart);
router.get('/:id', getShoppingCart);



module.exports = router;