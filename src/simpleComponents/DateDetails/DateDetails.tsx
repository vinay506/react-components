import React from 'react'
import styled from 'styled-components';

const getMonthAndDate = (date: any) => {
    date = (date) ? new Date(date) : new Date()
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const dateObj = {
        month: months[date.getMonth()],
        day: date.getDate()
    }
    return dateObj;
}

const DateDetails = (props: any) => {
    const { date, styles } = props;
    const { month, day } = getMonthAndDate(date);
    return (
        <DateCard style={styles}>
            <Month>{month}</Month>
            <Seperator></Seperator>
            <Day>{day}</Day>
        </DateCard>
    )
}

const DateCard = styled.div`
    border-radius:10px;
    width:112px;
    height:144px;
    color:#fff;
    background:rgba(255,255,255,0.24);
    text-align:center;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Month = styled.div`
    font-weight:500px;
    font-size:24px;
`;

const Seperator = styled.hr`
    width:32px;
    height:2px;
`

const Day = styled.div`
    font-weight:500px;
    font-size:34px;
`;
export default DateDetails
