/**
 *   Author : vinay
 *   Date: 07/05/2020
 * 
 * Descirption:
 *   Data Config for payament Cards data
 * 
 *  */ 


import React from 'react';
import { Link } from '../../simpleComponents'


const contactUs = ()=>{
    console.log('Clicked on contact us')
}

export const cardsDetails = [{
    avatarConfig: { 
        styles: {
            height: '40px',
            width: '40px',
            marginBottom: '20px'
        }
    },
    primaryTextConfig: {
        text: 'Cancel anything with in 15 days...'
    },
    secondaryTextConfig: {
        text: `Change your mind? Don't worry, you can cancel your pack anytime with in 15 days and get pull refund*`
    }
}, {
    avatarConfig: {
        styles: {
            height: '40px',
            width: '40px',
            marginBottom: '20px'
        }
    },
    primaryTextConfig: {
        text: 'Dedicated Support team to help you make your decision'
    },
    secondaryTextConfig: {
        text: <span>Need help to select the pack that is best suited to your preparation needs? <Link text='Contact US' fontSize="12px" display="inline" onLinkClick={contactUs}></Link> anytime</span>
    }
}];