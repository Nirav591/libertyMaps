const db = require('../config/db');

const Company = {
    create: (name, mobile, callback) => {
        db.query('INSERT INTO companies (name, mobile) VALUES (?, ?)', [name, mobile], callback);
    },
    getAll: callback => {
        db.query('SELECT * FROM companies', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM companies WHERE company_id = ?', [id], callback);
    },
    updateById: (id, name, mobile, callback) => {
        db.query('UPDATE companies SET name = ?, mobile = ? WHERE company_id = ?', [name, mobile, id], callback);
    },
    deleteById: (id, callback) => {
        db.query('DELETE FROM companies WHERE company_id = ?', [id], callback);
    }
};

module.exports = Company;
