const excel = require ('./CreateExcel');
var today = new Date().toISOString().slice(0, 10);
function createStructure(data) {

    for(var i = 0; i < data.length; i++) {
        delete data[i]['CodigoCliente'];
        delete data[i]['FechaCierre'];
        delete data[i]['IdCreador'];
        delete data[i]['IdVendedor'];
        delete data[i]['MontoPresupuesto'];
        delete data[i]['ObservacionDeCierre'];
        delete data[i]['OrigenNombre'];
        delete data[i]['Productos'];
        delete data[i]['idUsuarioCerrador'];
        data[i]['OportunidadId']=data[i]['OportunidadId'].toString()
    }
    console.log(data)
    const headingColumnNames = [
        "ID",
        "Fecha",
        "Cliente",
        "Objetivo",
        "Estatus",
    ];

    var data = data;

    var filename = today+'InformeOportunidadesDeVenta.xlsx';
    excel.createExcel(headingColumnNames, data,filename);
}



exports.createStructure = createStructure;