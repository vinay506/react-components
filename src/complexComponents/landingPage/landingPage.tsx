import React from 'react';
import LandingPage1 from './landingpage1/landingPage1';
import Landingpage2 from './landingpage2/landingpage2';

const LandingPage = () => {
    const getLandingPage1 = ()=>{
        return <LandingPage1></LandingPage1>
        
    }
    const getLandingPage2 =()=>{
        return (
            <Landingpage2></Landingpage2>
        )
    }
    return(
       <div>
            {getLandingPage1()}
            {getLandingPage2()}
       </div>
    )
}

export default LandingPage;
