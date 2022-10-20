const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

const db_table = "friends";

Router.delete('/:id', (req,res) => {
    let sqlQuery = `DELETE FROM ${db_table} WHERE friend_id=`+req.params.id+``;
    mysqlConnection.query(sqlQuery , (err, rows, fields) =>
    {
        if(!err)
        {
            res.send(rows);
            console.log(rows);
        }
        else
        {
            console.log(err);
        }
    })
});

module.exports = Router;