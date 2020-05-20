import React from 'react';
import { shallow } from 'enzyme';
import PaymentCard from './paymentCard';
import { RoundedBox, TextPrimary, TextSecondary } from '../../simpleComponents';
import renderer from 'react-test-renderer'

describe('<payment card>', function () {
    let wrapper:any;
    let props:any;
    beforeEach(() => {
        props = {
            avatar: {
                styles: {
                    height: '40px',
                    width: '40px',
                    marginBottom: '20px'
                }
            },
            primaryText: {
                text: 'Cancel anything with in 15 days...'
            },
            secondaryText: {
                text: `Change your mind? Don't worry, you can cancel your pack anytime with in 15 days and get pull refund*`
            }
        };
        wrapper = shallow(<PaymentCard {...props}></PaymentCard>);
    })


    // Snapshot test
    it('payment card snapshot', () => {
        const tree = renderer.create(<PaymentCard {...props}></PaymentCard>).toJSON()
        expect(tree).toMatchSnapshot()
    })



    it('renders the RoundedBox component', () => {
        expect(wrapper.find(RoundedBox).length).toBe(1);
    });
    it('renders the TextPrimary component', () => {
        expect(wrapper.find(TextPrimary).length).toBe(1);
    });
    it('renders the TextSecondary component', () => {
        expect(wrapper.find(TextSecondary).length).toBe(1);
    });

    it('renders the matching primary text', () => {
        const eleList = wrapper.find(TextPrimary)
        if (eleList) {
            const text = eleList.dive().text();
            expect(text).toEqual(props.primaryText.text);
        } else {
            expect(true).toBe(false)
        }
    });

    it('renders the matching secondary text', () => {
        const eleList = wrapper.find(TextSecondary)
        if (eleList) {
            const text = eleList.dive().text();
            expect(text).toEqual(props.secondaryText.text);
        } else {
            expect(true).toBe(false)
        }
    });
})