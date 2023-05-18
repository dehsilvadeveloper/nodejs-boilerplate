const http = require('http');
const hostname = 'localhost';
const port = process.env.APP_PORT;

const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write("My HTTP server running on Docker");
  res.end();
});

server.listen(port);

console.log('Server running at http://'+ hostname + ':' + port + '/');
