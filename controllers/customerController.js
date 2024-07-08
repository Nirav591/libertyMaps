// customerController.js

const customerModel = require('../models/customerModel');

const createCustomer = async (req, res) => {
    const { customerId, customerName, customerMobile, companyId } = req.body;

    try {
        await customerModel.createCustomer(customerId, customerName, customerMobile, companyId);
        res.send('Customer created');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

module.exports = {
    createCustomer,
};
