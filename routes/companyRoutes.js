// routes/companyRoutes.js

const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.post('/companies', companyController.createCompany);
router.get('/companies/:companyId', companyController.getCompanyById);

module.exports = router;
