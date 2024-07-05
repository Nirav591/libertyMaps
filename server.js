const express = require('express');
const db = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const otpRoutes = require('./routes/otpRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/otp', otpRoutes);
app.use('/api', userRoutes);

const PORT = 6360;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
