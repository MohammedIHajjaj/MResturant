const mysql = require('mysql');

const db_config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mrestaurant'
};

let connection = mysql.createConnection(db_config);

module.exports = connection;