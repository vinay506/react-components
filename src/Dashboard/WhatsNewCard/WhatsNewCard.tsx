import React from 'react';
import styled from 'styled-components';
import {TextPrimary,TextSecondary,Link} from '../../simpleComponents';

const WhatsNewCard = (props:any) => {
    const {title,content,image,link} = props;
    const contactUs = () => {
        console.log('click on link')
    }
    return (
        <Card>
            <img src={image.url} style={image.styles}/>
            <CardContent>
                <TextPrimary text={title.text} styles={title.styles}></TextPrimary>
                <TextSecondary text={content.text} styles={content.styles}></TextSecondary>
                <Link  text={link.text} fontSize="12px" display="inline" onLinkClick={contactUs}></Link>
            </CardContent>
        </Card>
    )
}

const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 250px;
border-radius: 5px;
background-color:#EAECF1;
`

const CardContent = styled.div`
padding: 10px;
`

export default WhatsNewCard;
