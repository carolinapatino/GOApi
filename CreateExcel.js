const xl = require('excel4node');
const wb = new xl.Workbook();
const ws = wb.addWorksheet('Oportunidades de Venta');
const downloadsFolder = require('downloads-folder');


function createExcel(headers, data, name) {
 
    let headingColumnIndex = 1;
    headers.forEach(heading => {
        ws.cell(1, headingColumnIndex++)
            .string(heading)
    });

    let rowIndex = 2;
    data.forEach( record => {
        let columnIndex = 1;
        Object.keys(record).forEach(columnName =>{
            ws.cell(rowIndex,columnIndex++)
                .string(record [columnName])
        });
        rowIndex++;

    });

    var today = new Date().toISOString().slice(0, 19);
    today = today.replace(/:/g,"-");
    var path=downloadsFolder();
    wb.write(`${path}\\ReporteOportunidades-${today}.xlsx`);
}

exports.createExcel = createExcel;