import React from 'react';
import renderer from 'react-test-renderer';
import { Info } from './Info';
import { mount } from 'enzyme';

describe('Info', () => {
	it('renders markup correctly', () => {
		const wrapper = <Info label="hello" />;
		const tree = renderer.create(wrapper).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should not output a label with empty value', () => {
		const wrapper = mount(<Info label="" />);
		expect(wrapper.find('.label')).toHaveLength(0);
	});
});
