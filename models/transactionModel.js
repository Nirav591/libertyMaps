// transactionModel.js

const db = require('../config/db'); // Assuming you have a database configuration

// Function to create a new transaction
const createTransaction = async (customerId, transactionData) => {
    const { type, amount, reason, date, reference_number, name } = transactionData;
    const query = `
        INSERT INTO transactions (customer_id, type, amount, reason, date, reference_number, name)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [customerId, type, amount, reason, date, reference_number, name];

    try {
        const result = await db.query(query, values);
        return result;
    } catch (error) {
        throw error;
    }
};

// Function to get total credits and debits for a customer
const getTotalCreditsAndDebits = async (customerId) => {
    const query = `
        SELECT 
            SUM(CASE WHEN type = 'credit' THEN amount ELSE 0 END) AS total_credits,
            SUM(CASE WHEN type = 'debit' THEN amount ELSE 0 END) AS total_debits
        FROM transactions
        WHERE customer_id = ?
    `;
    const values = [customerId];

    try {
        const result = await db.query(query, values);
        return result[0]; // Assuming you expect a single row result
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createTransaction,
    getTotalCreditsAndDebits,
};
