import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import TextBlur from './TextBlur';
import 'jest-styled-components';
describe('Text Blur', () => {
    let wrapper: any;
    let propInfo: any;
    let defaultStyles: any;
    beforeEach(() => {
        propInfo = {
            text: 'Sample Text Blur',
            color: 'red'
        };
        defaultStyles = {
            color: 'darkgrey',
            fontSize: '12px',
            fontWeight: 400
        }
        wrapper = shallow(<TextBlur {...propInfo} />);
    });
    test('Blur Text Snapshot', () => {
        const instance = renderer.create(<TextBlur {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toMatchSnapshot();
    })
    test('Blur Text Element check', () => {
        const elementLength = wrapper.find('#textBlur').length;
        expect(elementLength).toEqual(1);
    })
    test('Blur Text Validation', () => {
        const primaryText = wrapper.find('#textBlur').text();
        expect(primaryText).toEqual(propInfo.text);
    })
    test('Blur Text Color Validation', () => {
        const primaryTextStyles = wrapper.find('#textBlur');
        expect(primaryTextStyles.props().style.color).toEqual(propInfo.color);
    })


    test('Text Blur Color Validation', () => {
        const instance = renderer.create(<TextBlur {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.color);
    })

    test('Text Blur font-size Validation', () => {
        const instance = renderer.create(<TextBlur {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.fontSize);
    })

    test('Text Blur Default font-weight Validation', () => {
        const instance = renderer.create(<TextBlur {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.fontWeight);
    })
})

