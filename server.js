var express = require('express');
var app = express();

var PORT = 3000;
 
app.get('/', function (req, res) {
  res.sendfile(__dirname + "/views/main.html");
})
 
app.listen(PORT);