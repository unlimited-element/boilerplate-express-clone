var express = require('express');
var app = express();


app.get("/", function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

 app.use('/public', express.static(__dirname + '/public'))


app.get("/json", function(res, req) {
  res.json( {"message": "Hello json"} )
});






















 module.exports = app;
