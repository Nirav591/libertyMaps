const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password:  't7x?}>rbmCa~we+',
    database: 'libertymaps',
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

module.exports = db;