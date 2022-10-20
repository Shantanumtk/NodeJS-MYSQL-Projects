const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'APP_USER',
    password : 'APP_USER_PASS',
    database : 'profile',
    multipleStatements : true
});

mysqlConnection.connect((err) => {
   if(!err)
   {
    console.log(`Server Started At Port 8000`);
    console.log("Connected With MYSQL Database");
   }
   else
   {
    console.log("Connection Failed");
    return console.error("error" + err.message);
   }

});

module.exports = mysqlConnection;