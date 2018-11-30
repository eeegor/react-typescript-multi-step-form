import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { InputSelectRadio } from './InputSelectRadio';
import { mount } from 'enzyme';

describe('InputSelectRadio', () => {
	const callback = jest.fn();
	const testData = {
		id: 'name',
		name: 'name',
		label: 'Your Name',
		items: ['one', 'two'],
		onChange: callback,
	};

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<InputSelectRadio {...testData} />, div);
		ReactDOM.unmountComponentAtNode(div);
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
