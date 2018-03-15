// import orm.js into burger.js
var orm = require('../config/orm.js');

// in burger.js, create code to call the ORM functions via burger specific input for the ORM

var burger = {
    selectAll: (checkbox) => {
        orm.selectAll("burgers", (res) => {
            checkbox(res);
        });
    },

    insertOne: (cols, vals, checkbox) => {
        orm.insertOne("burgers", cols, vals, (res) => {
            checkbox(res);
        });
    },

    updateOne : (objColVals, condition, checkbox) => {
        orm.updateOne("burgers", objColVals, condition, (res)  => {
            checkbox(res);
        });
    },

    delete : (condition, checkbox) => {
        orm.delete("burgers", condition, (res) => {
            checkbox(res);
        });
    }
};

// Export at the end of burger.js
module.exports = burger;



