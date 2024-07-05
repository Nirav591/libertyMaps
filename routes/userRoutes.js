const express = require('express');
const userModel = require('../models/userModel');
const router = express.Router();

router.get('/users', (req, res) => {
    userModel.getAllUsers((err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server Error');
        }
        res.json(results);
    });
});

module.exports = router;
