const express = require('express');
const projectsRouter = require('./project/router');

const server = express();

server.use(express.json());

server.use('/api/projects', projectsRouter);

server.use('*', (req, res) => {
    res.json('catch all endpoint is working!')
})

module.exports = server;