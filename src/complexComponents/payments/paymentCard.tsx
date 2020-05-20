/**
 *  
 * Descirption:
 *  It Card of payments
 * 
 *  */ 


import React from 'react'
import {TextPrimary,TextSecondary,SquareCard,RoundedBox} from '../../simpleComponents';



const PaymentCard=(props:any)=> {
    return (
        <SquareCard style={{textAlign:'left'}}>
            <RoundedBox style={props.avatar.styles}></RoundedBox>
            <TextPrimary text={props.primaryText.text} styles={textPrimaryStyles}></TextPrimary>
            <TextSecondary text={props.secondaryText.text} styles={textSecondaryStyles}></TextSecondary>
        </SquareCard>
    )
}

const textPrimaryStyles = {
    marginBottom:'5%',
    fontSize:'14px'
}

const textSecondaryStyles = {
    marginBottom:'5%',
    fontSize:'12px'
}

export default PaymentCard;
