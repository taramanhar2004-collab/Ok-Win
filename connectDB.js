const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'goagame',
    password: 'goagame',
    database: 'goagame'
});


export default connection;