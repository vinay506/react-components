import React from 'react';
import { shallow } from 'enzyme';
import { CustomTbody,CustomTableRow,CustomTdCell } from '../../index';
import renderer from 'react-test-renderer'
import {rows,bodyColumns} from './TbodyMockData';

const getCustomTableRows = (rows: Array<any>) => {
    return rows.map((row,index) => {
      return getCustomTableRow(row,index)
    })
  }

  const getCustomTableRow = (row: any,index:number) => {
    return (
      <CustomTableRow key={'row-'+index}>
        {getCustomTableCells(row)}
      </CustomTableRow>
    )
  }

  const getCustomTableCells = (row: any) => {
    return (bodyColumns || []).map((column: any,index:number) => {
      return <CustomTdCell style={column.styles} key={'bdcol-'+index}>{row[column.key]}</CustomTdCell>
    })
  }

describe('<Custom TBody Tag >', function () {
    let props: any;
    let tree: any;
    let wrapper:any;
    beforeEach(() => {
        props = {};
        wrapper = shallow(<CustomTbody {...props}>{getCustomTableRows(rows)}</CustomTbody>);
    });

    // Snapshot test
    it('should render', () => {
        tree = renderer.create(<CustomTbody {...props}></CustomTbody>).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('checks with the className of Table body',() => {
        const props = wrapper.find('tbody').props();
        expect(props.className).toEqual('mdc-data-table__content')
    })
    it('should render Custom Table rows cell', () => {
        const customTableRow = wrapper.find(CustomTableRow);
        expect(customTableRow.exists()).toBe(true);    
    })

    it('checks Number of records it is rendering', () => {
        const customTableRow = wrapper.find(CustomTableRow);
        expect(customTableRow).toHaveLength(4);    
    })

   
    
})