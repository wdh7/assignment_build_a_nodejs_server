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

      const newReq = {
        httpVersion: req.httpVersion,
        method: req.method,
        url: req.url,
        headers: req.headers
      };

      const newRes = {
        statusCode: res.statusCode,
        statusMessage: 'Success!',
        header: res._header
      };

      res.writeHead(200, {
        "Content-Type": "text/html"
      });


      let newData = data.replace('{{ req }}', JSON.stringify(newReq, null, 2))
        .replace('{{ res }}', JSON.stringify(newRes, null, 2));

      res.end(newData);
    }
  })
})




server.listen(port, host, function() {
  console.log('Listening on port: ' + port);
})
