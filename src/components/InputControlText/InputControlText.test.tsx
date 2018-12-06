import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { InputControlText } from './InputControlText';

describe('InputControlText', () => {
	const callback = jest.fn();
	const testData = {
		id: 'name',
		name: 'name',
		label: 'Your Name',
		value: 'Bob',
		onChange: callback,
	};

	it('renders markup correctly', () => {
		const component = <InputControlText {...testData} />;
		const tree = renderer.create(component).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('change event works', () => {
		const wrapper = mount(<InputControlText {...testData} />);
		wrapper.find('.input-control__input').simulate('change');
		expect(callback).toHaveBeenCalledTimes(1);
	});

	it('should adopt a valid info attribute', () => {
		const info = 'test';
		const wrapper = mount(<InputControlText info={info} {...testData} />);
		expect(
			wrapper
				.find('.input-control__info')
				.first()
				.text()
		).toEqual('test');
	});

	it('should adopt a valid status attribute', () => {
		const status = 'danger';
		const wrapper = mount(<InputControlText status={status} {...testData} />);
		expect(
			wrapper
				.find('.input-control')
				.last()
				.hasClass('input-control--danger')
		).toEqual(true);
	});
});
