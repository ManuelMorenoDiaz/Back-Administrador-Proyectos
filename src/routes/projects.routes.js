const Router = require('express');
const {  getProjects, getProject, createProject, updateProject, deleteProject} = require('../controllers/projectsController.js');
const authRequired = require('../middlewares/validateToken.js');

const router = Router()

router.get('/projects', getProjects);
router.get('/projects/:id', getProject);
router.post('/projects', createProject);
router.delete('/projects/:id', deleteProject);
router.put('/projects/:id', updateProject);

module.exports = router;