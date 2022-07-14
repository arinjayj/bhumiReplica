const express = require('express');
var http = require("http");
var async = require('async');
const app = express();
var settings = require('./config/settings.js');


var globSync = require('glob').sync;
var allRoutes = globSync('./routes/**/*.js', {
    cwd: __dirname
}).map(require);
allRoutes.forEach(function(routes) {
    app.use(settings.contextRoot,routes);
}); 
 
var port = settings.appPort;
var server = http.createServer(app);
var setRequestTimeOut = server.listen(port, function(err) {
if (err) throw err;
    console.log('app listening on port ' + port + '!')
});
setRequestTimeOut.timeout = settings.timeOut; 