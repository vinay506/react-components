import React from 'react';
import { RectangleCard,DateDetails, TextSecondary ,TextPrimary,CustomButton} from '../../../simpleComponents';
import styled from 'styled-components';

var Carousel = require('react-responsive-carousel').Carousel;


const rectangleCardStyles = {
    width: '95%',
    padding: '0px',
    marginBottom:'40px',
    borderRadius:'10px',
    display:'flex'
}

const dateCardStyles = {
    background: '#31275F'
}

const textPrimaryConfig = {
    text:"Participate in All India Live Mock Test",
    styles:{
        fontSize:'26px',
        fontWeight: '400',
        marginBottom:'20px'
    }
}

const textSecondaryConfig = {
    text:"Complete with 5000+ students across India and stand a chance to get a scholorship",
    styles:{
        fontSize:'20px',
        color: 'darkgrey',
        fontWeight: '200',
        marginBottom:'20px',
        width:'60%'
    }
}

const clickedOnSignUp = () => {
    console.log('clicked on signup')
}

const buttonconfig = {
    text:'SIGN UP NOW',
    type:'OUTLINED',
    bgColor:'rgb(222, 220, 231)',
    color:'#4B37A5',
    onButtonClick:clickedOnSignUp,
    borderColor:'rgb(222, 220, 231)',
    width:'250px',
    height:'48px',
    padding:'15px 20px',
    margin:'10px 0px'

}



const LandingPage1 = () => {

    const onChange = () => {
        console.log('onChange');
    }

    const onClickItem = () => {
        console.log('onClickItem');
    }

    const onClickThumb = () => {
        console.log('onClickThumb');
    }

    const getTemplate = () => {
        return (
        <RectangleCard styles={rectangleCardStyles}>
            <DateCardContainer>
                <DateDetails style={dateCardStyles}></DateDetails>
            </DateCardContainer>
            <ContentContainer>
                <TextPrimary {...textPrimaryConfig}></TextPrimary>
                <TextSecondary  {...textSecondaryConfig}></TextSecondary>
                <CustomButton {...buttonconfig}></CustomButton>
            </ContentContainer>
        </RectangleCard>
        )

    }

    return (
        <Carousel showArrows={false} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
            <div>
                {getTemplate()}
            </div>
            <div>
                {getTemplate()}
            </div>
            <div>
                {getTemplate()}
            </div>

        </Carousel>
    );

}

const ContentContainer = styled.div`
    padding:30px;
`;

const DateCardContainer = styled.div`
background:#31275F;
width:241px;
height:272px;
padding:64px;
border-radius: 10px 0px 0px 10px;
`

export default LandingPage1
