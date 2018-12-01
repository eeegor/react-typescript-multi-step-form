import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';
import { InputGroupText } from './InputGroupText';
import { mount, shallow } from 'enzyme';

describe('InputGroupText', () => {
	const callback = jest.fn();
	const testData = {
		id: 'name',
		name: 'name',
		label: 'Your Name',
		value: 'Bob',
		onChange: callback,
	};

	it('renders markup correctly', () => {
		const component = <InputGroupText {...testData} />;
		const tree = renderer.create(component).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('change event works', () => {
		const wrapper = mount(<InputGroupText {...testData} />);
		wrapper.find('.input-group__input').simulate('change');
		expect(callback).toHaveBeenCalledTimes(1);
	});

	it('should adopt a valid info attribute', () => {
		const info = 'test';
		const wrapper = mount(<InputGroupText info={info} {...testData} />);
		expect(wrapper.find('.input-group__info').text()).toEqual('test');
	});

	it('should adopt a valid status attribute', () => {
		const status = 'danger';
		const wrapper = mount(<InputGroupText status={status} {...testData} />);
		expect(wrapper.find('.input-group').hasClass('input-group--danger')).toEqual(true);
	});
});