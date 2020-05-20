import React from 'react'
import { Button } from '@rmwc/button';
import '@rmwc/button/styles';
export const BUTTON_TYPES = {
    RAISED: 'RAISED',
    UNELEVATED: 'UNELEVATED',
    OUTLINED: 'OUTLINED',
    DENSE: 'DENSE'
}
function CustomButton(props: any) {
    /**
     * Text: The content to be displayed on the button
     * type: Constants provided in BUTTON_TYPES can be used
     * onButtonClick: is a call back function when user clicks on the button
     * color: Text color on the button
     * bgColor: Background color of the button
     * borderColor: Border color of the button 
     */
    const { text, type, onButtonClick, color, bgColor, borderColor,width,height,padding,margin } = props;
    const buttonStyle = {
        color: color,
        backgroundColor: bgColor,
        borderColor: borderColor,
        width:width,
        height:height,
        padding:padding,
        margin:margin
    };

    let button;
    switch (type) {
        case BUTTON_TYPES.RAISED:
            button = <><Button id="raised" raised label={text} style={buttonStyle} onClick={onButtonClick}></Button></>
            break;
        case BUTTON_TYPES.DENSE:
            button = <><Button id="dense" dense label={text} style={buttonStyle} onClick={onButtonClick}></Button></>
            break;
        case BUTTON_TYPES.OUTLINED:
            button = <><Button id="outlined" outlined label={text} style={buttonStyle} onClick={onButtonClick}></Button></>
            break;
        case BUTTON_TYPES.UNELEVATED:
            button = <><Button id="unelevated" unelevated label={text} style={buttonStyle} onClick={onButtonClick}></Button></>
            break
        default:
            button = <><Button raised label={text} style={buttonStyle} onClick={onButtonClick}></Button></>
            break;
    }
    return (
        <React.Fragment>
            {button}
        </React.Fragment>
    )
}

export default CustomButton;


