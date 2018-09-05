const express = require('express');
const articleController = require('../controllers/article');
const router = express.Router();

router.route('/').get(articleController.listArticle);
router.route('/').post(articleController.createArticle);
router.route('/:articleId').delete(articleController.deleteArticle);
router.route('/:articleId').get(articleController.detailArticle);

// router.route('/patient_record/:id').get(patientController.recordPatients);

module.exports = router;
