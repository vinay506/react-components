import React from 'react'
import styled from 'styled-components';
function TextContent(props: any) {
    /**
     * Text: The text which should be displayed on web page
     * color: Defaults to darkgrey, To override the existing color we can pass Color code or color name as props.
     */
    const { text, color } = props;
    const customStyles = {
        color: color
    };
    return (
        <React.Fragment>
            <Label id="textContent" style={customStyles}>
                {text}
            </Label>
        </React.Fragment >
    )
}

const Label = styled.div`
   color: darkgrey;
    font-size: 13px;
    font-family: 'AmazonEmber-Regular';
     letter-spacing: 0;
  line-height: 20px;
    `;
export default TextContent
