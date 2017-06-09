var net = require('net');

net.createServer( function ( socket ) {
  socket.on('data', function (data) {
    console.log(data.toString('utf8'));

    socket.write(data);
  })
}).listen(52273, function () {
  console.log('Master Server Running at https://127.0.0.1:52273');
});
