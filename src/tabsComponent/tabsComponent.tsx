import React from 'react';
import { TabBar, Tab } from '@rmwc/tabs';
import '@rmwc/tabs/styles';


import Pricing from '../simpleComponents/Pricing';
import Tables from '../complexComponents/tableComponents/tablesComponent';
import Comments from '../complexComponents/comments/commentsComponent';
import PaymentCards from '../complexComponents/payments/paymentsCardsContainer';
import WhatsNewCards from '../Dashboard/WhatsNewCard/WhatsNewContainer';
import LandingPage from '../complexComponents/landingPage/landingPage';
import Landingpage2 from '../complexComponents/landingPage/landingpage2/landingpage2'

const tabs = [{
    displayName: 'TBBC Components',
    componentName: 'pricing'
}, {
    displayName:'Landing Page Components',
    componentName:'landingPage'
}, {
    displayName:'Landing Page 2',
    componentName:'landingPage2'
},{
    displayName: 'Table Components',
    componentName: 'tableview'
},
{
    displayName: 'Payment Components',
    componentName: 'paymentcard'
}, {
    displayName: 'Comments Components',
    componentName: 'commentscard'
}, {
    displayName: 'Whats New Components',
    componentName: 'whatsNewCards'
}];

const tabsMapping:any = {
    pricing: <Pricing></Pricing>,
    tableview: <Tables></Tables>,
    paymentcard: <PaymentCards></PaymentCards>,
    commentscard: <Comments></Comments>,
    whatsNewCards:<WhatsNewCards></WhatsNewCards>,
    landingPage:<LandingPage></LandingPage>,
    landingPage2:<Landingpage2></Landingpage2>
}

const TabsComponent = () => {
    const [activeTab, setActiveTab] = React.useState(0);
    const [currentTab,setCurrentTab] = React.useState(tabs[0]);

    const setTabAsActive = (evt: any) => {
        setCurrentTab(tabs[evt.detail.index]);        
        setActiveTab(evt.detail.index)
    }

    const getContentBasedOnTab = () => {
        const name:string = currentTab.componentName;
        return <div>{tabsMapping[name]}</div>
    }

    return (
        <React.Fragment>
            <TabBar
                activeTabIndex={activeTab}
                onActivate={evt => setTabAsActive(evt)}
            >
                <Tab>TBBC Components</Tab>
                <Tab>Landing Page Components</Tab>
                <Tab>Landing Page 2</Tab>
                {/* <Tab>Table Components</Tab>
                <Tab>PayMent Made Component</Tab>
                <Tab>Comments Component</Tab>
                <Tab>Whats New Components</Tab> */}
            </TabBar>
            <div>
                {getContentBasedOnTab()}
            </div>

        </React.Fragment>

    );
};
export default TabsComponent;