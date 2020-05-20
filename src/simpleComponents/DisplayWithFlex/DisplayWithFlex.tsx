import React from 'react';
import styled from 'styled-components';

const DisplayWithFlex = (props:any) => {
    return (
        <DisplayFlex {...props}>
              {props.children}
        </DisplayFlex>
    )
}



const DisplayFlex = styled.div`
display:flex;
`;
export default DisplayWithFlex;
