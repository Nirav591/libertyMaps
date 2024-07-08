// companyModel.js

const db = require('../config/db'); // Assuming you have a database configuration

const createCompany = async (companyData) => {
    const { companyName, mobile, companyId } = companyData;
    const query = 'INSERT INTO companies (company_name, mobile, company_id) VALUES (?, ?, ?)';
    const values = [companyName, mobile, companyId];

    try {
        const result = await db.query(query, values);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createCompany,
};
