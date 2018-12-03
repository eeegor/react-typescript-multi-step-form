import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { InputGroupSelectRadio } from './InputGroupSelectRadio';

describe('InputGroupSelectRadio', () => {
	const callback = jest.fn();
	const testData = {
		id: 'name',
		name: 'name',
		label: 'Your Name',
		values: ['one', 'two'],
		onChange: callback,
	};

	it('renders markup correctly', () => {
		const component = <InputGroupSelectRadio {...testData} />;
		const tree = renderer.create(component).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should adopt a valid status attribute', () => {
		const status = 'danger';
		const wrapper = mount(<InputGroupSelectRadio status={status} {...testData} />);
		expect(
			wrapper
				.find('.input-group')
				.first()
				.hasClass('input-group--danger')
		).toEqual(true);
	});

	it('should adopt a valid info attribute', () => {
		const info = 'test';
		const wrapper = mount(<InputGroupSelectRadio info={info} {...testData} />);
		expect(
			wrapper
				.find('.input-group__info')
				.first()
				.text()
		).toEqual('test');
	});

	it('change event works', () => {
		const wrapper = mount(<InputGroupSelectRadio {...testData} />);
		wrapper
			.find('input[type="radio"]')
			.first()
			.simulate('change', { target: { checked: true } });
		expect(callback).toHaveBeenCalledTimes(1);
	});
});
