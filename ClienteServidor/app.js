var express = require('express');
var app = express();

app.get('/',(req,res) =>res.send('Hola Mundo'));
app.listen(3000,() => console.log('Escuchando al puerto 3000'));