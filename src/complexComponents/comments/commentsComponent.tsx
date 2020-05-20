import React from 'react';
import {CommentsCard} from '../../compoundComponents';
import styled from 'styled-components';
import { TextSecondary, TextPrimary } from '../../simpleComponents';
import { CommentsList } from './commentsListConfig';


const Comments = () => {
    return (
        <CommentsOuterPart className="commentsOuterPart">
            <HeaderText>
                <TextPrimary text="Trusted by 100,000 students in India" styles={textPrimaryStyles} ></TextPrimary>
                <TextSecondary text="Here from our happy customers" styles={textSecondaryStyles}></TextSecondary>
            </HeaderText>
            <CommentsContainer>
                {
                    CommentsList.map((comment, index) => {
                        return <CommentsCard
                            key={'comment' + index}
                            avatar={comment.avatarConfig}
                            secondaryText={comment.secondaryTextConfig}
                            nameInfo={comment.NameConfig}>
                            ></CommentsCard>
                    })
                }
            </CommentsContainer>
        </CommentsOuterPart>
    )
}

const textSecondaryStyles = {

    fontWeight: "500",
    fontSize: "12px"
}

const textPrimaryStyles = {
    marginBottom: '20px',
    fontSize:"16px"
}

const CommentsOuterPart = styled.div`
    background:#e8f0fe;
    padding-left:100px;
    padding-top:30px;
`;

const CommentsContainer = styled.div`
    display:flex;
    overflow-x:auto;
`
const HeaderText = styled.div`
    margin-bottom:20px;
    margin-left:2%
`;


export default Comments;
