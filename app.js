var express = require('express'),
    fs = require('fs'),
    ejs = require('ejs'),
    http = require('http'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    net = require('net');

var http_app = express(),
    master_app = express();

var http_port = 52273, // web-server port
    master_port = 52274; // master-sever port

http_app.use(bodyParser.urlencoded( { extended : false } ));

// http_app.get('/', function( req, res ) {
//     var socket = net.connect(52274,'127.0.0.1',function () {
//       console.log('Client Start');
//     });
//
//     socket.on('data', function (data) {
//       console.log(data.toString());
//     });
//
//     var data = {
//       'name' : 'test'
//     };
//
//     socket.write(data);
// });

// var web_server = require('http').createServer(http_app);
//
// web_server.listen( http_port, function () {
//   console.log('Web Server Running at http://127.0.0.1:' + http_port);
// });

var master_server = require('http').createServer(master_app);

net.createServer( function ( socket ) {

  socket.on('data', function (data) {
    console.log(data.toString());

    socket.write(data);
  });
}).listen(52273, function () {
    console.log('Master Server Running at https://127.0.0.1:' + master_port );
  });






// master_server.listen( master_port, function () {
//   console.log('Master Server Running at http://127.0.0.1:' + master_port);
// });


// master_app.listen(52273, function () {
//   console.log('Server Running at http://127.0.0.1:52273');
// });
