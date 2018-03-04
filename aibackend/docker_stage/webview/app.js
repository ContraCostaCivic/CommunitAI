//
// Serve client dashboard via https
//
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var os = require('os');
var basicAuth = require('express-basicauth')
var fs = require('fs');
//var https = require('https');
var http = require('http');
 
var app = express();

app.use(basicAuth({ username: 'walnut', password: 'creek' }));


app.set('view engine', 'html');
app.use('/', express.static('./html/'));


var server = http.createServer(app);
listInterfaces();
server.listen(80);

console.log(server);
//var server = app.listen(80, listInterfaces );

function listInterfaces() {
  var ifaces = os.networkInterfaces();
  console.log("Listening on All Interfaces:");
  console.log(ifaces);
}
