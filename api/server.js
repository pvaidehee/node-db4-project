const express = require('express'); 
const cors = require('cors'); 
const helmet = require('helmet'); 

const server = express(); 
const db = require('../data/db-config'); 

//! server.use statements
server.use(express.json()); 
server.use(cors()); 
server.use(helmet()); 

//! routers

server.get('/', (req, res) => {
    res.send({ message: "This server is running!" }); 
}); 
module.exports = server; 