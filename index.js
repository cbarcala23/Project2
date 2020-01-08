var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/lounge.html');
});

var roomno = 1;

io.on('connection', function (socket) {
    console.log('a user connected');
    // socket.join("room-"+roomno);
    // //Send this event to everyone in the room.
    // io.sockets.in("room-"+roomno).emit('connectToRoom', "You are in room no. "+roomno);
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});



http.listen(3000, function () {
    console.log('listening on *:3000');
});