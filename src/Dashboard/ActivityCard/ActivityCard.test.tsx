import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import 'jest-styled-components'
import ActivityCard from './ActivityCard';
import reactIcon from '../../images/react-icon.png';
import { TextContent, TextSecondaryRegular } from '../../simpleComponents';

describe('Content Over Card', () => {
    let wrapper: any;
    let propInfo: any;
    let defaultCardStyles: any;
    let imageStyles = {
        height: '50',
        width: '50'
    }
    const cardClickHandler = () => {
        return true;
    }
    beforeEach(() => {
        propInfo = {
            logoImage: reactIcon,
            title: 'Tests',
            description: 'Take full, part or chapter tests to improve your performance.',
            cardClick: cardClickHandler
        };
        defaultCardStyles = {
            height: '104px',
            width: '333px',
            borderRadius: '8px',
            backgroundColor: '#FFFFFF',
            cursor: 'pointer',
            boxShadow: '0 8px 10px 1px rgba(0, 0, 0, 0.04), 0 3px 14px 2px rgba(0, 0, 0, 0.04), 0 5px 5px - 3px rgba(0, 0, 0, 0.04)'
        };
        wrapper = shallow(<ActivityCard {...propInfo}></ActivityCard>);
    });


    // Snapshot validation
    test('Activity Card Snapshot', () => {
        const instance = renderer.create(<ActivityCard {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toMatchSnapshot();
    })
    // Props Validation
    test('Activity Card Element Validation', () => {
        const elementLength = wrapper.find('#uniqueActivityCard').length;
        expect(elementLength).toEqual(1);
    })

    test('Activity Click Check', () => {
        const button = wrapper.find('#uniqueActivityCard');
        const clickEvent = button.simulate('click');
        const returnValue = expect(clickEvent).toBeCalled;
        expect(returnValue).toBeTruthy();
    })

    test('Activity Card Title Element Check', () => {
        const elementLength = wrapper.find(TextSecondaryRegular).length;
        expect(elementLength).toEqual(1);
    })

    test('Activity Card Title Label Check', () => {
        const element = wrapper.find(TextSecondaryRegular);
        expect(element.props().text).toEqual(propInfo.title);
    })

    test('Activity Card Description Element Check', () => {
        const elementLength = wrapper.find(TextContent).length;
        expect(elementLength).toEqual(1);
    })

    test('Activity Card Description Label Check', () => {
        const element = wrapper.find(TextContent);
        expect(element.props().text).toEqual(propInfo.description);
    })

    test('Activity Card Image Element Validation', () => {
        const imgElement = wrapper.findWhere((obj: any) => obj.type() === 'img');
        expect(imgElement.length).toEqual(1);
    })

    test('Activity Card Image Source Validation', () => {
        const imgElement = wrapper.findWhere((obj: any) => obj.type() === 'img');
        expect(imgElement.props().src).toEqual(reactIcon);
    })

    test('Activity Card Image Height Validation', () => {
        const imgElement = wrapper.findWhere((obj: any) => obj.type() === 'img');
        expect(imgElement.props().height).toEqual(imageStyles.height);
    })

    test('Activity Card Image Width Validation', () => {
        const imgElement = wrapper.findWhere((obj: any) => obj.type() === 'img');
        expect(imgElement.props().width).toEqual(imageStyles.width);
    })
    // default styles validation
    test('Link Default Width Validation', () => {
        const element = wrapper.find('#uniqueActivityCard');
        expect(element.props().style.width).toEqual(defaultCardStyles.width);
    })

    test('Link Default Height Validation', () => {
        const element = wrapper.find('#uniqueActivityCard');
        expect(element.props().style.height).toEqual(defaultCardStyles.height);
    })

    test('Link Default Border Radius Validation', () => {
        const element = wrapper.find('#uniqueActivityCard');
        expect(element.props().style.borderRadius).toEqual(defaultCardStyles.borderRadius);
    })

    test('Link Default Background Color Validation', () => {
        const element = wrapper.find('#uniqueActivityCard');
        expect(element.props().style.backgroundColor).toEqual(defaultCardStyles.backgroundColor);
    })

    test('Link Default cursor Validation', () => {
        const element = wrapper.find('#uniqueActivityCard');
        expect(element.props().style.cursor).toEqual(defaultCardStyles.cursor);
    })

    test('Link Default Box Shadow Validation', () => {
        const element = wrapper.find('#uniqueActivityCard');
        expect(element.props().style.boxShadow).toEqual(defaultCardStyles.boxShadow);
    })

})