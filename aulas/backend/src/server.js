const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send("Olá mundo!");
});

server.listen(3333);