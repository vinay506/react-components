import React from 'react';
import { shallow } from 'enzyme';
import { CustomThCell } from '../../index';
import renderer from 'react-test-renderer'


describe('<Custom TH Cell >', function () {
    let wrapper: any;
    let props: any;
    let tree: any;
    beforeEach(() => {
        props = {
            style:{fontWeight:'bold',height:'45px'}
        };
        wrapper = shallow(<CustomThCell {...props}>Sample value for th</CustomThCell>)
    });

    // Snapshot test
    it('should render ', () => {
        tree = renderer.create(<CustomThCell {...props}></CustomThCell>).toJSON()
        expect(tree).toMatchSnapshot()
    })

      it('should render Th cell', () => {
        const th = wrapper.find('th');
        expect(th.exists()).toBe(true);
    })

    it('should match the value', () => {
        const value = wrapper.find('th').text();
        expect(value).toEqual('Sample value for th')
    })

    it('should match with classnames of th', () => {
        const props = wrapper.find('th').props();
        expect(props.className).toEqual('rmwc-data-table__cell mdc-data-table__header-cell')
    })

    it('should match with styles from props', () => {
        const props = wrapper.find('th').props();
        expect(props.style).toEqual({"fontWeight":"bold","height":"45px"});
    })

    
})