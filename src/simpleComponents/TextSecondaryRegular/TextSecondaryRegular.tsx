import React from 'react'
import styled from 'styled-components';
function TextSecondaryRegular(props: any) {
    /**
     * Text: The text which should be displayed on web page
     * color: Defaults to black, To override the existing color we can pass Color code or color name as props.
     */
    const { text, color } = props;
    const customStyles = {
        color: color
    };
    return (
        <React.Fragment>
            <Label id="textSecondaryRegular" style={customStyles}>
                {text}
            </Label>
        </React.Fragment >
    )
}

const Label = styled.div`
    font-size: 18px;
    color: black;
    font-family: 'AmazonEmber-regular';
    letterSpacing: 0;
    lineHeight: 24px;
    `;

export default TextSecondaryRegular
