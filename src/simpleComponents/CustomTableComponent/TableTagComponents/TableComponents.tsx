/**
 * 
 * Descirption:
 *   Its a  table tag component uses rmwc table styles
 * 
 *  */ 

import React from 'react';

export const CustomTableContext = (props:any) => {
  return (
    <div className="mdc-data-table" {...props}>
      {props.children}
    </div>
  )
}


export const CustomTable = (props: any) => {
  return (
    <table className="mdc-data-table__table" {...props}>
      {props.children}
    </table>
  )
}


