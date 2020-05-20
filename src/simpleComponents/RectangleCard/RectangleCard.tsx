/**
 *  
 * Descirption:
 *   Its a Wrapper of  rectangle shaped Card with border
 *  */ 

import React from 'react';
import styled from 'styled-components';
const RectangleCard= (props:any) => {
    const {styles} = props;
    return (
        <Wrapper style={styles}>
            {props.children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding:15px 20px 0px 20px;
    margin:2%;
    box-shadow: 0px 0px 3px;
    width:350px;
    text-align:left;
    background:#fff;
`;

export default RectangleCard;
