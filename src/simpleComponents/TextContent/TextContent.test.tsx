import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import TextContent from './TextContent';
import 'jest-styled-components';
describe('Text Content', () => {
    let wrapper: any;
    let propInfo: any;
    let defaultStyles: any;
    beforeEach(() => {
        propInfo = {
            text: 'Sample Text Primary',
            color: 'red'
        };
        defaultStyles = {
            color: 'darkgrey',
            fontSize: '13px',
            fontFamily: 'AmazonEmber-Regular',
            letterSpacing: '0',
            lineHeight: '20px'
        }
        wrapper = shallow(<TextContent {...propInfo} />);
    });
    test('Content Text Snapshot', () => {
        const instance = renderer.create(<TextContent {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toMatchSnapshot();
    })
    test('Content Text Element check', () => {
        const elementLength = wrapper.find('#textContent').length;
        expect(elementLength).toEqual(1);
    })
    test('Content Text Validation', () => {
        const primaryText = wrapper.find('#textContent').text();
        expect(primaryText).toEqual(propInfo.text);
    })
    test('Content Text Color Validation', () => {
        const primaryTextStyles = wrapper.find('#textContent');
        expect(primaryTextStyles.props().style.color).toEqual(propInfo.color);
    })

    test('Text Content Default Color Validation', () => {
        const instance = renderer.create(<TextContent {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.color);
    })

    test('Text Content font-size Validation', () => {
        const instance = renderer.create(<TextContent {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.fontSize);
    })

    test('Text Content font-family Validation', () => {
        const instance = renderer.create(<TextContent {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.fontFamily);
    })

    test('Text Content letterSpacing Validation', () => {
        const instance = renderer.create(<TextContent {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.letterSpacing);
    })

    test('Text Content lineHeight Validation', () => {
        const instance = renderer.create(<TextContent {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.lineHeight);
    })

})

