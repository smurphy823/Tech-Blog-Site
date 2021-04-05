const router = require('express').Router();
const userRoutes = require('./user');
const commentRoutes = require('./comment');

router.use('/users', userRoutes);
router.use('/comment', commentRoutes);


module.exports = router;