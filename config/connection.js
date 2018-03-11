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

// Connect to MySQL db
// should this conection go somewhere else?
connection.connect(function (error) {
    if (error) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;


