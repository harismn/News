const express = require('express');
const userController = require('../controllers/users');
const router = express.Router();

router.route('/').get(userController.listUser);




//router.route('/patient_record/:id').get(patientController.recordPatients);

module.exports = router;