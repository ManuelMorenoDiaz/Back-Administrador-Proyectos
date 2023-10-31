const Router = require('express');
const { getGuests,
        getGuest,
        createGuest,
        updateGuest,
        deleteGuest
      } = require('../controllers/guestsController.js');

const authRequired = require('../middlewares/validateToken.js');

const router = Router()

router.get('/guests', getGuests);
router.get('/guests/:id', getGuest);
router.post('/guests', createGuest);
router.delete('/guests/:id', updateGuest);
router.put('/guests/:id', deleteGuest);

module.exports = router;