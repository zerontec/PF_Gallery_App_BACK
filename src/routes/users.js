const { Router } = require("express");
const router = Router();
const { getUsers } = require("../controllers/users");


router.get('/', getUsers);


module.exports = router;