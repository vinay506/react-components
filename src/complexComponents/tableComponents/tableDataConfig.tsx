 import React from 'react';
import {TextWithTooltip} from '../../compoundComponents';
import {InfoIcon} from '../../simpleComponents';
export const TestTableConfig = {
    rows: [{
      column1:  <TextWithTooltip text='Chapter Test' tooltip={{id:'chapterTest',backgroundColor:'#d8c7c7',textColor:'#000',multiline:true,place:'bottom'}} tooltipText="Chapter Test" ><InfoIcon styles={{width:'20px',height:'15px'}}></InfoIcon></TextWithTooltip>,
      column2: 'Selected Chapters (30)',
      column3: 'All Chapters (91)',
      column4: 'All Chapters (91)'
    },{
      column1: <TextWithTooltip text='Part Syllabus Test'  tooltip={{id:'partSyllabusTest',backgroundColor:'#d8c7c7',textColor:'#000',multiline:true,place:'bottom'}} tooltipText="Part Syllabus Test" ><InfoIcon styles={{width:'20px',height:'15px'}}></InfoIcon></TextWithTooltip>, 
      column2: '3',
      column3: '20', 
      column4: '20'
    }, {
      column1:  <TextWithTooltip text='Full Syllabus Test'  tooltip={{id:'fullSyllabusTest',backgroundColor:'#d8c7c7',textColor:'#000',multiline:true,place:'bottom'}} tooltipText="Full Syllabus Test"><InfoIcon styles={{width:'20px',height:'15px'}}></InfoIcon></TextWithTooltip>,
      column2: '3',
      column3: '6',
      column4: '6'
    }, {
      column1: <TextWithTooltip text='Past Year Papers'  tooltip={{id:'pastYearPapers',backgroundColor:'#d8c7c7',textColor:'#000',multiline:true,place:'bottom'}} tooltipText="Past Year Papers"><InfoIcon styles={{width:'20px',height:'15px'}}></InfoIcon></TextWithTooltip>, 
      column2: '20',
      column3: '20',
      column4: '20'
    }]
  }

  export const LearnTableConfig = {
    rows: [{
      column1: <TextWithTooltip text='Practice'  tooltip={{id:'Practice',backgroundColor:'#d8c7c7',textColor:'#000',multiline:true,place:'bottom'}} tooltipText="Practice" ><InfoIcon styles={{width:'20px',height:'15px'}}></InfoIcon></TextWithTooltip>, 
      column2: 'Selected chapter-level practice (500 questions)',
      column3: 'Full chapter-level practice (30,000 questions)',
      column4: 'Full chapter-level practice (30,000 questions)'
    },{
      column1: <TextWithTooltip text='Todays Digest Class11'  tooltip={{id:'TdClass11',backgroundColor:'#d8c7c7',textColor:'#000',multiline:true,place:'bottom'}} tooltipText="Todays Digest Class11" ><InfoIcon styles={{width:'20px',height:'15px'}}></InfoIcon></TextWithTooltip>, 
      column2: '60 artifacts',
      column3: '365 artifacts',
      column4: '365 artifacts'
    }, {
      column1: <TextWithTooltip text='Todays Digest Class12'  tooltip={{id:'TdClass12',backgroundColor:'#d8c7c7',textColor:'#000',multiline:true,place:'bottom'}} tooltipText="Todays Digest Class12" ><InfoIcon styles={{width:'20px',height:'15px'}}></InfoIcon></TextWithTooltip>, 
      column2: '',
      column3: '',
      column4: '365 artifacts'
    }]
  }

  export const AllIndiaMockTestConfig = {
    rows: [{
      column1: <TextWithTooltip text='Monthly Tests Class11'  tooltip={{id:'MTClass11',backgroundColor:'#d8c7c7',textColor:'#000',multiline:true,place:'bottom'}} tooltipText="Monthly Tests Class11" ><InfoIcon styles={{width:'20px',height:'15px'}}></InfoIcon></TextWithTooltip>, 
      column2: '',
      column3: '8',
      column4: '8'
    },{
      column1: <TextWithTooltip text='Monthly Tests Class12'  tooltip={{id:'MTClass12',backgroundColor:'#d8c7c7',textColor:'#000',multiline:true,place:'bottom'}} tooltipText="Monthly Tests Class12" ><InfoIcon styles={{width:'20px',height:'15px'}}></InfoIcon></TextWithTooltip>, 
      column2: '',
      column3: '',
      column4: '8'
    }, {
      column1: <TextWithTooltip text='Amazon All India Mock Test Series for class 12'  tooltip={{id:'amazonAlIndiaMockTestSeries',backgroundColor:'#d8c7c7',textColor:'#000',multiline:true,place:'bottom'}} tooltipText="Amazon All India Mock Test Series for class 12" ><InfoIcon styles={{width:'20px',height:'15px'}}></InfoIcon></TextWithTooltip>, 
      column2: '2 Full Tests',
      column3: '',
      column4: '15 Part Tests,6 Full Tests'
    }]
  }