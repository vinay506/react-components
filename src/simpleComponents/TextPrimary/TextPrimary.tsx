import React from 'react';
import styled from 'styled-components';
function TextPrimary(props: any) {
    /**
     * Text: The text which should be displayed on web page 
     * color: Defaults to black, To override the existing color we can pass Color code or color name as props.
     */

    return (
        <React.Fragment>
            <Label id="textPrimary" style={props.styles}>
                {props.text}
            </Label>
        </React.Fragment >
    )
}

const Label = styled.div`
    color: black;
    font-size: 21px;
    font-family: 'AmazonEmber-Bold';
     letter-spacing: 0;
  line-height: 28px;
    `;
export default TextPrimary;
