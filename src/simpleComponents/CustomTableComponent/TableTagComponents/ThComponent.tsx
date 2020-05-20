/**
 *   
 * Descirption:
 *   Its a  th tag component uses rmwc table styles
 * 
 *  */ 


import React from 'react';

const CustomThCell = (props:any) => {
    return (
        <th className="rmwc-data-table__cell mdc-data-table__header-cell" {...props}>
            {props.children}
        </th>
    )
}

export default CustomThCell;