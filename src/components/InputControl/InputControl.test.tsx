import React from 'react';
import renderer from 'react-test-renderer';
import { InputControl } from './InputControl';
import { mount, shallow } from 'enzyme';

describe('InputControl', () => {
	it('renders markup correctly', () => {
		const component = <InputControl id="a-unique-id" />;
		const tree = renderer.create(component).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should adopt a status class from attribute', () => {
		const wrapper = shallow(<InputControl id="a-unique-id" status="success" />);
		expect(wrapper.hasClass('input-control--success')).toEqual(true);
	});

	it('should adopt a valid class if valid', () => {
		const wrapper = shallow(<InputControl id="a-unique-id" valid={true} />);
		expect(wrapper.hasClass('input-control--success')).toEqual(true);
	});

	it('should adopt a status danger class if has errors', () => {
		const wrapper = shallow(<InputControl id="a-unique-id" errors={'Error'} />);
		expect(wrapper.hasClass('input-control--danger')).toEqual(true);
	});

	it('should adopt a required class from attribute', () => {
		const wrapper = shallow(<InputControl id="a-unique-id" required={true} />);
		expect(wrapper.hasClass('input-control--required')).toEqual(true);
	});
});
