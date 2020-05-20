import React from 'react';
import { shallow } from 'enzyme';
import { RectangleCard, RoundedBox, TextSecondary ,CommentIcon,NameWithSubText,DisplayWithFlex} from '../index'
import renderer from 'react-test-renderer'


describe('<Rectangle Card>', function () {
    let wrapper: any;
    let props: any;
    beforeEach(() => {
        props = {
            secondaryTextStyles :{
                fontWeight: "500", fontSize: "12px",
                marginBottom: '20px',
                marginTop: '15px',
                width: '300px',
                whiteSpace: 'break-spaces'
            },
            secondaryText:{
                text: `JEE Ready has been helped me so much in my preparation. I practiced all the questions, which were also good and in the right difficulty! I was able to do massively well in JEE`
            },
            avatar:{
                styles:{
                    height: '30px',
                    width: '30px',
                    marginBottom: '20px',
                    marginRight:'10px'
                }
            },
            nameInfo:{
                name: 'Asha Sharma',
                subText: '60 AIR'
            }
        };
    });

    // Snapshot test
    it('render Square Card Wrapper', () => {
        const tree = renderer.create(<RectangleCard></RectangleCard>).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('should have valid no of childrens in props', () => {
        wrapper = shallow(
            <RectangleCard>
                <CommentIcon styles={{ height: '30px', width: '30px' }}></CommentIcon>
                <TextSecondary text={props.secondaryText.text} styles={props.secondaryTextStyles}></TextSecondary>
                <DisplayWithFlex>
                    <RoundedBox style={props.avatar.styles}>
                    </RoundedBox>
                    <NameWithSubText nameInfo={props.nameInfo}>
                    </NameWithSubText>
                </DisplayWithFlex>
            </RectangleCard>
        );

        const childrenCount = wrapper.children();
        expect(childrenCount).toHaveLength(3)

    })


})