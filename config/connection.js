require('dotenv').config();
mysql = require("mysql12");

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,

    },
    console.log('successfully connected to the database')
);

module.exports = db;