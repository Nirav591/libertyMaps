// companyController.js

const companyModel = require('../models/companyModel');

const createCompany = async (req, res) => {
    const { companyName, mobile, companyId } = req.body;

    try {
        await companyModel.createCompany({ companyName, mobile, companyId });
        res.send('Company registered');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

module.exports = {
    createCompany,
};
