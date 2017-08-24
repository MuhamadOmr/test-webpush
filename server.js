var restify = require('restify');
var fs = require('fs');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();

// using body parser plugin for dealing with json in the
// req.body
server.use(restify.plugins.bodyParser());

server.get('/', restify.plugins.serveStatic({
  directory: './static',
  file: 'index.html',
  appendRequestPath: false
}));

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
