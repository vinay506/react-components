import React from 'react'
import '@rmwc/card/styles';
import { Card } from '@rmwc/card';
import styled from 'styled-components';
import TextSecondary from '../TextSecondary/TextSecondary';
import TextContent from '../TextContent/TextContent';
import Link from '../Link/Link';
import CustomButton, { BUTTON_TYPES } from '../CustomButton/CustomButton';
import TextPrimary from '../TextPrimary/TextPrimary';
import CustomSymbol from '../CustomSymbol/CustomSymbol';
import CustomBadge from '../CustomBadge/CustomBadge';
function PricePackCard(props: any) {
    /**
     * badgeText: Text on the badge if not passed it will not be rendered on the card
     * logo: image URL, If not passed it will be ignored from the card
     * titleText: Primary text to show on the card 
     * packText: Secondary text to show on the card
     * scheduleLink: The link label to show on the card
     * rupees: Cost to show on the card
     * expiryYearText: Text to show with continuation of cost
     * buttonText: Text to show on the button
     * buttonCallBack: Call back method when user clicks on the button
     */
    const { badgeText, logo, titleText, packText, targetText, scheduleLink, rupees, expiryYearText, buttonText, buttonCallBack, linkCallBack } = props;
    const defaultStyles = {
        width: '250px',
        height: '380px',
        border: '1px solid lightgray',
        padding: '10px'
    }
    const showBadge = badgeText ? <CustomBadge text={badgeText} bgColor={'darkgray'} color={'white'} position={'absolute'} top={'-10px'} left={'15px'}></CustomBadge> : <></>;
    const showLogo = logo ? <img height="50" width="50" src={logo} /> : <div style={{ height: '50px', width: '50px' }}></div>
    const showTitle = titleText ? <TextSecondary text={titleText}></TextSecondary> : <></>;
    const showPackage = packText ? <TextContent text={packText}></TextContent> : '';
    const showTargetText = targetText ? <TextContent text={targetText}></TextContent> : <></>;
    const showLink = scheduleLink ? <Link text={scheduleLink} onLinkClick={linkCallBack}></Link> : <></>;
    const showRupees = rupees ? <TextPrimary text={rupees}></TextPrimary> : <></>;
    const showExpiry = expiryYearText ? <TextContent text={expiryYearText}></TextContent> : <></>;
    const showButton = buttonText ? <CustomButton text={buttonText} type={BUTTON_TYPES.OUTLINED} bgColor={'white'} borderColor={'#0275d8'} color={'#0275d8'} onButtonClick={buttonCallBack}></CustomButton> : <></>;
    return (
        <React.Fragment>
            <Card style={defaultStyles} id="uniqueCard">
                {showBadge}
                <ImageContainer>
                    {showLogo}
                </ImageContainer>
                <SecondaryContainer>
                    {showTitle}
                </SecondaryContainer>
                <PackContainer>
                    {showPackage}
                </PackContainer>
                <PackContainer>
                    {showTargetText}
                </PackContainer>
                <LinkContainer>
                    {showLink}
                </LinkContainer>
                <HorizantalLine></HorizantalLine>
                <AmountContainer>
                    <span>
                        <CustomSymbol color={'black'} fontSize={'24px'}>
                            &#8377;
                        </CustomSymbol>
                    </span>
                    <span>
                        {showRupees}
                    </span>
                    <CustomSymbol color={'black'}>
                        &nbsp;
                        </CustomSymbol>
                    <YearContainer>
                        {showExpiry}
                    </YearContainer>
                </AmountContainer>
                <ButtonContainer>
                    {showButton}
                </ButtonContainer>
            </Card>
        </React.Fragment>
    )
}


const SecondaryContainer = styled.div`
 height: 60px
`

const ButtonContainer = styled.div`
`
const YearContainer = styled.div`
padding-bottom: 0px;
`
const AmountContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 10px;
`
const PackContainer = styled.div`
height: 30px;
`
const HorizantalLine = styled.div`
border: 0.8px solid lightgray;
margin-bottom: 20px;
`
const ImageContainer = styled.div`
    display: 'flex';
    justify-content: 'center';
    margin-top: 10px;
`

const LinkContainer = styled.div`
height: 40px;
`
export default PricePackCard
