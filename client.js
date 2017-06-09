var express = require('express');
var http = require('http');
var net = require('net');

var socket = net.connect(52273, '127.0.0.1', function () {
  console.log('client connect master server..port 52273');
});

socket.on('data',function(data){
  console.log(data.toString());
});

socket.write('test');

var app = express();

var client = http.createServer(app);

client.listen( 52274, function () {
  console.log('Web Server Running at https://127.0.0.1:52274');
});
