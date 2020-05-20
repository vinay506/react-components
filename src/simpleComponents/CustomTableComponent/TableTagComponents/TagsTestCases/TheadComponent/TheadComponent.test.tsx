import React from 'react';
import { shallow } from 'enzyme';
import { CustomThead, CustomTableRow, CustomThCell,CustomTdCell } from '../../index';
import renderer from 'react-test-renderer'

const headerColumns = [{ title: "Tests", styles: { fontWeight: 'bold', height: '45px' } }];
const getCustomTableHeaderCells = () => {
    return (headerColumns || []).map((column: any, index: number) => {
        return <CustomThCell style={column.styles} key={'hdcol-' + index}>{column.title}</CustomThCell>
    })
}
describe('<Custom Theader Tag >', function () {
    let props: any;
    let tree: any;
    let wrapper: any;
    beforeEach(() => {
        props = {};
        wrapper = shallow(<CustomThead {...props}> <CustomTableRow headerRow>
            {getCustomTableHeaderCells()}
        </CustomTableRow></CustomThead>);
    });

    // Snapshot test
    it('should render', () => {
        tree = renderer.create(<CustomThead {...props}> <CustomTableRow headerRow>
            {getCustomTableHeaderCells()}
        </CustomTableRow></CustomThead>).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('checks with the className of Table header', () => {
        const props = wrapper.find('thead').props();
        expect(props.className).toEqual('rmwc-data-table__head');
    })

    it('checks the flag in custom table row', () => {
        const customTableRow = wrapper.find(CustomTableRow);
        const props = customTableRow.props();
        expect(props.headerRow).toBeTruthy()
    })

    it('checks the existing of CustomThCell cells in tr', () => {
        const customTableRow = wrapper.find(CustomTableRow);
        const thcells = customTableRow.find(CustomThCell);
        expect(thcells).toHaveLength(1);
    })

    it('checks to make sure that it holds CustomThCell cells only in tr', () => {
        const customTableRow = wrapper.find(CustomTableRow);
        const tdcells = customTableRow.find(CustomTdCell);
        expect(tdcells).toHaveLength(0);
    })


})