import React from 'react';
import TextPrimary from './TextPrimary';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import 'jest-styled-components'

describe('Text Primary', () => {
    let wrapper: any;
    let propInfo: any;
    let defaultStyles: any
    beforeEach(() => {
        propInfo = {
            text: 'Sample Text Primary',
            styles: {
                color: 'red'
            }
        };
        defaultStyles = {
            color: 'black',
            fontSize: '24px',
            fontFamily: 'AmazonEmber-Bold',
            letterSpacing: '0',
            lineHeight: '28px'
        }
        wrapper = shallow(<TextPrimary {...propInfo} />);
    });
    test('Primary Text Snapshot', () => {
        const instance = renderer.create(<TextPrimary {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toMatchSnapshot();
    })
    test('Primary Text Element check', () => {
        const elementLength = wrapper.find('#textPrimary').length;
        expect(elementLength).toEqual(1);
    })
    test('Primary Text Validation', () => {
        const primaryText = wrapper.find('#textPrimary').text();
        expect(primaryText).toEqual(propInfo.text);
    })
    test('Primary Text Color Validation', () => {
        const primaryTextStyles = wrapper.find('#textPrimary');
        expect(primaryTextStyles.props().style.color).toEqual(propInfo.styles.color);
    })

    // Default Styles check
    test('Text Primary Default Color Validation', () => {
        const instance = renderer.create(<TextPrimary {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.color);
    })

    test('Text Primary Default font-size Validation', () => {
        const instance = renderer.create(<TextPrimary {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.fontSize);
    })

    test('Text Primary Default font-family Validation', () => {
        const instance = renderer.create(<TextPrimary {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.fontFamily);
    })

    test('Text Content letterSpacing Validation', () => {
        const instance = renderer.create(<TextPrimary {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.letterSpacing);
    })

    test('Text Content lineHeight Validation', () => {
        const instance = renderer.create(<TextPrimary {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.lineHeight);
    })
})

