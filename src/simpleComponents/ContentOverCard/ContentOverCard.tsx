import React from 'react'
import styled from 'styled-components';
function ContentOverCard(props: any) {
    /**
     * backgroundColor: defaults to light blue, if required pass the color code or color name to override
     */
    const { backgroundColor, overRideStyles } = props;
    const propStyles = {
        backgroundColor: backgroundColor, ...overRideStyles
    }
    return (
        <React.Fragment>
            <ContentOverContainer id="uniqueContentOverride" style={propStyles}>
                {props.children}
            </ContentOverContainer>
        </React.Fragment>
    )
}

const ContentOverContainer = styled.div`
background-color: #dae8ed;
display: flex;
min-height: 250px;
justify-content: center;
`
export default ContentOverCard
