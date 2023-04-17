import React from 'react';
import { GridComponent, ColumnsDirective,
ColumnDirective, Page, Selection, Inject, Edit, 
Toolbar, Sort, Filter, ExcelExport,  PdfExport } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid} from '../data/dummy';

import { Header } from '../components';

const Customers = () => {

    let grid;
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'grid_excelexport') {
            grid.excelExport();    
        }

        if (grid && args.item.id === 'grid_pdfexport') {
            grid.pdfExport();
        }
    }

    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category='Page' title='Customers'/>
            <GridComponent 
                id='grid'
                dataSource={customersData}   
                allowPaging
                allowSorting
                toolbar={['Delete', 'ExcelExport','PdfExport']}
                editSettings={{allowDeleting: true, allowEditing: true}}
                width='auto'
                allowExcelExport={true}
                allowPdfExport={true}
                toolbarClick={toolbarClick}
                ref={g => grid = g}
            >
                <ColumnsDirective>
                    {customersGrid.map((item, index)=> (
                        <ColumnDirective key={index} {...item}/>
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Toolbar, Selection, 
                    Edit, Sort, Filter, ExcelExport, PdfExport]}/>
            </GridComponent>
        </div>
    )
}

export default Customers