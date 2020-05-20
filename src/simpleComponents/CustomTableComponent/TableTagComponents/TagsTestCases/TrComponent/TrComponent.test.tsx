import React from 'react';
import { shallow } from 'enzyme';
import { CustomTableRow, CustomTdCell, CustomThCell } from '../../index';
import renderer from 'react-test-renderer'
import { bodyColumns, headerColumns,record } from './mockDataForTr'

function getClasses(props: any) {
  let classes = 'rmwc-data-table__row';
  classes = (props.headerRow) ? classes + ' mdc-data-table__header-row' : classes + ' mdc-data-table__row';
  return classes
}

const getCustomTableCells = (row: any) => {
  return (bodyColumns || []).map((column: any, index: number) => {
    return <CustomTdCell style={column.styles} key={'bdcol-' + index}>{row[column.key]}</CustomTdCell>
  })
}

const getCustomTableHeaderCells = () => {
  return (headerColumns || []).map((column: any, index: number) => {
    return <CustomThCell style={column.styles} key={'hdcol-' + index}>{column.title}</CustomThCell>
  })
}


describe('<Custom TR  >', function () {
  let wrapper: any;
  let props: any;
  let tree: any;
  beforeEach(() => {
    props = {}
  });

  // Snapshot test
  it('should render', () => {
    tree = renderer.create(<CustomTableRow {...props}></CustomTableRow>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render Tr', () => {
    wrapper = shallow(<CustomTableRow {...props}></CustomTableRow>)
    const tr = wrapper.find('tr');
    expect(tr.exists()).toBe(true);
  })

})

describe('<Custom TR with header cell', function () {
  let props: any;
  let wrapper: any;
  beforeEach(() => {
    props = {}
    wrapper = shallow(<CustomTableRow headerRow {...props}> {getCustomTableHeaderCells()}</CustomTableRow>)
  });

  // Snapshot test
  it('should render custom rable row with custom header ', () => {
    const tree = renderer.create(<CustomTableRow headerRow {...props}> {getCustomTableHeaderCells()}</CustomTableRow>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render CustomTh cells', () => {
    const tr = wrapper.find('tr');
    const thcells = tr.find(CustomThCell);

    expect(thcells.exists()).toBe(true);
  })

  it('Counts the no of  customThcells', () => {
    const tr = wrapper.find('tr');
    const thcells = tr.find(CustomThCell);
    expect(thcells).toHaveLength(1)
    
  }) 
});


describe('<Custom TR with body cell', function () {
  let props: any;
  let wrapper: any;
  beforeEach(() => {
    props = {}
    wrapper = shallow(<CustomTableRow headerRow {...props}> {getCustomTableCells(record)}</CustomTableRow>)
  });

  // Snapshot test
  it('should render custom rable row with custom td cells', () => {
    const tree = renderer.create(<CustomTableRow headerRow {...props}> {getCustomTableCells(record)}</CustomTableRow>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render CustomTd cells', () => {
    const tr = wrapper.find('tr');
    const tdcells = tr.find(CustomTdCell);
    expect(tdcells.exists()).toBe(true);
  })

  it('Counts the no of customTdcells', () => {
    const tr = wrapper.find('tr');
    const tdcells = tr.find(CustomTdCell);
    expect(tdcells).toHaveLength(4);    
  }) 
});