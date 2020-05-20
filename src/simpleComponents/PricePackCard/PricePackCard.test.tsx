import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import PricePackCard from './PricePackCard';
import CustomBadge from '../CustomBadge/CustomBadge';
import TextSecondary from '../TextSecondary/TextSecondary';
import TextPrimary from '../TextPrimary/TextPrimary';
import CustomButton from '../CustomButton/CustomButton';
import Link from '../Link/Link';
import { TextContent } from '..';
describe('Price Pack Testing', () => {
    let wrapper: any;
    let propInfo: any;
    let defaultStyles: any;
    const callBack = () => {
        return true
    }
    const linkCallBack = () => {
        return true;
    }
    beforeEach(() => {
        propInfo = {
            badgeText: 'Recommended',
            titleText: 'JEE',
            packText: '1 year pack',
            targetText: 'Target Year 2020',
            scheduleLink: 'View Schedule',
            rupees: '3000',
            expiryYearText: 'for 1 year',
            buttonText: 'Get Started',
            buttonCallBack: callBack,
            linkCallBack: linkCallBack
        };
        defaultStyles = {
            width: '250px',
            height: '380px',
            border: '1px solid lightgray',
            padding: '10px'
        }
        wrapper = shallow(<PricePackCard {...propInfo} />);
    });
    test('Price Pack Card Snapshot', () => {
        const instance = renderer.create(<PricePackCard {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toMatchSnapshot();
    })

    test('Price Pack Card Existance', () => {
        // const instance = renderer.create(<PricePackCard {...propInfo} />);
        const elementLength = wrapper.find('#uniqueCard').length;
        expect(elementLength).toEqual(1);
    })
    test('Price Pack Badge Existance', () => {
        const count = wrapper.find(CustomBadge).length;
        if (propInfo.badgeText) {
            expect(count).toEqual(1);
        } else {
            expect(count).toEqual(0);
        }
    })

    test('Price Pack Title Existance', () => {
        const titleCount = wrapper.find(TextSecondary).length;
        if (propInfo.titleText) {
            expect(titleCount).toEqual(1);
        } else {
            expect(titleCount).toEqual(0);
        }
    })


    test('Price Pack Rupees Existance', () => {
        const count = wrapper.find(TextPrimary).length;
        if (propInfo.rupees) {
            expect(count).toEqual(1);
        } else {
            expect(count).toEqual(0);
        }
    })

    test('Price Pack Custom Button Existance', () => {
        const count = wrapper.find(CustomButton).length;
        if (propInfo.buttonText) {
            expect(count).toEqual(1);
        } else {
            expect(count).toEqual(0);
        }
    })

    test('Price Pack packText Existance', () => {
        const textContentArr = wrapper.find(TextContent);
        if (propInfo.packText) {
            let isExist = false;
            textContentArr.forEach((obj: any) => {
                if (obj && obj.props()) {
                    if (obj.props().text === propInfo.packText) {
                        isExist = true;
                    }
                }
            })
            expect(isExist).toBeTruthy();
        }
    })

    test('Price Pack targetText Existance', () => {
        const textContentArr = wrapper.find(TextContent);
        if (propInfo.targetText) {
            let isExist = false;
            textContentArr.forEach((obj: any) => {
                if (obj && obj.props()) {
                    if (obj.props().text === propInfo.targetText) {
                        isExist = true;
                    }
                }
            })
            expect(isExist).toBeTruthy();
        }
    })

    test('Price Pack expiryYearText Existance', () => {
        const textContentArr = wrapper.find(TextContent);
        if (propInfo.targetText) {
            let isExist = false;
            textContentArr.forEach((obj: any) => {
                if (obj && obj.props()) {
                    if (obj.props().text === propInfo.expiryYearText) {
                        isExist = true;
                    }
                }
            })
            expect(isExist).toBeTruthy();
        }
    })

    test('Price Pack Custom Link Existance', () => {
        const count = wrapper.find(Link).length;
        if (propInfo.scheduleLink) {
            expect(count).toEqual(1);
        } else {
            expect(count).toEqual(0);
        }
    })

    test('Price Pack Button Click Test', () => {

        const button = wrapper.find(CustomButton);
        const clickEvent = button.simulate('click');
        const returnValue = expect(clickEvent).toBeCalled;
        expect(returnValue).toBeTruthy();
    })

    test('Price Pack Link Click Test', () => {

        const link = wrapper.find(Link);
        const clickEvent = link.simulate('click');
        const returnValue = expect(clickEvent).toBeCalled;
        expect(returnValue).toBeTruthy();
    })

    // Default Styles for Card


    test('Price Pack width Validation', () => {
        const element = wrapper.find('#uniqueCard');
        expect(element.props().style.width).toEqual(defaultStyles.width);
    })

    test('Price Pack height Validation', () => {
        const element = wrapper.find('#uniqueCard');
        expect(element.props().style.height).toEqual(defaultStyles.height);
    })

    test('Price Pack border Validation', () => {
        const element = wrapper.find('#uniqueCard');
        expect(element.props().style.border).toEqual(defaultStyles.border);
    })

    test('Price Pack padding Validation', () => {
        const element = wrapper.find('#uniqueCard');
        expect(element.props().style.padding).toEqual(defaultStyles.padding);
    })
})

