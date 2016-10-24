var express = require('express');
var http = require('http');
var url = require('url');
var app = express();
var parser = require('./parser');
var bodyParser = require('body-parser');

var PORT = 3000;

//changing folders permissions to Public
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
app.use('/angular', express.static(__dirname + '/node_modules/angular'));

// Add headers
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// get index
app.get("/", function (request, response) {
    response.sendFile(__dirname + "/views/index.html");
});

// post
app.post("/submit", function (request, response) {
    var dateString = request.body.dateString;
    var dayBeforeMonth = request.body.dayBeforeMonth;

    var result = parser.parse(dateString, dayBeforeMonth);
    response.json(result);
});

// listen
var server = app.listen(PORT, function () {
    console.log("Express server listening on port", PORT);
});