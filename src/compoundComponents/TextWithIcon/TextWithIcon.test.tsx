import React from 'react';
import { shallow } from 'enzyme';
import { TextWithIcon } from '../index';
import InfoIcon from './../../simpleComponents/Icons/InfoIcon/InfoIcon';

describe('<TextWithIcon Component>', function () {
    let wrapper: any;
    let props: any;
    beforeEach(() => {
        props = {
            text: 'Sample Text',
        };
        wrapper = shallow(<TextWithIcon text={props.text} ><InfoIcon styles={{width:'20px',height:'15px'}}></InfoIcon></TextWithIcon>);

    });

    // Snapshot test
    it('should render Text with Icon component', () => {
        expect(wrapper.exists()).toBe(true);
    })

    it('should render IconWithText styled component', () => {
        const styledComponent = wrapper.find('.IconWithText');
        expect(styledComponent.exists()).toBe(true);
    })

    it('should match with given text',()=>{        
        const styledComponent = wrapper.find('.IconWithText')
        const iconText = styledComponent.find('.iconText').text();
        expect(iconText).toEqual(props.text);
    })

    it('should have Icon as children',()=>{        
        const styledComponent = wrapper.find('.IconWithText')
        const iconContainer = styledComponent.find('.iconContainer');
        const icon = iconContainer.find(InfoIcon);
        expect(icon.exists()).toBe(true);
    })

})