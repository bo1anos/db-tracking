
const mysql = require("mysql2");

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'eR77*links_',
        database: 'employees_db',

    },
    console.log('successfully connected to the database')
);

module.exports = db;