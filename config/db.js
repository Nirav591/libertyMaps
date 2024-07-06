const mysql = require('mysql2');
const config = {
    host: 'localhost',
    user: 'admin',
    password:  't7x?}>rbmCa~we+',
    database: 'libertymaps',
};

let connection;

function handleDisconnect() {
    connection = mysql.createConnection(config);

    connection.connect(err => {
        if (err) {
            console.error('Error connecting to the database:', err);
            setTimeout(handleDisconnect, 2000); // Retry connection after 2 seconds
        }
    });

    connection.on('error', err => {
        console.error('Database error:', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect(); // Reconnect if connection is lost
        } else {
            throw err;
        }
    });
}

handleDisconnect();
