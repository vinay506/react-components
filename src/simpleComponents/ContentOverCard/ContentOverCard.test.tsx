import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import ContentOverCard from './ContentOverCard';
import 'jest-styled-components'
describe('Content Over Card', () => {
    let wrapper: any;
    let propInfo: any;
    let defaultStyles = {
        backgroundColor: '#dae8ed',
        display: 'flex',
        minHeight: '250px',
        justifyContent: 'center'
    };
    beforeEach(() => {
        propInfo = {
            backgroundColor: 'green'
        };
        wrapper = shallow(<ContentOverCard {...propInfo}><h1 id="innerText">Sample</h1></ContentOverCard>);
    });
    test('Content Over Card Snapshot', () => {
        const instance = renderer.create(<ContentOverCard {...propInfo}><h1>Sample</h1></ContentOverCard>);
        const tree = instance.toJSON();
        expect(tree).toMatchSnapshot();
    })

    test('Content Over Card Element check', () => {
        const elementLength = wrapper.find('#uniqueContentOverride').length;
        expect(elementLength).toEqual(1);
    })

    // Default style Validations
    test('Content Over Card Default Background Validation', () => {
        const instance = renderer.create(<ContentOverCard {...propInfo}><h1>Sample</h1></ContentOverCard>);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.backgroundColor);
    })

    test('Content Over Card Default display Validation', () => {
        const instance = renderer.create(<ContentOverCard {...propInfo}><h1>Sample</h1></ContentOverCard>);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.display);
    })

    test('Content Over Card Default Min Height Validation', () => {
        const instance = renderer.create(<ContentOverCard {...propInfo}><h1>Sample</h1></ContentOverCard>);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.minHeight);
    })

    test('Content Over Card Default Justify Content Validation', () => {
        const instance = renderer.create(<ContentOverCard {...propInfo}><h1>Sample</h1></ContentOverCard>);
        const tree = instance.toJSON();
        expect(tree).toHaveStyleRule(defaultStyles.justifyContent);
    })

    // Props Validation
    test('Content Over Card Inner Elements check', () => {
        const children = renderer.create(<ContentOverCard {...propInfo}><h1>Sample</h1></ContentOverCard>).toJSON()?.children;
        if (children && children.length > 0) {
            expect(children[0]?.type).toEqual('h1');
            expect(children[0].children[0]).toEqual('Sample');
        }
    })

})