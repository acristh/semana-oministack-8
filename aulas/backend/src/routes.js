const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send(`Olá, ${req.query.name}`);
});

export default routes;