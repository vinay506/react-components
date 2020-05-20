import React from 'react'
import '@rmwc/card/styles';
import { Card } from '@rmwc/card';
import styled from 'styled-components'
import TextSecondaryRegular from '../../simpleComponents/TextSecondaryRegular/TextSecondaryRegular';
import { TextContent } from '../../simpleComponents';

const defaultCardStyles = {
    height: '104px',
    width: '333px',
    borderRadius: '8px',
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    boxShadow: '0 8px 10px 1px rgba(0, 0, 0, 0.04), 0 3px 14px 2px rgba(0, 0, 0, 0.04), 0 5px 5px - 3px rgba(0, 0, 0, 0.04)'
};
function ActivityCard(props: any) {
    const { logoImage, title, description, cardClick } = props;
    return (
        <React.Fragment>
            <Card id="uniqueActivityCard" style={defaultCardStyles} onClick={cardClick}>
                <CardContentContainer>
                    <LeftContainer>
                        <LogoContiner>
                            <img src={logoImage} height="50" width="50" alt="Missing Logo" />
                        </LogoContiner>
                    </LeftContainer>
                    <RightContainer>
                        <TitleContainer>
                            <TextSecondaryRegular text={title}></TextSecondaryRegular>
                        </TitleContainer>
                        <DescriptionContainer>
                            <TextContent text={description}></TextContent>
                        </DescriptionContainer>
                    </RightContainer>
                </CardContentContainer>
            </Card>
        </React.Fragment>
    )
}

export default ActivityCard

const CardContentContainer = styled.div`
display: flex;
margin: 16px;
`
const LeftContainer = styled.div``

const RightContainer = styled.div`
  margin-left: 16px;
  `

const LogoContiner = styled.div`
padding: 11px 8px 11px 8px;
width: 64px;
border-radius: 8px;
background-color: #F6F5FA;
`

const TitleContainer = styled.div`
  height: 26px;
  width: 157px;
  color: #150F2D;
  font-family: "Amazon Ember";
  font-size: 17px;
  letter-spacing: 0;
  line-height: 24px;
  text-align: left;
  `

const DescriptionContainer = styled.div`
 height: 40px;
  width: 100%;
  color: #736F81;
  font-family: "Amazon Ember";
  font-size: 13px;
  letter-spacing: 0;
  line-height: 20px;
  text-align: left
  `
