var express = require('express');
var app = express();
var consul = require('consul')({ host: '10.10.10.1' });

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send('Hello World!')
});

app.get('/api/nodes', function(req, res) {
    consul.catalog.service.list(function(err, result) {
        res.end(JSON.stringify(result));
    });
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})