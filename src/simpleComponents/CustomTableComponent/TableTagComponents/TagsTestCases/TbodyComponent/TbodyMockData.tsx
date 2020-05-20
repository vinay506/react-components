import React from 'react';
import { TextWithTooltip } from '../../../../../compoundComponents';
import { InfoIcon } from '../../../../index';


const rows = [{
    column1: <TextWithTooltip text='Chapter Test' tooltip={{ id: 'chapterTest', backgroundColor: '#d8c7c7', textColor: '#000', multiline: true, place: 'bottom' }} tooltipText="Chapter Test" ><InfoIcon styles={{ width: '20px', height: '15px' }}></InfoIcon></TextWithTooltip>,
    column2: 'Selected Chapters (30)',
    column3: 'All Chapters (91)',
    column4: 'All Chapters (91)'
}, {
    column1: <TextWithTooltip text='Part Syllabus Test' tooltip={{ id: 'partSyllabusTest', backgroundColor: '#d8c7c7', textColor: '#000', multiline: true, place: 'bottom' }} tooltipText="Part Syllabus Test" ><InfoIcon styles={{ width: '20px', height: '15px' }}></InfoIcon></TextWithTooltip>,
    column2: '3',
    column3: '20',
    column4: '20'
}, {
    column1: <TextWithTooltip text='Full Syllabus Test' tooltip={{ id: 'fullSyllabusTest', backgroundColor: '#d8c7c7', textColor: '#000', multiline: true, place: 'bottom' }} tooltipText="Full Syllabus Test"><InfoIcon styles={{ width: '20px', height: '15px' }}></InfoIcon></TextWithTooltip>,
    column2: '3',
    column3: '6',
    column4: '6'
}, {
    column1: <TextWithTooltip text='Past Year Papers' tooltip={{ id: 'pastYearPapers', backgroundColor: '#d8c7c7', textColor: '#000', multiline: true, place: 'bottom' }} tooltipText="Past Year Papers"><InfoIcon styles={{ width: '20px', height: '15px' }}></InfoIcon></TextWithTooltip>,
    column2: '20',
    column3: '20',
    column4: '20'
}]

const bodyColumns = [{ key: "column1", styles: { fontWeight: 'bold', height: '45px' } }, { key: "column2", styles: { height: '45px' } },
{ key: "column3", styles: { height: '45px' } }, { key: "column4", styles: { height: '45px' } }];

export { rows, bodyColumns }