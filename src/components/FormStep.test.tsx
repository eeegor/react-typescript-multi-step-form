import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { FormStep } from './FormStep';

describe('FormStep', () => {
	const callback = jest.fn();

	it('renders markup correctly', () => {
		const component = <FormStep id="first" onSubmit={callback} />;
		const tree = renderer.create(component).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('submit event works', () => {
		const wrapper = mount(
			<FormStep id="first" onSubmit={callback}>
				Hi
			</FormStep>
		);
		wrapper.find('form').simulate('submit');
		expect(callback).toHaveBeenCalledTimes(1);
	});
});
