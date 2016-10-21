var express = require('express');
var app = express();

var PORT = 3000;
 
//changing folders permissions to Public
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

// get index
app.get("/", function (request, response) {
    response.sendFile(__dirname + "/views/main.html");
});

// listen
var server = app.listen(PORT, function () {
    console.log("Express server listening on port", PORT);
});