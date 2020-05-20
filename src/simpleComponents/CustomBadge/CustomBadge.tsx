import React from 'react'
import styled from 'styled-components';
function CustomBadge(props: any) {
    /**
     * Text: Content to be displayed
     * bgColor: Backhround color of a badge
     * color: color of the text
     * position: Use when we want to display the batch over any container. Make sure make your container position as relative
     * (top, right, left, bottom): If position is absolute then use these properties to display the bacth over any container at any position
     * borderRadius: If required but default is 5px
     */
    const { text, bgColor, color, position, top, right, left, bottom, borderRadius } = props;
    const badgeInlineStyle = {
        backgroundColor: bgColor,
        color: color,
        position: position,
        top: top,
        right: right,
        left: left,
        bottom: bottom,
        borderRadius: borderRadius
    };
    return (
        <React.Fragment>
            <BadgeSpan id="uniqueBadge" style={badgeInlineStyle}>
                {text}
            </BadgeSpan>
        </React.Fragment>
    )
}

const BadgeSpan = styled.span`
    background-color: blue;
    color: white;
    padding: 5px;
    border-radius: 5px;
    height: 10px;
    min-width: 20px;
    font-size: 12px;
`

export default CustomBadge
