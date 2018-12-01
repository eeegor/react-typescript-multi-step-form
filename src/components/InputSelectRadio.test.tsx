import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { InputSelectRadio } from './InputSelectRadio';
import { mount } from 'enzyme';

describe('InputSelectRadio', () => {
	const callback = jest.fn();
	const testData = {
		id: 'name',
		name: 'name',
		label: 'Your Name',
		values: ['one', 'two'],
		onChange: callback,
	};

	it('renders markup correctly', () => {
		const component = <InputSelectRadio {...testData} />;
		const tree = renderer.create(component).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should adopt a valid status attribute', () => {
		const status = 'danger';
		const wrapper = mount(<InputSelectRadio status={status} {...testData} />);
		expect(wrapper.find('.input-select').hasClass('input-select--danger')).toEqual(true);
	});

	it('should adopt a valid info attribute', () => {
		const info = 'test';
		const wrapper = mount(<InputSelectRadio info={info} {...testData} />);
		expect(wrapper.find('.input-select__info').text()).toEqual('test');
	});

	it('change event works', () => {
		const wrapper = mount(<InputSelectRadio {...testData} />);
		wrapper
			.find('input[type="radio"]')
			.first()
			.simulate('change', { target: { checked: true } });
		expect(callback).toHaveBeenCalledTimes(1);
	});
});
