import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import Link from './Link';
import 'jest-styled-components'

describe('Anchor Link View', () => {
    let wrapper: any;
    let propInfo: any;
    let defaultStyles: any;
    const callBack = () => {
        return true;
    }
    beforeEach(() => {
        propInfo = {
            text: 'View Schedule',
            onLinkClick: callBack,
            color: 'blue',
            fontSize: '12px',
            display: 'flex'
        };
        defaultStyles = {
            color: '#0275d8',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 600
        }

        wrapper = shallow(<Link {...propInfo} />);
    });
    test('Anchor Link Snapshot', () => {
        const instance = renderer.create(<Link {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toMatchSnapshot();
    })
    test('Anchor Link Element check', () => {
        const elementLength = wrapper.find('#anchor').length;
        expect(elementLength).toEqual(1);
    })
    test('Anchor Link Styles Validation', () => {
        const elementStyles = wrapper.find('#anchor');
        expect(elementStyles.props().style).toEqual({
            color: propInfo.color, fontSize: propInfo.fontSize, display: propInfo.display
        });
    })

    test('Anchor Link Click Test', () => {
        const button = wrapper.find('#anchor');
        const clickEvent = button.simulate('click');
        const returnValue = expect(clickEvent).toBeCalled;
        expect(returnValue).toBeTruthy();
    })

    // default styles validation
    test('Link Default Width Validation', () => {
        const instance = renderer.create(<Link {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.width);
    })

    test('Link Default cursor Validation', () => {
        const instance = renderer.create(<Link {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.cursor);
    })

    test('Link Default font-size Validation', () => {
        const instance = renderer.create(<Link {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.fontSize);
    })

    test('Link Default font-weight Validation', () => {
        const instance = renderer.create(<Link {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.fontWeight);
    })
})
