/**
 *  
 * 
 * Descirption:
 *   Its a  tr tag component uses rmwc table styles
 * 
 *  */ 


import React from 'react';

const CustomTableRow = (props:any) => {

    const getClasses = ()=>{
        let classes = 'rmwc-data-table__row';
        classes = (props.headerRow)? classes + ' mdc-data-table__header-row':classes + ' mdc-data-table__row';
        classes = (props.selected || props.activated)?classes + ' mdc-data-table__row--selected':classes;
        classes = (props.activated)?classes + ' rmwc-data-table__row--activated':classes;
        return classes
    }

    const getProps= () =>{
         const propscopy = {...props}
         delete propscopy.headerRow
        return propscopy
    }

    return (
        <tr className={getClasses()} {...getProps()}>
            {props.children}
        </tr>
    )
}

export default CustomTableRow;