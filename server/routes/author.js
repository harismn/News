const express = require('express');
const authorController = require('../controllers/author');
const router = express.Router();

router.route('/').get(authorController.listAuthor);


//router.route('/patient_record/:id').get(patientController.recordPatients);

module.exports = router;