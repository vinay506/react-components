import React from 'react';
import { shallow } from 'enzyme';
import { DisplayWithFlex, RoundedBox, NameWithSubText } from '../index';
import renderer from 'react-test-renderer'
import 'jest-styled-components'


describe('<Display With Flex >', function () {
    let wrapper: any;
    let props: any;
    let tree: any;
    beforeEach(() => {
        props = {

        };
        tree = renderer.create(<DisplayWithFlex {...props}></DisplayWithFlex>).toJSON()
    });

    // Snapshot test
    it('should render', () => {
        expect(tree).toMatchSnapshot()
    })


    it('checks the broder radius ', () => {
        expect(tree).toHaveStyleRule('display', 'flex')
    });

    it('checks the Childs Count ', () => {
        wrapper = shallow(
            <DisplayWithFlex {...props}>
                <RoundedBox style={{
                    height: '30px',
                    width: '30px',
                    marginBottom: '20px',
                    marginRight: '10px'
                }}>
                </RoundedBox>
                <NameWithSubText nameInfo={{
                    name: 'Asha Sharma',
                    subText: '60 AIR'
                }}>
                </NameWithSubText>

            </DisplayWithFlex>
        );

        const childrenCount = wrapper.children();
        expect(childrenCount).toHaveLength(2)

    })

})