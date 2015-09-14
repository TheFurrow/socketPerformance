var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var ping = require('net-ping');
var raw = require ("raw-socket");

// If the line below is uncommented, the app.get-function is not called
//app.use(express.static(__dirname)); 

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html');
});

io.sockets.on('connection', function (socket) {
  socket.on('ping', function() {
	console.log("ping");
    socket.emit('pong');
  });
});



http.listen(3000, function(){
  console.log('listening on http://127.0.0.1:3000');
});
