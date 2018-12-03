import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { InputControlRadio } from './InputControlRadio';
import { mount } from 'enzyme';

describe('InputControlRadio', () => {
	const callback = jest.fn();
	const testData = {
		id: 'name',
		name: 'name',
		label: 'Your Name',
		value: 'Bob',
		onChange: callback,
	};

	it('renders markup correctly', () => {
		const component = <InputControlRadio {...testData} />;
		const tree = renderer.create(component).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('change event works', () => {
		const wrapper = mount(<InputControlRadio {...testData} />);
		wrapper.find('.input-control__input').simulate('change');
		expect(callback).toHaveBeenCalledTimes(1);
	});

	it('should adopt a valid info attribute', () => {
		const info = 'test';
		const wrapper = mount(<InputControlRadio info={info} {...testData} />);
		expect(
			wrapper
				.find('.input-control__info')
				.first()
				.text()
		).toEqual(info);
	});
});
