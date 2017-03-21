const router = (req, res) => {

  if (req.url === '/' && req.method === 'GET'){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('hello');
  }
  else if (req.url === '/blog' && req.method === 'GET'){

      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({'jsonObj':['hello', 'world', 'tape']}));

  }
  else if (req.url === '/blog' && req.method === 'POST' && req.headers.password==='potato'){
    res.writeHead(200, {'Content-Type': 'application/json'});
    var requestText = '';

    req.on('data', function (chunk) {
        requestText += (chunk);
    });

    req.on('end', function () {
        requestText = JSON.parse(requestText);
        res.end(JSON.stringify({'myArray':requestText}));

    });


  }
  else {
    res.writeHead(404, {'Content-Type':'text/html'});
    res.end('Unknown url');
  }
};

module.exports = router;
