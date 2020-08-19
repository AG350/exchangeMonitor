const express = require('express')
const router = express.Router();
const quotesController = require('../controllers/quotesController');

router.get('/dolar', quotesController.dollarQuote);
router.get('/euro', quotesController.euroQuote);
router.get('/real', quotesController.realQuote);
router.get('/selected/:target', quotesController.selectedQuote);

module.exports = router;