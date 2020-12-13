const express = require('express');
const app = express();
const OportunidadesXProducto = require('./OportunidadesXProducto');
const downloadsFolder = require('downloads-folder');

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World, si funciona");
   });

app.post('/XProducto', (req, res) => {
OportunidadesXProducto.createStructure(req.body)
var path=downloadsFolder();
res.json(path);
});

app.listen(process.env.PORT || 3000);