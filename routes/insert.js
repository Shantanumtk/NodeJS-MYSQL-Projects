const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

const db_table = "friends";

Router.post("/", (req,res) => {
    let data = {first_name: req.body.first_name,
                last_name: req.body.last_name,
                cell_phone: req.body.cell_phone,
                age: req.body.age};
                
    let sqlQuery = `INSERT INTO ${db_table} SET ?`;
    mysqlConnection.query(sqlQuery,data, (err, rows, fields) => {
       if(!err)
       {
       res.send(rows);
       console.log("Record Inserted");
       console.log(rows);
       }
       else
       {
           console.log(err);
       } 
   });
});

module.exports = Router;