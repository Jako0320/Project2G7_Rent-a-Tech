const router = require('express').Router();
const userRoutes = require('./userRoutes');
const techRoutes = require('./techRoutes');
const workorderRoutes = require('./workorderRoutes');

router.use('/users', userRoutes);
router.use('/techs', techRoutes);
router.use('/workorders', workorderRoutes);

module.exports = router;
