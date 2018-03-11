// Import-require connection.js
var connection = require("./connection.js");

// In orm.js, create methods to execute MySQL cmnds in the controllers.
// These methods are needed to retrieve & store data in the db
var orm = {
// selectAll()
    selectAll: function (tableInput, checkbox) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (error, result) {
            if (error) {
            }
            checkbox(result);
        });
    },
// insertOne()
    insertOne: function (table, cols, vals, checkbox) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        console.log(queryString);
        connection.query(queryString, vals, function (error, result) {
            if (error) {
                throw error;
            }
            checkbox(result);
        });
    },
// `updateOne()`
    updateOne: function(table, objColVals, condition, checkbox) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);
        connection.query(queryString, function (error, result) {
            if (error) {
                throw error;
            }
            checkbox(result);
        });
    },
};

//exporting orm object for burger.js
module.exports = orm;