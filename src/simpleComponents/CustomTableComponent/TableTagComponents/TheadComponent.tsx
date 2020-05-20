/**
 *   
 * Descirption:
 *   Its a  thead tag component uses rmwc table styles
 * 
 *  */ 


import React from 'react';

const CustomThead = (props:any) => {
    return (
        <thead className="rmwc-data-table__head" {...props}>
            {props.children}
        </thead>
    )
}

export default CustomThead;