// customerController.js

const customerModel = require('../models/customerModel');

const createCustomer = async (req, res) => {
    const { customerId, customerName, customerMobile } = req.body;

    try {
        await customerModel.createCustomer(customerId, customerName, customerMobile);
        res.send('Customer created');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

module.exports = {
    createCustomer,
};
