import React from 'react';
import { shallow } from 'enzyme';
import { Tooltip } from '../index';
import renderer from 'react-test-renderer';
import ReactTooltip from "react-tooltip";
import InfoIcon from './../Icons/InfoIcon/InfoIcon';

describe('<Tooltip>', function () {
    let wrapper: any;
    let props: any;
    beforeEach(() => {
        props = {
            tooltip: { id: 'sampleTooltip', backgroundColor: '#d8c7c7', textColor: '#000', multiline: true, place: 'bottom' }, 
            tooltipText:"Sample Tooltip" 
        };
        wrapper = shallow(<Tooltip tooltip={props.tooltip} tooltipText={props.tooltipText}><InfoIcon styles={{width:'20px',height:'15px'}}></InfoIcon></Tooltip>);

    });

    // Snapshot test
    it('should render tooltip component', () => {
        expect(wrapper.exists()).toBe(true);
    })

    it('should have ReactToolTip tag',()=>{        
        const reactToolTip = wrapper.find(ReactTooltip);
        expect(reactToolTip).toHaveLength(1);
    })

    it('should have ToolTipFor styled component',()=>{        
        const toolTipFor = wrapper.find('.toolTipFor');
        expect(toolTipFor).toHaveLength(1);
    })

    it('shold have Info Icon as child',()=>{        
        const toolTipForDiv = wrapper.find('.toolTipFor');
        const infoIcon = toolTipForDiv.find(InfoIcon);
        expect(infoIcon).toHaveLength(1);
    })

    it('shold render the passed text on over',()=>{        
        const toolTipForDiv = wrapper.find('.toolTipFor');
        const infoIcon = toolTipForDiv.find(InfoIcon);
        infoIcon.simulate("mouseover");
        const reactTooltip = wrapper.find(ReactTooltip);
        const text = reactTooltip.find('span').text();
        expect(text).toEqual(props.tooltipText);
    })
})