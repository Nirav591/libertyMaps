const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
require('dotenv').config();

const register = async (req, res) => {
    const { username, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const roleId = role === 'admin' ? 2 : 1;

    const newUser = {
        username,
        email,
        password: hashedPassword,
        role_id: roleId,
    };

    userModel.createUser(newUser, (err, result) => {
        if (err) return res.status(500).send('Server error');
        res.send('User registered');
    });
};

const login = (req, res) => {
    const { email, password } = req.body;

    userModel.getUserByEmail(email, async (err, result) => {
        if (err) return res.status(500).send('Server error');

        if (result.length === 0) {
            return res.status(400).send('User not found');
        }

        const user = result[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }

        const token = jwt.sign({ id: user.id, role: user.role_id },'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
    });
};

module.exports = {
    register,
    login,
};
