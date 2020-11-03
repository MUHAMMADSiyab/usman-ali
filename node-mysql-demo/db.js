const mysql = require("mysql");

// Create DB Connection
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "testdb",
});

connection.connect();

module.exports = connection;
