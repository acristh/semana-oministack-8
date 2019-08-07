const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.json({ message: `Olá, ${req.query.name}!`});
});

server.listen(3333);