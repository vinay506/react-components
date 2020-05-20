import React from 'react';
import { shallow } from 'enzyme';
import { TextWithTooltip } from '../index';
import {InfoIcon,Tooltip} from './../../simpleComponents';

describe('<TextWithTooltip Component>', function () {
    let wrapper: any;
    let props: any;
    beforeEach(() => {
        props = {
            text: 'Sample Text',
            tooltip:{id:'sampleText',backgroundColor:'#d8c7c7',textColor:'#000',multiline:true,place:'bottom'},
            tooltipText:'Sample Text'
        };
        wrapper = shallow( <TextWithTooltip text={props.text} tooltip={props.tooltip} tooltipText={props.tooltipText} ><InfoIcon styles={{width:'20px',height:'15px'}}></InfoIcon></TextWithTooltip>);

    });

    // Snapshot test
    it('should render Text with Tooltip component', () => {
        expect(wrapper.exists()).toBe(true);
    })

    it('should render the ToolTipContentWithText styled component',()=>{        
        const styledComponent = wrapper.find('.ToolTipContentWithText')
        expect(styledComponent.exists()).toBe(true);
    })

    it('should render the Tooltip component',()=>{        
        const styledComponent = wrapper.find('.ToolTipContentWithText')
        const tooltipComponent = styledComponent.find(Tooltip);
        expect(tooltipComponent.exists()).toBe(true);
    })


    it('should render the text passed from the props',()=>{        
        const styledComponent = wrapper.find('.ToolTipContentWithText')
        const text = styledComponent.find('.textWithTooltip').text();
        expect(text).toEqual(props.text);
    })

})