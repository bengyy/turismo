//llamamos el archivo de configuracion
require('./config/config');

const express = require('express');
const app = express();
//llamar a bodyParser
const bodyParser = require('body-parser');


// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));
 
app.get('/', function (req, res) {
  res.json('Hello World')
});
 
app.listen(3000,()=>{
    console.log('escuchando en el puerto: ',process.env.PORT);
});