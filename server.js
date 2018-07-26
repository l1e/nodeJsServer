var express = require('express');
var app = express();
var port = 3003;

app.listen(port);

app.get('/', function(req,res){
	res.sendFile(__dirname+'/index.html');
})

app.get('/about', function(req,res){
	res.sendFile(__dirname+ '/about.html');
})


