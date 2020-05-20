/**
 * 
 * Descirption:
 *   Its a Wrapper of Name and its sub text
 *  */ 

import React from 'react'
import styled from 'styled-components';

const NameWithSubText = (props: any) => {
    return (
        <Name>
            <div className="nameText">{props.nameInfo.name}</div>
            <div className="subText">{props.nameInfo.subText}</div>
        </Name>
    )
}


const Name = styled.div`
    color:#aecbfa;
    font-size:12px;
`


export default NameWithSubText;
