import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { InputControlSubmit } from './InputControlSubmit';

describe('InputControlSubmit', () => {
	const callback = jest.fn();
	const testData = {
		id: 'submit',
		name: 'submit',
		label: 'Is this data correct?',
		value: 'Confirm your details',
		info: 'All data will be handled with care',
		onClick: callback,
	};

	it('renders markup correctly', () => {
		const component = <InputControlSubmit {...testData} />;
		const tree = renderer.create(component).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('click event works', () => {
		const wrapper = mount(<InputControlSubmit {...testData} />);
		wrapper.find('.button').simulate('click');
		expect(callback).toHaveBeenCalledTimes(1);
	});

	it('should adopt a valid `status: danger` attribute', () => {
		const status = 'danger';
		const wrapper = mount(<InputControlSubmit {...testData} status={status} />);
		expect(wrapper.find('.input-control-submit').hasClass('input-control--danger')).toEqual(
			true
		);
	});

	it('should adopt a valid `status: success` attribute', () => {
		const status = 'success';
		const wrapper = mount(<InputControlSubmit {...testData} status={status} />);
		expect(wrapper.find('.input-control-submit').hasClass('input-control--success')).toEqual(
			true
		);
	});

	it('should render default value if no value provided', () => {
		const defaultValue = 'Submit';
		const { value, ...testDataNoValue } = testData;
		const wrapper = mount(<InputControlSubmit {...testDataNoValue} value={''} />);
		expect(wrapper.find('.button').text()).toEqual(defaultValue);
	});

	it('should render status table with correct number of elements', () => {
		const wrapper = mount(
			<InputControlSubmit
				{...testData}
				formValues={{
					name: '',
					submit: '',
				}}
			/>
		);
		const table = wrapper.find('.form-summary .table');
		expect(table.length).toEqual(1);
		expect(table.find('.table__row__label').length).toEqual(1);
	});
});
