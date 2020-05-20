import React from 'react';
import { shallow } from 'enzyme';
import { CustomTbody, CustomThead, CustomTable, CustomTableContext} from '../../index';
import renderer from 'react-test-renderer'


describe('<Custom Table Tag >', function () {
    let props: any;
    let tree: any;
    let wrapper: any;
    let table: any;



    beforeEach(() => {
        props = {};
        table = <CustomTable {...props}>     <CustomThead>

        </CustomThead>
            <CustomTbody >
            </CustomTbody></CustomTable>
        wrapper = shallow(table);
    });

    // Snapshot test
    it('should render', () => {
        tree = renderer.create(table).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('checks with the className of Table', () => {
        const props = wrapper.find('table').props();
        expect(props.className).toEqual('mdc-data-table__table')
    })


    it('should have CustomTbody as child', () => {
        const customTbody = wrapper.find(CustomTbody);
        expect(customTbody).toHaveLength(1);
    })

    it('should have CustomThead as child', () => {
        const customThead = wrapper.find(CustomThead);
        expect(customThead.exists()).toBe(true);
    })

})


describe('<Custom Table Context >', function () {
    let props: any;
    let tree: any;
    let wrapper: any;
    beforeEach(() => {
        props = {};
        wrapper = shallow(<CustomTableContext {...props}><CustomTable {...props}>{props.children} </CustomTable></CustomTableContext>);
    });

    // Snapshot test
    it('should render', () => {
        tree = renderer.create(<CustomTableContext {...props}><CustomTable {...props}> {props.children}</CustomTable></CustomTableContext>).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('checks with the className of table context', () => {
        const props = wrapper.find('div').props();
        expect(props.className).toEqual('mdc-data-table')
    })
    it('should have customtable as child', () => {
        const customTable = wrapper.find(CustomTable);
        expect(customTable.exists()).toBe(true);
    })

})