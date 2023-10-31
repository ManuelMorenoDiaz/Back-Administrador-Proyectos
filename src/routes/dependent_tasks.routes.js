const Router = require('express');
const { getDependentTasks,
        getDependentTask,
        createDependentTask,
        updateDependentTask,
        deleteDependentTask
      } = require('../controllers/dependent_tasksController.js');

const authRequired = require('../middlewares/validateToken.js');

const router = Router()

router.get('/dependent_tasks', getDependentTasks);
router.get('/dependent_tasks/:id', getDependentTask);
router.post('/dependent_tasks', createDependentTask);
router.delete('/dependent_tasks/:id', deleteDependentTask);
router.put('/dependent_tasks/:id', updateDependentTask);

module.exports = router;