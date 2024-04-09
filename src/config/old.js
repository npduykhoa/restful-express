require('dotenv').config()
const mysql = require('mysql2')

// Create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT, //default 3306
  user: process.env.DB_USER, //default: empty
  password: process.env.DB_PASSWORD, //default: empty
  database: process.env.DB_NAME //default: empty
})

module.exports = connection
