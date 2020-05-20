import React from 'react';
import { shallow } from 'enzyme';
import NameWithSubText from './NameWithSubText';
import renderer from 'react-test-renderer'
import 'jest-styled-components'


describe('<Name with subText>', function () {
    let wrapper:any;
    let props:any;
    beforeEach(() => {
        props = {
            nameInfo: {
                name: 'Asha Sharma',
                subText: '60 AIR'
            }
        };
        wrapper = shallow(<NameWithSubText nameInfo={props.nameInfo} ></NameWithSubText>);
    });

    // Snapshot test
    it('Name with subtext snapshot', () => {
        const tree = renderer.create(<NameWithSubText nameInfo={props.nameInfo}></NameWithSubText>).toJSON()
        expect(tree).toMatchSnapshot(`
        .c0 {
            color:#aecbfa;
            font-size:12px;
        }
        <div className='sc-fzozJi ictDee'
        >
            <div className="nameText">Asha Sharma</div>
            <div className="subText">60 AIR</div>
        </div>`)
    })

    it('renders Text of Name', () => {
        const nameText = wrapper.find('.nameText').text();
        expect(nameText).toEqual(props.nameInfo.name);
    });

    it('renders Sub Text of Name', () => {
        const nameText = wrapper.find('.subText').text();
        expect(nameText).toEqual(props.nameInfo.subText);
    });
})