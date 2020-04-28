const http = require('http');

const server = http.createServer((req, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.end('<h1>Hello from Node!</h1>')
    console.log('I hear you, request received!')
});

server.listen(3001);