const express = require('express');
const app = express();
const OportunidadesXProducto = require('./OportunidadesXProducto');
const contentDisposition = require('content-disposition');
const fs = require('fs');
const onFinished = require('on-finished');
const destroy= require('destroy');

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World");
   });

app.post('/XProducto', (req, res) => {
OportunidadesXProducto.createStructure(req.body);

//var filename = path.replace(/\\/g,'\\\\');
//console.log(filename)
var prueba='C:\\Users\\carop\\Downloads\\ReporteOportunidades-2020-12-14T01-31-45.xlsx';
var prueba2 = __dirname 

res.setHeader('Content-Type', 'application/pdf')
res.setHeader('Content-Disposition', contentDisposition(prueba))

var stream = fs.createReadStream(prueba)
stream.pipe(res)
onFinished(res, function () {
  destroy(stream)
})

});

app.listen(process.env.PORT || 3000);
