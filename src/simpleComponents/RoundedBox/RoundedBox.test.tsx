import React from 'react';
import { shallow } from 'enzyme';
import RoundedBox from './RoundedBox';
import renderer from 'react-test-renderer'
import 'jest-styled-components'


describe('<Rounded Box>', function () {
    let wrapper:any;
    let props:any;
    let circle:any;
    beforeEach(() => {
        props = {
            style: {
                height: '40px',
                width: '40px',
                marginBottom: '20px'
            }
        };
        wrapper = shallow(<RoundedBox {...props}></RoundedBox>);
        circle = wrapper.dive().find('div');
    });

    // Snapshot test
    it('should render', () => {
        const tree = renderer.create(<RoundedBox {...props}></RoundedBox>).toJSON()
        expect(tree).toMatchSnapshot(`
        .c0 {
              background-color: #bbb;
              border-radius: 50%;
              display: inline-block;
        }
        <div className='sc-AxjAm bfFsoV'
        style={
            className="c0"             
            Object {
                "height": "40px",
                "marginBottom": "20px",
                "width": "40px",
          }
        }></div>`)
    })

    it('renders the Circle Div', () => {
        expect(circle.length).toBe(1);
    });

    it('checks the height', () => {
        expect(circle.props().style.height).toEqual(props.style.height);
    });

    it('checks the width', () => {
        expect(circle.props().style.width).toEqual(props.style.width);
    });

    it('checks the background ', () => {
        const tree = renderer.create(<RoundedBox {...props}></RoundedBox>).toJSON();
        expect(tree).toHaveStyleRule('background-color', '#bbb')
    });

    it('checks the broder radius ', () => {
        const tree = renderer.create(<RoundedBox {...props}></RoundedBox>).toJSON();
        expect(tree).toHaveStyleRule('border-radius', '50%')
    });

})