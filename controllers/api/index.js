const router = require('express').Router();
const userRoutes = require('./userRoutes');
const techRoutes = require('./techRoutes');
const workorderRoutes = require('./workorderRoutes');
const searchRoutes = require('./searchRoutes');


router.use('/users', userRoutes);
router.use('/techs', techRoutes);
router.use('/workorders', workorderRoutes);
router.get('/search', searchRoutes.searchWorkorder)

module.exports = router;
