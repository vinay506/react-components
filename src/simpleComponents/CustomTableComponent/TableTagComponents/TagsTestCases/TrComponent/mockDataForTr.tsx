import {TextWithTooltip} from '../../../../../compoundComponents';
import {InfoIcon} from '../../../../index';
import React from 'react';

const headerColumns = [{title:"Tests",styles:{fontWeight:'bold',height:'45px'}}];
const bodyColumns = [{key:"column1",styles:{fontWeight:'bold',height:'45px'}},{key:"column2",styles:{height:'45px'}},
{key:"column3",styles:{height:'45px'}},{key:"column4",styles:{height:'45px'}}];

const record = [{
    column1:  <TextWithTooltip text='Chapter Test' tooltip={{id:'chapterTest',backgroundColor:'#d8c7c7',textColor:'#000',multiline:true,place:'bottom'}} tooltipText="Chapter Test" ><InfoIcon styles={{width:'20px',height:'15px'}}></InfoIcon></TextWithTooltip>,
    column2: 'Selected Chapters (30)',
    column3: 'All Chapters (91)',
    column4: 'All Chapters (91)'
  }]

export {headerColumns,bodyColumns,record}