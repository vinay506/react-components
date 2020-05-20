import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import TextSecondary from './TextSecondary';
import 'jest-styled-components';
describe('Text Secondary', () => {
    let wrapper: any;
    let propInfo: any;
    let defaultStyles: any;
    beforeEach(() => {
        propInfo = {
            text: 'Sample Text Secondary',
            styles: {
                color: 'red'
            }
        };
        defaultStyles = {
            color: 'black',
            fontSize: '18px',
            fontFamily: 'AmazonEmber-bold',
            letterSpacing: '0',
            lineHeight: '24px'
        }
        wrapper = shallow(<TextSecondary {...propInfo} />);
    });
    test('Secondary Text Snapshot', () => {
        const instance = renderer.create(<TextSecondary {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toMatchSnapshot();
    })
    test('Secondary Text Element check', () => {
        const elementLength = wrapper.find('#textSecondary').length;
        expect(elementLength).toEqual(1);
    })
    test('Secondary Text Validation', () => {
        const primaryText = wrapper.find('#textSecondary').text();
        expect(primaryText).toEqual(propInfo.text);
    })
    test('Secondary Text Color Validation', () => {
        const elementStyles = wrapper.find('#textSecondary');
        expect(elementStyles.props().style.color).toEqual(propInfo.styles.color);
    })

    test('Text Secondary Default Color Validation', () => {
        const instance = renderer.create(<TextSecondary {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.color);
    })

    test('Text Secondary Default font-size Validation', () => {
        const instance = renderer.create(<TextSecondary {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.fontSize);
    })

    test('Text Secondary Default font-family Validation', () => {
        const instance = renderer.create(<TextSecondary {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.fontFamily);
    })

    test('Text Secondary Default letter Spacing Validation', () => {
        const instance = renderer.create(<TextSecondary {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.letterSpacing);
    })

    test('Text Secondary Default line Height Validation', () => {
        const instance = renderer.create(<TextSecondary {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.lineHeight);
    })
})

