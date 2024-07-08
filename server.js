const express = require('express');
const cors = require('cors');

const app = express();
const authRoutes = require('./routes/authRoutes');
const otpRoutes = require('./routes/otpRoutes');
const userRoutes = require('./routes/userRoutes');
const companyRoutes = require('./routes/companyRoutes');
const customerRoutes = require('./routes/customerRoutes');


require('dotenv').config();

// List of allowed origins
const allowedOrigins = ['http://localhost:3000', 'https://yourproductiondomain.com'];

const corsOptions = {
  origin: function (origin, callback) {
    // Check if the origin is in the allowedOrigins list or if there's no origin (for non-browser requests)
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // if you need to send cookies with the requests
};

// Use CORS middleware with the defined options
app.use(cors(corsOptions));

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/otp', otpRoutes);
app.use('/api', userRoutes);
app.use('/companies', companyRoutes);
app.use('/customers', customerRoutes);
const PORT = process.env.PORT || 6360;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
