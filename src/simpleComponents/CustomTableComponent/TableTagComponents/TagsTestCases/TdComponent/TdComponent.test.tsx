import React from 'react';
import { shallow } from 'enzyme';
import { CustomTdCell } from '../../index';
import renderer from 'react-test-renderer'


describe('<Custom TD Cell >', function () {
    let wrapper: any;
    let props: any;
    let tree: any;
    beforeEach(() => {
        props = {
            style:{fontWeight:'bold',height:'45px'}
        };
        wrapper = shallow(<CustomTdCell {...props}>Sample value for td</CustomTdCell>)
    });

    // Snapshot test
    it('should render', () => {
        tree = renderer.create(<CustomTdCell {...props}></CustomTdCell>).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('should render Td cell', () => {
        const td = wrapper.find('td');
        expect(td.exists()).toBe(true);
    })

    it('should match the value', () => {
        const value = wrapper.find('td').text();
        expect(value).toEqual('Sample value for td')
    })

    it('should match with classnames of td', () => {
        const props = wrapper.find('td').props();
        expect(props.className).toEqual('mdc-data-table__cell rmwc-data-table__cell')
    })

    it('should match with styles from props', () => {
        const props = wrapper.find('td').props();
        expect(props.style).toEqual({"fontWeight": "bold", "height": "45px"});
    })

    it('should display X on Empty', () => {
        const emptyCell = shallow(<CustomTdCell {...props}></CustomTdCell>)
        const text = emptyCell.find('td').text();
        expect(text).toEqual('X');
    })
    
})