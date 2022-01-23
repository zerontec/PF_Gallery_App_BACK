const { Router } = require("express");
const router = Router();
const {  getUsers, getUserById,putUser, deleteUser } = require("../controllers/users");

router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);


module.exports = router;