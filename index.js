var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(__dirname + '/public'));
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/pedido', function(req, res) {
    res.sendFile(path.join(__dirname + '/pedido.html'));
});

app.get('/buscar', function(req, res) {
    res.sendFile(path.join(__dirname + '/buscar.html'));
});

app.listen(3000);