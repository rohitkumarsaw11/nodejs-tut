// The HTTP Module

const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('<h1>Home Page</h1>');
      res.end();
      break;
    case "/about":
      res.writeHead(200, {'content-type': 'text/html'});
      res.write('<h1>About Page</h1>');
      res.end();
      break;
    case "/contact":
      res.writeHead(200, {'content-type': 'text/html'});
      res.write('<h1>Contact Page</h1>');
      res.end();
      break;
    default:
      res.writeHead(404, {'content-type': 'text/html'});
      res.write('<h1>404, Resource Not Found</h1><br/><a href="/">Go Back Home</a>');
      res.end();
  }
});

server.listen(5000, () => {
  console.log('Server listening at port 5000');
})