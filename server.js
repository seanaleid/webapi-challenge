const express = require('express');

// importing helmet 
const helmet = require('helmet');

const server = express();

// turning on json reading for express
server.use(express.json());
server.use(helmet());

// initial route to check server
server.get('/', (req, res) => {
    res.status(200).json({ message: "The server is running 🤙"});
});

// set the routes here
// server.use('/api/', router);

module.exports = server;