import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { InputControlSelectRadio } from './InputControlSelectRadio';

describe('InputControlSelectRadio', () => {
	const callback = jest.fn();
	const testData = {
		id: 'name',
		name: 'name',
		label: 'Your Name',
		values: ['one', 'two'],
		onChange: callback,
	};

	it('renders markup correctly', () => {
		const component = <InputControlSelectRadio {...testData} />;
		const tree = renderer.create(component).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should adopt a valid status attribute', () => {
		const status = 'danger';
		const wrapper = mount(<InputControlSelectRadio status={status} {...testData} />);
		expect(
			wrapper
				.find('.input-control')
				.first()
				.hasClass('input-control--danger')
		).toEqual(true);
	});

	it('should adopt a valid info attribute', () => {
		const info = 'test';
		const wrapper = mount(<InputControlSelectRadio info={info} {...testData} />);
		expect(
			wrapper
				.find('.input-control__info')
				.first()
				.text()
		).toEqual('test');
	});

	it('change event works', () => {
		const wrapper = mount(<InputControlSelectRadio {...testData} />);
		wrapper
			.find('input[type="radio"]')
			.first()
			.simulate('change', { target: { checked: true } });
		expect(callback).toHaveBeenCalledTimes(1);
	});
});
