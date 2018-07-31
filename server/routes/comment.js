const express = require('express');
const commentController = require('../controllers/comments');
const router = express.Router();

router.route('/').get(commentController.listComment);
module.exports = router;
