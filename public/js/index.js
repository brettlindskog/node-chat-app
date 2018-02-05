var socket = io();

socket.on('connect', function() {
    console.log('connected to server');

    socket.emit('createMessage', {
        from: 'brett',
        text: 'from the client, woo hoo'
    });
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
});