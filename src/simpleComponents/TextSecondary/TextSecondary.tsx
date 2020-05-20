import React from 'react'
import styled from 'styled-components';
function TextSecondary(props: any) {
    /**
     * Text: The text which should be displayed on web page
     * color: Defaults to black, To override the existing color we can pass Color code or color name as props.
     */
    const { text, styles } = props;
    
    return (
        <React.Fragment>
            <Label id="textSecondary" style={styles}>
                {text}
            </Label>
        </React.Fragment >
    )
}

const Label = styled.div`
    font-size: 18px;
    color: black;
    font-family: 'AmazonEmber-bold'
    `;

export default TextSecondary
