var seaport = require('seaport');
var ports = seaport.connect('localhost', 5001);
var http = require('http');

var server = http.createServer(function (req, res) {
    res.end('version 0.0.0\r\n');
});

server.listen(ports.register('web-server@0.0.0'));
