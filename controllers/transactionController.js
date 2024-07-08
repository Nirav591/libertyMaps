// transactionController.js

const transactionModel = require('../models/transactionModel');

const createTransaction = async (req, res) => {
    const customerId = req.params.customerId; // Assuming customer ID is part of the URL params
    const { type, amount, reason, date, reference_number, name } = req.body;

    try {
        await transactionModel.createTransaction(customerId, { type, amount, reason, date, reference_number, name });
        res.send('Transaction created');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

const getTotalCreditsAndDebits = async (req, res) => {
    const customerId = req.params.customerId; // Assuming customer ID is part of the URL params

    try {
        const totals = await transactionModel.getTotalCreditsAndDebits(customerId);
        res.json(totals);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

// Example function to format and display SQL query results
const displaySQLQueryResults = (results) => {
    results.forEach(result => {
        console.log(`ID: ${result.id}, Customer ID: ${result.customer_id}, Type: ${result.type}, Amount: ${result.amount}, Reason: ${result.reason}, Date: ${result.date}, Reference Number: ${result.reference_number}, Name: ${result.name}, Created At: ${result.created_at}`);
    });
};

module.exports = {
    createTransaction,
    getTotalCreditsAndDebits,
    displaySQLQueryResults, // Add this function if you want to display query results
};
