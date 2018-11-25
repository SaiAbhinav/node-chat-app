var socket = io();
            
socket.on('connect', function () {
    console.log('Connected to server');
    
    // Event for emitting create message
    socket.emit('createMessage', {
        from: 'sai',
        text: 'OK'
    })
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

// Listening on new message event
socket.on('newMessage', function (message) {    
    console.log(`From:      ${message.from}`);
    console.log(`Text:      ${message.text}`);
    console.log(`createdAt: ${message.createdAt}`);
});