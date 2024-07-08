// userController.js

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const registerUser = async (req, res) => {
    const { username, email, password, role } = req.body;

    try {
        // Check if user already exists
        const existingUser = await userModel.getUserByEmail(email);
        if (existingUser.length > 0) {
            return res.status(400).send('User already exists');
        }

        // If user does not exist, proceed with registration
        const hashedPassword = await bcrypt.hash(password, 10);
        const roleId = role === 'admin' ? 2 : 1;

        const newUser = {
            username,
            email,
            password: hashedPassword,
            role_id: roleId,
        };

        await userModel.createUser(newUser);
        res.send('User registered');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.getUserByEmail(email);
        if (user.length === 0) {
            return res.status(400).send('User not found');
        }

        const isMatch = await bcrypt.compare(password, user[0].password);
        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }

        const token = jwt.sign({ id: user[0].id, role: user[0].role_id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

module.exports = {
    registerUser,
    loginUser,
};
