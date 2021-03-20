const express = require('express');

const app = express();
const server = require('http').Server(app);
// eslint-disable-next-line react-hooks/rules-of-hooks
const io = require('socket.io')(server, { cors: { origin: "*" } });

const rooms = new Map();

app.get('/rooms', (req, res) => {
    res.json(rooms);
});

io.on('connection', socket => {
    console.log('socket connected', socket.id);
})

server.listen(9999, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log('Сервер запущен!');
});