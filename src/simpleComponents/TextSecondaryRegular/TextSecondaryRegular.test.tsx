import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import 'jest-styled-components';
import TextSecondaryRegular from './TextSecondaryRegular';
describe('Text Secondary', () => {
    let wrapper: any;
    let propInfo: any;
    let defaultStyles: any;
    beforeEach(() => {
        propInfo = {
            text: 'Sample Text Secondary',
            color: 'red'
        };
        defaultStyles = {
            color: 'black',
            fontSize: '18px',
            fontFamily: 'AmazonEmber-regular',
            letterSpacing: '0',
            lineHeight: '24px'

        }
        wrapper = shallow(<TextSecondaryRegular {...propInfo} />);
    });
    test('Secondary Text Snapshot', () => {
        const instance = renderer.create(<TextSecondaryRegular {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toMatchSnapshot();
    })
    test('Secondary Text Element check', () => {
        const elementLength = wrapper.find('#textSecondaryRegular').length;
        expect(elementLength).toEqual(1);
    })
    test('Secondary Text Validation', () => {
        const primaryText = wrapper.find('#textSecondaryRegular').text();
        expect(primaryText).toEqual(propInfo.text);
    })
    test('Secondary Text Color Validation', () => {
        const elementStyles = wrapper.find('#textSecondaryRegular');
        expect(elementStyles.props().style.color).toEqual(propInfo.color);
    })

    test('Text Secondary Default Color Validation', () => {
        const instance = renderer.create(<TextSecondaryRegular {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.color);
    })

    test('Text Secondary Default font-size Validation', () => {
        const instance = renderer.create(<TextSecondaryRegular {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.fontSize);
    })

    test('Text Secondary Default font-family Validation', () => {
        const instance = renderer.create(<TextSecondaryRegular {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.fontFamily);
    })

    test('Text Secondary Default letter Spacing Validation', () => {
        const instance = renderer.create(<TextSecondaryRegular {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.letterSpacing);
    })

    test('Text Secondary Default line Height Validation', () => {
        const instance = renderer.create(<TextSecondaryRegular {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.lineHeight);
    })
})

