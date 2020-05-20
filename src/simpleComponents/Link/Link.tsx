import React from 'react'
import styled from 'styled-components';
function Link(props: any) {
    /**
     * Text: The content which need to be displayed on the link
     * OnLinkClick is an output emitter when the user clicks on the link.
     */
    const { text, onLinkClick, color, fontSize, display } = props;

    const overrideStyles = {
        color: color,
        fontSize: fontSize,
        display: display
    }

    return (
        <React.Fragment>
            <Anchor id="anchor" onClick={onLinkClick} style={overrideStyles}>
                {text}
            </Anchor>
        </React.Fragment>
    )
}

const Anchor = styled.div`
     color: #0275d8;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    `;
export default Link
