const Company = require('../models/companyModel');

exports.createCompany = (req, res) => {
    const { name, mobile } = req.body;

    if (!name || !mobile) {
        return res.status(400).send({ error: true, message: 'Please provide company name and mobile' });
    }

    Company.create(name, mobile, (error, results) => {
        if (error) throw error;
        res.send({ error: false, data: results, message: 'New company has been created successfully.' });
    });
};

exports.getAllCompanies = (req, res) => {
    Company.getAll((error, results) => {
        if (error) throw error;
        res.send({ error: false, data: results, message: 'Companies list.' });
    });
};

exports.getCompanyById = (req, res) => {
    const companyId = req.params.id;

    Company.getById(companyId, (error, results) => {
        if (error) throw error;
        res.send({ error: false, data: results[0], message: 'Company details.' });
    });
};

exports.updateCompanyById = (req, res) => {
    const companyId = req.params.id;
    const { name, mobile } = req.body;

    if (!name || !mobile) {
        return res.status(400).send({ error: true, message: 'Please provide company name and mobile' });
    }

    Company.updateById(companyId, name, mobile, (error, results) => {
        if (error) throw error;
        res.send({ error: false, data: results, message: 'Company has been updated successfully.' });
    });
};

exports.deleteCompanyById = (req, res) => {
    const companyId = req.params.id;

    Company.deleteById(companyId, (error, results) => {
        if (error) throw error;
        res.send({ error: false, data: results, message: 'Company has been deleted successfully.' });
    });
};
