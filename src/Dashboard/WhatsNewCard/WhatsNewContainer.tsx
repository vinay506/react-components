import React from 'react';
import WhatsNewCard from './WhatsNewCard';
import config from './WhatsNewConfig';
import styled from 'styled-components';
import {TextPrimary} from '../../simpleComponents';

const WhatsNewCards = () => {
    return(
        <NewCardsOuterContainer>
            <TextPrimary text="What's new" styles={{fontSize:'20px',marginBottom:'10px'}}> </TextPrimary>
            <NewCardsContainer>
                {
                     config.map((obj,index) =>{
                        return <WhatsNewCard key={"whatsNewCard" + index} title={obj.title} content={obj.content} image={obj.image} link={obj.link}></WhatsNewCard>
                    })
                }
            </NewCardsContainer>
        </NewCardsOuterContainer>
    )
}

const NewCardsOuterContainer = styled.div`
    padding-top:5%;
    padding-left:7%;
`

const NewCardsContainer = styled.div`
    display:flex;
    flex-direction:column;
`

export default WhatsNewCards;