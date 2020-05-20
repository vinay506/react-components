/**
 *   Author : vinay
 *   Date: 07/05/2020
 * 
 * Descirption:
 *  payament Cards Container
 * 
 *  */

import React from 'react';
import {PaymentCard} from '../../compoundComponents';
import styled from 'styled-components';
import { cardsDetails } from './payMentsListConfig';

const PaymentCards = () => {
    return (
        <CardsOuterContainer>
            <h1>Payment Made simple </h1>

            
            <CardsContainer>
                {

                    cardsDetails.map((card: any, index: number) => {
                        return <PaymentCard key={'paymentCard' + index}
                            avatar={card.avatarConfig}
                            primaryText={card.primaryTextConfig}
                            secondaryText={card.secondaryTextConfig}>
                        </PaymentCard>
                    })
                }
            </CardsContainer>


        </CardsOuterContainer>
    )
}

const CardsOuterContainer = styled.div`
text-align:center;
`

const CardsContainer = styled.div`
    display:flex;
    justify-content: center;
`
export default PaymentCards;