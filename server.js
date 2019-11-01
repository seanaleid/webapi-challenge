const express = require('express');

// importing helmet 
const helmet = require('helmet');

// imports the routers
const projectRouter = require('./data/helpers/projectRouter.js');
// const actionRouter = require('./data/helpers/actionRouter');

// creates the server instance
const server = express();

// turning on json reading for express
server.use(express.json());
server.use(helmet());

// initial route to check server
server.get('/', (req, res) => {
    res.status(200).json({ message: "The server is running 🤙"});
});

// set the routers
// tells the server to use these routers
server.use('/api/projects', projectRouter);
// server.use('/api/actions', actionRouter);

module.exports = server;