import React from 'react'
import styled from 'styled-components';


const TextWithIcon = (props: any) => {
    return (
        <IconWithText className="IconWithText">
            <div className="iconText">
                {props.text}
            </div>
            <div className="iconContainer">
                {props.children}
            </div>
        </IconWithText>
    )
}

const IconWithText = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
`

export default TextWithIcon;
