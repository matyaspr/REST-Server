require('dotenv').config();


const Server = require('./Model/Server');


const server = new Server();

server.listen();


