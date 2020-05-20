import React from 'react';
import { shallow } from 'enzyme';
import { SquareCard, RoundedBox, TextPrimary, TextSecondary } from '../index'
import renderer from 'react-test-renderer'
import 'jest-styled-components'


describe('<Square Card>', function () {
    let wrapper: any;
    let props: any;
    beforeEach(() => {
        props = {
            style: {
                textAlign: 'left'
            }
        };
    });

    // Snapshot test
    it('render Square Card Wrapper', () => {
        const tree = renderer.create(<SquareCard {...props}></SquareCard>).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('should have valid no of childrens in props', () => {
        wrapper = shallow(<SquareCard {...props}>
            <RoundedBox style={{ height: '40px', width: '40px', marginBottom: '20px' }}></RoundedBox>
            <TextPrimary text='Cancel anything with in 15 days...' styles={{ marginBottom: '5%', fontSize: '14px' }}></TextPrimary>
            <TextSecondary text="Change your mind? Don't worry, you can cancel your pack anytime with in 15 days and get pull refund*" styles={{ marginBottom: '5%', fontSize: '12px' }}></TextSecondary>
        </SquareCard>);

        const childrenCount = wrapper.children();
        expect(childrenCount).toHaveLength(3)

    })


})