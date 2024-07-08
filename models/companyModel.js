// models/companyModel.js

const db = require('../config/db'); // Assuming you have a database connection

const createCompany = async (companyData) => {
    const { company_name, mobile } = companyData;
    const query = `
        INSERT INTO companies (company_name, mobile, created_at)
        VALUES (?, ?, NOW())
    `;
    const values = [company_name, mobile];
    
    try {
        const result = await db.query(query, values);
        return result.insertId; // Return the ID of the inserted company
    } catch (error) {
        throw error;
    }
};

const getCompanyById = async (companyId) => {
    const query = `
        SELECT id, company_name, mobile, created_at
        FROM companies
        WHERE id = ?
    `;
    const values = [companyId];
    
    try {
        const result = await db.query(query, values);
        return result[0]; // Assuming there's only one company with this ID
    } catch (error) {
        throw error;
    }
};

const getAllCompanies = async (req, res) => {
    try {
        const companies = await companyModel.getAllCompanies();
        // Filter out circular references here if necessary
        const companiesJson = JSON.stringify(companies, (key, value) => {
            if (typeof value === 'object' && value !== null) {
                if (key === 'someCircularProperty') {
                    return undefined; // Exclude specific circular property
                }
                // Add more conditions as needed to handle circular references
            }
            return value;
        });
        res.send(companiesJson);
    } catch (error) {
        console.error('Error fetching companies:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    createCompany,
    getCompanyById,
    getAllCompanies,
    // Add other CRUD operations as needed
};
