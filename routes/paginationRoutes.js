const express = require('express');
const router = express.Router();
const paginationController = require('../controllers/paginationController');
const paginate = require('../middlewares/pagination');
const faqModel = require('../models/faqModel');

router.get('/faqs', paginate(faqModel.getAll()), paginationController.getFaqsByPage);

module.exports = router;
