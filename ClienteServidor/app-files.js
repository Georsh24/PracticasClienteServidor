var express = require('express');
var path = require('path');
var http = require('http');

var app = express();

var publicPath = path.join(__dirname,'public');
app.use('/recursos',express.static(publicPath));

app.use((Request,Response) => {
    Response.writeHead(200,{'Content-Type':'text/plain'});
    Response.end('No se encuentra ningun archivo');

});
http.createServer(app).listen(3000);