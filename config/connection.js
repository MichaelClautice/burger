// require pkgs aka dependencies
// Initializes the npm packages used
require("dotenv").config();
const mysql = require("mysql");
const keys = require("./keys");
const pw = keys.password.pw


// setup the code to connect Node to MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: pw,
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;