// transactionRoutes.js

const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Endpoint for creating transactions for a specific customer
router.post('/:customerId/create', transactionController.createTransaction);

// Endpoint for getting total credits and debits for a specific customer
router.get('/:customerId/total', transactionController.getTotalCreditsAndDebits);

module.exports = router;
