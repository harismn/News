const express = require('express');
const register = require('../controllers/register');
// const checkAuth = require('../middlewares/auth');

const router = express.Router();

router.post("/signup", register.signup);

router.post("/signin", register.signin);

module.exports = router;
