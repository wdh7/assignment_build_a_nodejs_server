const http = require('http');
const fs = require('fs');

const port = 3000;
const host = 'localhost';


const server = http.createServer(function(req, res) {
  fs.readFile('./public/index.html', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end("Error 404 Not Found");
    } else {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.end(data);
    }
  })
})




server.listen(port, host, function() {
  console.log('Listening on port: ' + port);
})
