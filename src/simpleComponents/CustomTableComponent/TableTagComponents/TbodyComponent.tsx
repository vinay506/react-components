/**
 *   
 * Descirption:
 *   Its a  tbody tag component uses rmwc table styles
 * 
 *  */ 


import React from 'react';

const CustomTbody = (props:any) => {
    return (
        <tbody className="mdc-data-table__content" {...props}>
            {props.children}
        </tbody>
    )
}

export default CustomTbody;