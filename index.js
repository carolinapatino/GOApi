const express = require('express');
const app = express();
const OportunidadesXProducto = require('./OportunidadesXProducto');


app.use(express.json());

app.get('/', (req, res) => {
    res.send("Esta es una ruta de prueba");
   });

app.post('/XProducto', (req, res) => {
OportunidadesXProducto.createStructure(req.body);
res.send('ok')
});

app.listen(process.env.PORT || 3000);
