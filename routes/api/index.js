// Express router
const router = require('express').Router();

// User and Thoughts routes
const usersRoutes = require('./user-routes');
const thoughtsRoutes = require('./thought-routes');

// Add /users and /thoughts to created routes
router.use('/users', usersRoutes);
router.use('/thoughts', thoughtsRoutes);


module.exports = router;