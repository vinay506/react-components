import React from 'react';
import { TextSecondary, RectangleCard, RoundedBox, CommentIcon, NameWithSubText,DisplayWithFlex } from '../../simpleComponents';


const CommentsCard = (props: any) => {
    return (
        <RectangleCard>
            <CommentIcon styles={{ height: '30px', width: '30px' }}></CommentIcon>
            <TextSecondary text={props.secondaryText.text} styles={SecondaryTextStyles}></TextSecondary>
            <DisplayWithFlex>
                <RoundedBox style={props.avatar.styles}>
                </RoundedBox>
                <NameWithSubText nameInfo={props.nameInfo}>
                </NameWithSubText>
            </DisplayWithFlex>
        </RectangleCard>
    )
}

const SecondaryTextStyles = {
    fontWeight: "500", fontSize: "12px",
    marginBottom: '20px',
    marginTop: '15px',
    width: '300px',
    whiteSpace: 'break-spaces'
}


export default CommentsCard;
