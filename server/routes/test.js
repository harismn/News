const express = require('express');
const testController = require('../controllers/test');
const router = express.Router();

router.route('/').get(testController.test);

// router.route('/patient_record/:id').get(patientController.recordPatients);

module.exports = router;
