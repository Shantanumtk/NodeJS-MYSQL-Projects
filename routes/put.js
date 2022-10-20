const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

const db_table = "friends";

Router.put('/cell_phone/:id',(req, res) => {
    let sqlQuery = `UPDATE ${db_table} SET cell_phone='`+req.body.cell_phone+`' WHERE friend_id=`+req.params.id;
    mysqlConnection.query(sqlQuery, (err, rows, fields) => {
        if(!err)
        {
        res.send(rows);
        console.log("Record Updated");
        console.log(rows);
        }
        else
        {
            console.log(err);
        }
    });
  });
  
  Router.put('/first_name/:id',(req, res) => {
    let sqlQuery = `UPDATE ${db_table} SET first_name='`+req.body.first_name+`' WHERE friend_id=`+req.params.id;
    mysqlConnection.query(sqlQuery, (err, rows, fields) => {
        if(!err)
        {
        res.send(rows);
        console.log("Record Updated");
        console.log(rows);
        }
        else
        {
            console.log(err);
        }
    });
  });
  
  Router.put('/last_name/:id',(req, res) => {
    let sqlQuery = `UPDATE ${db_table} SET last_name='`+req.body.last_name+`' WHERE friend_id=`+req.params.id;
    
    mysqlConnection.query(sqlQuery, (err, rows, fields) => {
        if(!err)
        {
        res.send(rows);
        console.log("Record Updated");
        console.log(rows);
        }
        else
        {
            console.log(err);
        }
    });
  });
  
  Router.put('/age/:id',(req, res) => {
    let sqlQuery = `UPDATE ${db_table} SET age='`+req.body.age+`' WHERE friend_id=`+req.params.id;
    
    mysqlConnection.query(sqlQuery, (err, rows, fields) => {
        if(!err)
        {
        res.send(rows);
        console.log("Record Updated");
        console.log(rows);
        }
        else
        {
            console.log(err);
        }
    });
  });

module.exports = Router;