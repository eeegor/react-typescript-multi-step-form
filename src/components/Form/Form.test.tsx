import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Form } from './Form';

describe('Form', () => {
	it('renders markup correctly', () => {
		const wrapper = <Form id="first" />;
		const tree = renderer.create(wrapper).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('submit event works', () => {
		const callback = jest.fn();
		const wrapper = mount(
			<Form id="first" onSubmit={callback}>
				Hi
			</Form>
		);
		wrapper.find('form').simulate('submit');
		expect(callback).toHaveBeenCalledTimes(1);
	});
});
