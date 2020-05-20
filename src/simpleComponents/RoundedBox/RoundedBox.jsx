/**
 *
 * Descirption:
 *   It is provided Rounded Shaped Box with the given height and width from the props
 *  */ 

import React from 'react'
import styled from 'styled-components';

function RoundedBox(props) {
    return (
        <Circle {...props}>
            
        </Circle>
    )
}

const Circle = styled.div`
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
`;

export default RoundedBox;
