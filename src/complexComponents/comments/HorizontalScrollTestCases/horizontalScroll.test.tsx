import React from 'react';
import { shallow } from 'enzyme';
import Comments from '../commentsComponent';
import { TextPrimary, TextSecondary } from '../../simpleComponents';
import renderer from 'react-test-renderer';
import 'jest-styled-components'
import {CommentsCard} from './../../compoundComponents';

describe('<Horizontal scroll for comments container>', function () {
    let wrapper: any;
    let outerContainer: any;
    let cardsContainer:any;
    beforeEach(() => {

        wrapper = shallow(<Comments></Comments>);
        outerContainer = wrapper.find('.commentsOuterPart');
        const props = outerContainer.props();
        cardsContainer = shallow(props.children[1]);
    });

    // Snapshot test
    it('comments card snapshot', () => {
        const tree = renderer.create(<Comments ></Comments>).toJSON()
        expect(tree).toMatchSnapshot()
    })

   
    it('checks the number of cards rendered', () => {
      
        const cards = cardsContainer.find(CommentsCard);
         expect(cards).toHaveLength(4);
    });

    
})