// The HTTP Module
const fs = require('fs');
const http = require('http');

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   switch (url) {
//     case "/":
//       res.writeHead(200, {'content-type': 'text/plain'});
//       res.write('<h1>Home Page</h1>');
//       res.end();
//       break;
//     case "/about":
//       res.writeHead(200, {'content-type': 'text/html'});
//       res.write('<h1>About Page</h1>');
//       res.end();
//       break;
//     case "/contact":
//       res.writeHead(200, {'content-type': 'text/html'});
//       res.write('<h1>Contact Page</h1>');
//       res.end();
//       break;
//     default:
//       res.writeHead(404, {'content-type': 'text/html'});
//       res.write('<h1>404, Resource Not Found</h1><br/><a href="/">Go Back Home</a>');
//       res.end();
//   }
// });

const homePage = fs.readFileSync('./navbar-app/index.html');
const homeStyles = fs.readFileSync('./navbar-app/styles.css');
const homeLogo = fs.readFileSync('./navbar-app/logo.svg');
const homeLogic = fs.readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log('Requested URL: ' + url);

  switch (url) {
    case "/":
      res.writeHead(200, {'content-type': 'text/html'});
      res.write(homePage);
      res.end();
      break;

    case "/styles.css":
      res.writeHead(200, {'content-type': 'text/css'});
      res.write(homeStyles);
      res.end();
      break;

    case "/browser-app.js":
      res.writeHead(200, {'content-type': 'text/javascript'});
      res.write(homeLogic);
      res.end();
      break;

    case "/logo.svg":
      res.writeHead(200, {'content-type': 'image/svg+xml'});
      res.write(homeLogo);
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
      res.write('<h1>404! Resource not found.</h1>');
      res.end();
  }

})

const port = 5001;
server.listen(port, () => {
  console.log(`Server listening at port ${port}`);
})