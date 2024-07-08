// routes/company.js

const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

// POST /api/companies/create
router.post('/create', companyController.createCompany);

// GET /api/companies/:companyId
router.get('/:companyId', companyController.getCompanyById);

// GET /api/companies
router.get('/', companyController.getAllCompanies); // Route to fetch all companies

module.exports = router;
