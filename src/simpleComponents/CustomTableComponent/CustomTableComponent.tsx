/**
 *  
 * Descirption:
 *   Its a Cusom Table that wraps all the table components (table,tbody,thead,tr,td,th)
 * 
 *  */ 


import React from 'react';
import '@rmwc/data-table/styles';

import {
  CustomTableContext, CustomTbody, CustomTable,
  CustomTdCell, CustomThead,
  CustomTableRow, CustomThCell
} from './TableTagComponents'



const CustomTableComponent = (props: any) => {


  const getCustomTableRows = (rows: Array<any>) => {
    return rows.map((row,index) => {
      return getCustomTableRow(row,index)
    })
  }

  const getCustomTableRow = (row: any,index:number) => {
    return (
      <CustomTableRow key={'row-'+index}>
        {getCustomTableCells(row)}
      </CustomTableRow>
    )
  }

  const getCustomTableCells = (row: any) => {
    return (props.bodyColumns || []).map((column: any,index:number) => {
      return <CustomTdCell style={column.styles} key={'bdcol-'+index}>{row[column.key]}</CustomTdCell>
    })
  }

  const getCustomTableHeaderCells = () => {
    return (props.headerColumns || []).map((column: any,index:number) => {
      return <CustomThCell style={column.styles} key={'hdcol-'+index}>{column.title}</CustomThCell>
    })
  }

  const getCustomTable = (tableConfig: any) => {
    return (
      <CustomTableContext style={props.tableContext}>
        <CustomTable style={props.tableStyles}>
          <CustomThead>
            <CustomTableRow headerRow>
              {getCustomTableHeaderCells()}
            </CustomTableRow>
          </CustomThead>
          <CustomTbody >
            {getCustomTableRows(tableConfig.rows)}
          </CustomTbody>
        </CustomTable>
      </CustomTableContext>

    )
  }


  return (<div>

    <div>
      {getCustomTable(props.tableConfig)}
    </div>
  </div>
  )
};

export default CustomTableComponent;