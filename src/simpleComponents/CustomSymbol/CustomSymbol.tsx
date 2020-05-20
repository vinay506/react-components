import React from 'react'

function CustomSymbol(props: any) {
    const { fontSize, color } = props;
    const symbolStyles = {
        fontSize: fontSize,
        color: color
    }
    return (
        <React.Fragment>
            <div style={symbolStyles}>
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default CustomSymbol
