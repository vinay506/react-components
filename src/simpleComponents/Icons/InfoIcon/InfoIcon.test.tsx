import React from 'react';
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import InfoIcon from './InfoIcon';


describe('Info Icon>', function () {
    let props: any;
    let tree: any;
    beforeEach(() => {
        props = {
            styles:{width:'20px',height:'15px'}
        };
        tree = renderer.create(<InfoIcon {...props}></InfoIcon>).toJSON()
    });

    // Snapshot test
    it('should render', () => {
        expect(tree).toMatchSnapshot()
    })



})