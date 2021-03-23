const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

var routes = require('./api/routes/index');
routes(app);


app.listen(port);
console.log("server started on: " + port);