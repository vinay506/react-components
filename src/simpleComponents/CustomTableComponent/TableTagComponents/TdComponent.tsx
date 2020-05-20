/**
 *   
 * Descirption:
 *   Its a  td tag component uses rmwc table styles
 * 
 *  */ 


import React from 'react';

const CustomTdCell = (props:any) => {

    const getContent = () => {
       return (props.children)?props.children:'X';
    };

    return (
        <td className='mdc-data-table__cell rmwc-data-table__cell' {...props}>
            {getContent()}
        </td>
    )
}

export default CustomTdCell;