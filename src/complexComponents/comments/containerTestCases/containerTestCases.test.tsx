import React from 'react';
import { shallow } from 'enzyme';
import Comments from '../commentsComponent';
import { TextPrimary, TextSecondary } from '../../simpleComponents';
import renderer from 'react-test-renderer';
import 'jest-styled-components'
import {CommentsCard} from './../../compoundComponents';

describe('<Comments container>', function () {
    let wrapper: any;
    let outerContainer: any
    beforeEach(() => {

        wrapper = shallow(<Comments></Comments>);
        outerContainer = wrapper.find('.commentsOuterPart');
    });

    // Snapshot test
    it('comments card snapshot', () => {
        const tree = renderer.create(<Comments ></Comments>).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('checks the styled component existence as outer container', () => {
        expect(outerContainer.exists()).toBe(true);
    });

    it('checks the background color of outerContainer', () => {
        const tree = renderer.create(<Comments ></Comments>).toJSON()
        expect(tree).toHaveStyleRule('background', '#e8f0fe');
    });

    it('checks children Count of outer Container', () => {
        const props = outerContainer.props();
        expect(props.children).toHaveLength(2)
    });

    it('checks the existence of TextPrimary Header Text', () => {
        const props = outerContainer.props();
        const firstChild = shallow(props.children[0]);
        const textPrimary = firstChild.find(TextPrimary);
        expect(textPrimary.exists()).toBe(true);

    });

    it('checks the content of text primary tag', () => {
        const props = outerContainer.props();
        const firstChild = shallow(props.children[0]);
        const textPrimary = firstChild.find(TextPrimary);
        const text = textPrimary.dive().text();
        expect(text).toEqual('Trusted by 100,000 students in India');

    });

    it('checks the existence of TextSecundary Header Text', () => {
        const props = outerContainer.props();
        const firstChild = shallow(props.children[0]);
        const textPrimary = firstChild.find(TextSecondary);
        expect(textPrimary.exists()).toBe(true);
    });

    it('checks the content of Text secondary', () => {
        const props = outerContainer.props();
        const firstChild = shallow(props.children[0]);
        const textSecondary = firstChild.find(TextSecondary);
        const text = textSecondary.dive().text();
        expect(text).toEqual('Here from our happy customers');
    });
    
})