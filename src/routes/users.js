const { Router } = require("express");
const router = Router();
const { getUsers, postUser, getUserById, getUserByName, putUser, deleteUser } = require("../controllers/users");


router.get('/', getUsers);
router.post('/', postUser);
router.get('/:id', getUserById);
router.get('/name/:name', getUserByName);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);


module.exports = router;