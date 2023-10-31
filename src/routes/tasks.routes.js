const Router = require('express');
const {getTasks, getTask, createTask, updateTask, deleteTask} = require('../controllers/tasksController.js');
const authRequired = require('../middlewares/validateToken.js');

const router = Router()

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTask);
router.post('/tasks', createTask);
router.delete('/tasks/:id', deleteTask);
router.put('/tasks/:id', updateTask);

module.exports = router;