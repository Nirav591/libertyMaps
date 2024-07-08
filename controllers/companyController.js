// controllers/companyController.js

const companyModel = require('../models/companyModel');

const createCompany = async (req, res) => {
    const { company_name, mobile } = req.body;

    try {
        const companyId = await companyModel.createCompany({ company_name, mobile });
        res.json({ id: companyId, company_name, mobile, created_at: new Date() });
    } catch (error) {
        console.error('Error creating company:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

const getCompanyById = async (req, res) => {
    const { companyId } = req.params;

    try {
        const company = await companyModel.getCompanyById(companyId);
        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.json(company);
    } catch (error) {
        console.error('Error fetching company:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

const getAllCompanies = async (req, res) => {
    try {
        const companies = await companyModel.getAllCompanies();
        const transformedCompanies = companies.map(company => ({
            id: company.id,
            company_name: company.company_name,
            mobile: company.mobile,
            created_at: company.created_at
            // Add more fields as needed
        }));
        res.json(transformedCompanies);
    } catch (error) {
        console.error('Error fetching companies:', error);
        res.status(500).json({ error: 'Server error' });
    }
};


module.exports = {
    createCompany,
    getCompanyById,
    getAllCompanies,
    // Add other controller functions as needed
};
