const { Router } = require("express");
const router = Router();
const {getTypes} = require("../controllers/types_of_art");


router.get('/', async (req, res, next) => {
    try {
        return res.status(200).send(await getTypes());
    } catch (error) {
        return res.status(404).send(error, '||ERROR|| NOT TYPES ||ERROR||');
    }
});


module.exports = router;