// import-require connection.js into orm.js
var connection = require("./connection.js");

// in orm.js, define methods to execute MySQL cmnds in the controllers
// these methods retrieve & store data in the db
var orm = {

// selectAll() via Es6 fat arrow
// replace var w/ ES6 let
selectAll: (tableInput, checkbox) => {
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, (error, result) => {
      if (error) {throw error};
      checkbox(result);
    });
  },

// insertOne() via Es6 fat arrow
// replace var w/ ES6 let
insertOne: (tableInput, cols, vals, checkbox) =>  {
    let queryString = "INSERT INTO " + tableInput;
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
// updateOne() via Es6 fat arrow
// replace var w/ ES6 let
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
}

}; // end ORM
//exporting orm object for burger.js
module.exports = orm;