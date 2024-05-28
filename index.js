const express = require('express');
const server = express();
const port = 5000;

const usersRouter = require('./routes/users');
const contactsRouter = require('./routes/contacts');


server.use(express.json());

server.use('/v1', usersRouter, contactsRouter);
// server.use('/v1', );

server.listen(port, () => console.log(`Server is Running on pont ${port}`))

module.exports = server;