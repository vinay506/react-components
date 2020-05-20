import React from 'react';
import {CustomTableComponent} from '../../simpleComponents';

import {TestTableConfig,LearnTableConfig,AllIndiaMockTestConfig} from './tableDataConfig';

const getTestTable = () => {
  const tableStyles = {whiteSpace: 'unset'}
  const tableContext = {margin:'20px'}
  const headerColumns = [{title:"Tests",styles:{fontWeight:'bold',height:'45px'}}];
  const bodyColumns = [{key:"column1",styles:{fontWeight:'bold',height:'45px'}},{key:"column2",styles:{height:'45px'}},
  {key:"column3",styles:{height:'45px'}},{key:"column4",styles:{height:'45px'}}];
  
  return <CustomTableComponent tableContext={tableContext}  tableStyles={tableStyles} headerColumns={headerColumns} bodyColumns={bodyColumns} tableConfig={TestTableConfig}></CustomTableComponent>
}

const getLearningContentTable = () => {
  const tableStyles = {whiteSpace: 'unset'}
  const tableContext = {margin:'20px'}
  const headerColumns = [{title:"Learning Content",styles:{fontWeight:'bold',height:'45px'}}];
  const bodyColumns = [{key:"column1",styles:{fontWeight:'bold',height:'45px'}},{key:"column2",styles:{maxWidth:"200px",height:'45px'}},
  {key:"column3",styles:{maxWidth:"200px",height:'45px'}},{key:"column4",styles:{maxWidth:"200px",height:'45px'}}];
  
  return <CustomTableComponent tableContext={tableContext} tableStyles={tableStyles} headerColumns={headerColumns} bodyColumns={bodyColumns} tableConfig={LearnTableConfig}></CustomTableComponent>
}

const getAllIndiaMockTestTable = () => {
  const tableStyles = {whiteSpace: 'unset'}
  const tableContext = {margin:'20px'}
  const headerColumns = [{title:"All India Mock Tests",styles:{fontWeight:'bold',height:'45px'}}];
  const bodyColumns = [{key:"column1",styles:{fontWeight:'bold',height:'45px'}},{key:"column2",styles:{maxWidth:"200px",height:'45px'}},
  {key:"column3",styles:{maxWidth:"200px",height:'45px'}},{key:"column4",styles:{maxWidth:"200px",height:'45px'}}];
  
  return <CustomTableComponent tableContext={tableContext} tableStyles={tableStyles} headerColumns={headerColumns} bodyColumns={bodyColumns} tableConfig={AllIndiaMockTestConfig}></CustomTableComponent>
}

function Tables() {
  return (
    <div>{ getTestTable() }
    {getLearningContentTable()}
    {getAllIndiaMockTestTable()}
    </div>
    
  );
}

export default Tables;
