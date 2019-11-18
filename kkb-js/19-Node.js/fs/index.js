const fs = require('fs');
const http = require('http');

http
  .createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    });
    if (req.url === '/') {
      const rs = fs.createReadStream('./index.html');
      rs.pipe(res);
    } else if (req.url === '/users') {
      const rs = fs.createReadStream('./users.html');
      rs.pipe(res);
    }
  })
  .listen(3000);
