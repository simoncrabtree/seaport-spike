var seaport = require('seaport');
var ports = seaport.connect(9090);
var request = require('request');

ports.get('web@1.2.x', function (ps) {
    var u = 'http://' + ps[0].host + ':' + ps[0].port;
    request(u).pipe(process.stdout);
});
