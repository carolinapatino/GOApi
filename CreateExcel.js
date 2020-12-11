const xl = require('excel4node');
const wb = new xl.Workbook();
const ws = wb.addWorksheet('Oportunidades de Venta');

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

    wb.write(name);

}

exports.createExcel = createExcel;