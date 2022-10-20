const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");
const db_table = "friends";

Router.get("/", (req,res) => {
    let sqlQuery = `Select * FROM ${db_table} LIMIT 5`;
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

Router.get("/:id", (req,res) => {
    let sqlQuery = `Select * from ${db_table} where friend_id =` + req.params.id;
    
    mysqlConnection.query(sqlQuery, (err, rows, fields) =>
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