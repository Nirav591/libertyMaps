const nodemailer = require('nodemailer');
const userModel = require('../models/userModel');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "unizeinventiv@gmail.com",
        pass: "Unize@5916310",
    },
});

const forgotPassword = (req, res) => {
    const { email } = req.body;

    userModel.getUserByEmail(email, (err, result) => {
        if (err) return res.status(500).send('Server error');

        if (result.length === 0) {
            return res.status(400).send('User not found');
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const mailOptions = {
            from:  "unizeinventiv@gmail.com",
            to: email,
            subject: 'Your OTP Code',
            text: `Your OTP code is ${otp}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send(error.toString());
            }

            res.send('OTP sent to email');
        });
    });
};

const verifyOtp = (req, res) => {
    const { email, otp } = req.body;

    // OTP verification logic
    res.send('OTP verified');
};

module.exports = {
    forgotPassword,
    verifyOtp,
};
