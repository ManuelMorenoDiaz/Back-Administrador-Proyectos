const Router = require('express');
const {getUsers, getUser, createUser, updateUser, deleteUser} = require('../controllers/usersController.js');
const authRequired = require('../middlewares/validateToken.js');

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', createUser);
router.delete('/users/:id', updateUser);
router.put('/users/:id', deleteUser);

module.exports = router;