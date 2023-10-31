const Router = require('express');
const { getNotifications,
        getNotification, 
        createNotification, 
        updateNotification, 
        deleteNotification} = require('../controllers/notificationsController.js');
const authRequired = require('../middlewares/validateToken.js');

const router = Router()

router.get('/notifications', getNotifications);
router.get('/notifications/:id', getNotification);
router.post('/notifications', createNotification);
router.delete('/notifications/:id', deleteNotification);
router.put('/notifications/:id', updateNotification);

module.exports = router;