import React from 'react'
import ReactTooltip from "react-tooltip";
import styled from 'styled-components';

const ToolTip = (props: any) => {
    return (
        <div>
            <TooltipFor className="toolTipFor" data-tip data-for={props.tooltip.id}>{props.children}</TooltipFor>
            <ReactTooltip {...props.tooltip}>
                <span >{props.tooltipText}</span>
            </ReactTooltip>
        </div> 
    )
}

const TooltipFor = styled.div`
    display:inline;
`;

export default ToolTip;
