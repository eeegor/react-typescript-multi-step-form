import React from 'react';
import renderer from 'react-test-renderer';
import { FormSuccess } from './FormSuccess';
import { mount } from 'enzyme';

describe('FormSuccess', () => {
	const callback = jest.fn();

	it('renders markup correctly', () => {
		const wrapper = <FormSuccess onReset={callback} />;
		const tree = renderer.create(wrapper).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('click event works', () => {
		const wrapper = mount(<FormSuccess onReset={callback} />);
		wrapper
			.find('.form-success__reset')
			.first()
			.simulate('click');
		expect(callback).toHaveBeenCalledTimes(1);
	});
});
