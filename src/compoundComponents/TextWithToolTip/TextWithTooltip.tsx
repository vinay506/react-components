import React from 'react'
import ToolTip from './../../simpleComponents/Tooltip/Tooltip';
import  styled from 'styled-components';

const TextWithTooltip = (props:any) => {
    return (
        <ToolTipContentWithText className="ToolTipContentWithText" {...props.styles}>
            <div className="textWithTooltip">
                {props.text}
            </div>
            <ToolTip tooltip={props.tooltip} tooltipText={props.tooltipText}>
                {props.children}
            </ToolTip>
        </ToolTipContentWithText>
    )
}

const ToolTipContentWithText = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
`

export default TextWithTooltip
