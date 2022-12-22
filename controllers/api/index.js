const express = require('express');
const router = express.Router();

const usersController = require('./usersController');
router.use('/users', usersController)

const postsController = require('./postsController');
router.use('/posts', postsController)

const commentsController = require('./commentsController');
router.use('/comments', commentsController)

module.exports = router;