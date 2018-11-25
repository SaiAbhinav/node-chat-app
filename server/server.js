const path = require('path');
const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = SocketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    // Event for emitting new message
    socket.emit('newMessage', {
        from: 'abhinav',
        text: 'Hey, can we meet up at 6',
        createdAt: new Date()
    });

    // listening on create message event
    socket.on('createMessage', (message) => {
        console.log(`From:  ${message.from}`);
        console.log(`Text:  ${message.text}`);
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(port, ()=> {
    console.log(`Server is up on port ${port}`);
});