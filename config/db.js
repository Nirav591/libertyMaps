const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password:  't7x?}>rbmCa~we+',
    database: 'libertymaps',
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to the database as id ' + db.threadId);
});

module.exports = db;
