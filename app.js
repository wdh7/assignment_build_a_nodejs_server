const http = require('http');
const fs = require('fs');

const port = 3000;
const host = 'localhost';


const server = http.createServer(function(req, res) {
  if (req) {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.end('Hello World!')
  }
})




server.listen(port, host, function() {
  console.log('Listening on port: ' + port);
})
