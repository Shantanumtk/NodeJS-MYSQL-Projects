const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

const SelectRoutes = require("./routes/select");
const InsertRoutes = require("./routes/insert");
const PutRoutes = require("./routes/put");
const DeleteRoutes = require("./routes/delete");

app.use("/api/friends", SelectRoutes);
app.use("/api/friends", InsertRoutes);
app.use("/api/friends", PutRoutes);
app.use("/api/friends", DeleteRoutes);

app.listen(8000);

