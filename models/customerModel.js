// customerModel.js

const db = require('../config/db'); // Assuming you have a database configuration

const createCustomer = async (customerId, customerName, customerMobile) => {
    const query = 'INSERT INTO customers (customer_id, customer_name, customer_mobile) VALUES (?, ?, ?)';
    const values = [customerId, customerName, customerMobile];

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
