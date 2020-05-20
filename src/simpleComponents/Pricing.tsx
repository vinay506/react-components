import React from 'react';
import TextPrimary from './TextPrimary/TextPrimary';
import TextContent from './TextContent/TextContent';
import PricePackCard from './PricePackCard/PricePackCard';
import styled from 'styled-components';
import reactIcon from '../images/react-icon.png';
import ContentOverCard from './ContentOverCard/ContentOverCard';
import ActivityCard from '../Dashboard/ActivityCard/ActivityCard';


function Pricing() {
    const clickMe = () => {
        console.log('clicked');
    }
    // <div style={{ width: '200px', height: '200px', border: '1px solid', position: 'relative' }}>
    //     <CustomBadge text={'Recommended'} position={'absolute'} top={'-10px'} bgColor={'grey'}></CustomBadge>
    // </div>

    // <h1>Pricing page</h1>
    //     <TextPrimary text='Packs to empower your preparation'></TextPrimary>
    //     <TextSecondary text='Packs & features'></TextSecondary>
    //     <div>
    //         <TextContent text='Compare between the features of packs, choose'></TextContent>
    //     </div>
    //     <TextBlur text="Current Pack"></TextBlur>
    //     <Link text='View Schedule' onLinkClick={clickMe} ></Link>
    //     <CustomButton type={BUTTON_TYPES.DENSE} text={'Get Started'} color={'blue'} bgColor={'white'} borderColor={'blue'} onButtonClick={clickMe}></CustomButton>
    const freePack = () => {
        console.log('free pack');
    }
    const secondPack = () => {
        console.log('second pack');
    }
    const recomendedPack = () => {
        console.log('recomonded pack');
    }

    const activityCardHandler = () => {
        console.log('Activity Card handler');
    }
    return (
        <PricingContainer>
            <br></br>
            <ActivityCard cardClick={activityCardHandler} logoImage={reactIcon} title="Tests" description="Take full, part or chapter tests to improve your performance.
"></ActivityCard>
            <br></br>

            <ContentOverCard>
                <div>
                    <TextPrimary text={'Packs to empower your preparation journey. '}></TextPrimary>
                    <TextPrimary text={'Cancel anytime with in 15 days.'}></TextPrimary>
                    <TextContent text={'Get Started with the pack best suited for you to prepare your upcoming events.'}></TextContent>
                </div>
            </ContentOverCard>
            <PricePackContainer>
                <PricePackCard titleText={'Free'}
                    packText={'Current pack'}
                    rupees={'0'} buttonText={'Get Started'}
                    buttonCallBack={freePack}></PricePackCard>
                <PricePackCard logo={reactIcon} titleText={'JEE Comprehensive 1-Year Pack (for Class 11)'}
                    packText={'1 year pack Valid till June 2021'} targetText={'Target Year 2020'} scheduleLink={'View Schedule'}
                    rupees={'3000'} expiryYearText={'for 1 year'} buttonText={'Get Started'}
                    buttonCallBack={secondPack}></PricePackCard>
                <PricePackCard badgeText={'Recommended'} logo={reactIcon} titleText={'JEE Comprehensive 1-Year Pack (for Class 11)'}
                    packText={'1 year pack Valid till June 2021'} targetText={'Target Year 2020'} scheduleLink={'View Schedule'}
                    rupees={'3000'} expiryYearText={'for 1 year'} buttonText={'Get Started'} buttonCallBack={recomendedPack}></PricePackCard>
            </PricePackContainer>
        </PricingContainer >
    )
}

const PricePackContainer = styled.div`
margin: 10px;
display: flex;
justify-content: center;
`
const PricingContainer = styled.div`
    text-align:center
`


export default Pricing
