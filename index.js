const express = require('express');
const app = express();
const OportunidadesXProducto = require('./OportunidadesXProducto');

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World, si funciona");
   });

app.post('/XProducto', (req, res) => {
//res.download(OportunidadesXProducto.createStructure(req.body))
res.download('C:\\Users\\carop\\Downloads\\ReporteOportunidades-2020-12-13T15-09-16.xlsx')
});

app.listen(process.env.PORT || 3000);
