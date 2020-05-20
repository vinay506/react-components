import React from 'react';
import { shallow } from 'enzyme';
import CommentsCard from './commentCard';
import { RoundedBox, TextSecondary,CommentIcon,NameWithSubText } from '../../simpleComponents';
import renderer from 'react-test-renderer'

describe('<Comments card>', function () {
    let wrapper: any;
    let props: any;
    beforeEach(() => {
        props = {
            avatar: {
                styles: {
                    height: '30px',
                    width: '30px',
                    marginBottom: '20px',
                    marginRight: '10px'
                }
            },
            secondaryText: { text: `JEE Ready has been helped me so much in my preparation. I practiced all the questions, which were also good and in the right difficulty! I was able to do massively well in JEE` },
            nameInfo: {
                name: 'Asha Sharma',
                subText: '60 AIR'
            }
        };
        wrapper = shallow(<CommentsCard {...props}></CommentsCard>);
    })


    // Snapshot test
    it('comments card snapshot', () => {
        const tree = renderer.create(<CommentsCard {...props}></CommentsCard>).toJSON()
        expect(tree).toMatchSnapshot()
    })

    
    it('renders the RoundedBox component', () => {
        expect(wrapper.find(RoundedBox).length).toBe(1);
    });
    it('renders the Comment Icon component', () => {
        expect(wrapper.find(CommentIcon).length).toBe(1);
    });
    it('renders the TextSecondary component', () => {
        expect(wrapper.find(TextSecondary).length).toBe(1);
    });

    it('renders the Name With Sub Text component', () => {
        expect(wrapper.find(NameWithSubText).length).toBe(1);
    });

    it('renders the matching primary text', () => {
        const eleList = wrapper.find(TextSecondary)
        if (eleList) {
            const text = eleList.dive().text();
            expect(text).toEqual(props.secondaryText.text);
        } else {
            expect(true).toBe(false)
        }
    });
})