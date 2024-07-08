// models/companyModel.js

const db = require('../config/db');

const createCompany = async ({ company_name, mobile }) => {
    const query = 'INSERT INTO companies (company_name, mobile, created_at) VALUES (?, ?, ?)';
    const values = [company_name, mobile, new Date()];

    const [result] = await db.query(query, values);
    return result.insertId;
};

const getCompanyById = async (companyId) => {
    const query = 'SELECT * FROM companies WHERE id = ?';
    const [rows] = await db.query(query, [companyId]);
    return rows[0];
};

const getAllCompanies = async () => {
    const query = 'SELECT * FROM companies';
    const [rows] = await db.query(query);
    return rows;
};

module.exports = {
    createCompany,
    getCompanyById,
    getAllCompanies,
    // Add other model functions as needed
};
