const { Router } = require("express");
const router = Router();
const { getUsers, getUserById, getUserByName, putUser, deleteUser } = require("../controllers/users");


router.get('/', getUsers);

router.get('/:id', getUserById);
router.post('/create', postUser)
/* router.get('/search', getUserByName); */
router.put('/:id', putUser);
router.delete('/:id', deleteUser);


module.exports = router;