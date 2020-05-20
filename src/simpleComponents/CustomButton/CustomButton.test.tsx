import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import CustomButton, { BUTTON_TYPES } from './CustomButton';

describe('Custom Button Outlined', () => {
    let wrapper: any;
    let propInfo: any;
    const buttonEvent = () => {
        return true;
    }
    beforeEach(() => {
        propInfo = {
            text: 'Get Started',
            type: BUTTON_TYPES.OUTLINED,
            onButtonClick: buttonEvent,
            color: 'blue',
            bgColor: 'white',
            borderColor: 'blue'
        }

        wrapper = shallow(<CustomButton {...propInfo} />);
    });
    test('Custom Button Snapshot', () => {
        const instance = renderer.create(<CustomButton {...propInfo} />);
        const tree = instance.toJSON();
        expect(tree).toMatchSnapshot();
    })
    test('Custom Button Element check', () => {
        const elementLength = wrapper.find('#outlined').length;
        expect(elementLength).toEqual(1);
    })
    test('Custom Button Styles Validation', () => {
        const elementStyles = wrapper.find('#outlined');
        expect(elementStyles.props().style).toEqual({
            color: propInfo.color,
            backgroundColor: propInfo.bgColor,
            borderColor: propInfo.borderColor
        });
    })

    test('Custom Button Click Test', () => {

        const wrapper = shallow(<CustomButton onButtonClick={buttonEvent} type={BUTTON_TYPES.OUTLINED} />);
        const button = wrapper.find('#outlined');
        const clickEvent = button.simulate('click');
        const returnValue = expect(clickEvent).toBeCalled;
        expect(returnValue).toBeTruthy();
    })
})