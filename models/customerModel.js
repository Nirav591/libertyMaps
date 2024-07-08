// customerModel.js

const db = require('../config/db'); // Assuming you have a database configuration

const createCustomer = async (customerId, customerName, customerMobile, companyId) => {
    const createdAt = new Date(); // Get current timestamp
    const query = 'INSERT INTO customers (customer_name, customer_mobile, customer_id, company_id, created_at) VALUES (?, ?, ?, ?, ?)';
    const values = [customerName, customerMobile, customerId, companyId, createdAt];

    try {
        const result = await db.query(query, values);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createCustomer,
};
