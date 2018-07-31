const express = require('express');
const visitorController = require('../controllers/visitors');
const router = express.Router();

router.route('/').get(visitorController.listVisitor);

module.exports = router;