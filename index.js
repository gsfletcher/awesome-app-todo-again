/*jshint esversion: 6*/

const express = require('express');
const server = express();
const port = 8080;

server.use(express.static(__dirname + '/public'));

server.get('/', (request, response) => {
  response.sendFile('public/html/index.html', {root: __dirname});
});

server.listen(port, () => {
  console.log('Now listening on port ', port);
});
