import React from 'react';
import { CommentIcon } from '../../index';
import renderer from 'react-test-renderer'
import 'jest-styled-components'


describe('Comment Icon>', function () {
    let props: any;
    let tree: any;
    beforeEach(() => {
        props = {
            styles:{ height: '30px', width: '30px' }
        };
        tree = renderer.create(<CommentIcon {...props}></CommentIcon>).toJSON()
    });

    // Snapshot test
    it('should render', () => {
        expect(tree).toMatchSnapshot()
    })



})