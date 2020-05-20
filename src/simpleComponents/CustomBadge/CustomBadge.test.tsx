import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import CustomBadge from './CustomBadge';
import 'jest-styled-components';

describe('Custom Button Outlined', () => {
    let wrapper: any;
    let propInfo: any;
    let defaultStyles: any;
    beforeEach(() => {
        propInfo = {
            text: 'Recomended',
            bgColor: 'gray',
            color: 'white',
            position: 'absolute',
            top: '20px',
            right: '20px',
            left: '20px',
            bottom: '10px',
            borderRadius: '10px'
        }

        defaultStyles = {
            backgroundColor: 'blue',
            color: 'white',
            padding: '5px',
            borderRadius: '5px',
            height: '10px',
            minWidth: '20px',
            fontSize: '12px'
        }

        wrapper = shallow(<CustomBadge {...propInfo} />);
    });


    test('Custom Badge Snapshot', () => {
        const instance = renderer.create(<CustomBadge {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toMatchSnapshot();
    })
    test('Custom Badge Element check', () => {
        const elementLength = wrapper.find('#uniqueBadge').length;
        expect(elementLength).toEqual(1);
    })
    // Props Validation Check
    test('Custom Badge Color Validation', () => {
        const elementStyles = wrapper.find('#uniqueBadge').text();
        expect(elementStyles).toEqual(propInfo.text);
    })
    test('Custom Badge Color Validation', () => {
        const elementStyles = wrapper.find('#uniqueBadge');
        expect(elementStyles.props().style.color).toEqual(propInfo.color);
    })
    test('Custom Badge Background Color Validation', () => {
        const elementStyles = wrapper.find('#uniqueBadge');
        expect(elementStyles.props().style.backgroundColor).toEqual(propInfo.bgColor);
    })
    test('Custom Badge Position Validation', () => {
        const elementStyles = wrapper.find('#uniqueBadge');
        expect(elementStyles.props().style.position).toEqual(propInfo.position);
    })
    test('Custom Badge Top Validation', () => {
        const elementStyles = wrapper.find('#uniqueBadge');
        expect(elementStyles.props().style.top).toEqual(propInfo.top);
    })

    test('Custom Badge Bottom Validation', () => {
        const elementStyles = wrapper.find('#uniqueBadge');
        expect(elementStyles.props().style.bottom).toEqual(propInfo.bottom);
    })

    test('Custom Badge Right Validation', () => {
        const elementStyles = wrapper.find('#uniqueBadge');
        expect(elementStyles.props().style.right).toEqual(propInfo.right);
    })

    test('Custom Badge Left Validation', () => {
        const elementStyles = wrapper.find('#uniqueBadge');
        expect(elementStyles.props().style.left).toEqual(propInfo.left);
    })

    test('Custom Badge Left Validation', () => {
        const elementStyles = wrapper.find('#uniqueBadge');
        expect(elementStyles.props().style.borderRadius).toEqual(propInfo.borderRadius);
    })

    // Defualt Style Validation
    test('Custom Badge Default Background Color Validation', () => {
        const instance = renderer.create(<CustomBadge {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.backgroundColor);
    })

    test('Custom Badge Default Color Validation', () => {
        const instance = renderer.create(<CustomBadge {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.color);
    })

    test('Custom Badge Default Padding Validation', () => {
        const instance = renderer.create(<CustomBadge {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.padding);
    })

    test('Custom Badge Default Border Radius Validation', () => {
        const instance = renderer.create(<CustomBadge {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.borderRadius);
    })
    test('Custom Badge Default Height Validation', () => {
        const instance = renderer.create(<CustomBadge {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.height);
    })

    test('Custom Badge Default Min Width Validation', () => {
        const instance = renderer.create(<CustomBadge {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.minWidth);
    })

    test('Custom Badge Default Font Size Validation', () => {
        const instance = renderer.create(<CustomBadge {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.fontSize);
    })


})