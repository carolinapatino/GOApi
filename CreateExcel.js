const xl = require('excel4node');
const wb = new xl.Workbook();
const ws = wb.addWorksheet('Oportunidades de Venta');
const downloadsFolder = require('downloads-folder');
const save = require('save-file');
 

 

function createExcel(headers, data, name) {
 
    var style = wb.createStyle({
        font: {
          bold: true,
          color: '#000000',
          size: 12,
        },
        fill: {
            type: 'pattern',
            patternType: 'solid',
            bgColor: '#FFFF00',
            fgColor: '#006dc0',
        },
        alignment: {
            wrapText: true,
            horizontal: 'center',
          },
    });
 
    var infoStyle = wb.createStyle({
        alignment: {
            wrapText: true
          },
    });

    let headingColumnIndex = 1;
    headers.forEach(heading => {
        ws.column(headingColumnIndex).setWidth(20)
        ws.cell(1, headingColumnIndex++)
            .string(heading)
            .style(style)
        
    });

    let rowIndex = 2;
    data.forEach( record => {
        let columnIndex = 1;
        Object.keys(record).forEach(columnName =>{
            ws.cell(rowIndex,columnIndex++)
                .string(record [columnName])
                .style(infoStyle)
        });
        rowIndex++;
    });


   

    var today = new Date().toISOString().slice(0, 19);
    today = today.replace(/:/g,"-");
    var path=downloadsFolder();
    var name = `${path}\\ReporteOportunidades-${today}.xlsx`;
    return wb.write(name);
    
    
}

exports.createExcel = createExcel;