/** 
 * 
 * Descirption:
 *   Its a Wrapper of  square shaped Card
 *  */ 

import React from 'react';
import styled from 'styled-components';

function SquareCard(props:any) {
    return (
        <Wrapper {...props}>
            {props.children}
        </Wrapper>
    )
}


const Wrapper = styled.div`
        padding:3%;
        margin:3%;
        width:200px;
    `;

export default SquareCard;
