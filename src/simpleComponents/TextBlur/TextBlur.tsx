import React from 'react'
import styled from 'styled-components';
function TextBlur(props: any) {
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
            <Label id="textBlur" style={customStyles}>
                {text}
            </Label>
        </React.Fragment >
    )
}

const Label = styled.div`
    color: darkgrey;
    font-weight: 400;
    font-size: 12px;
    `;
export default TextBlur
