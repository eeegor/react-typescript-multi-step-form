import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { InputGroupSubmit } from './InputGroupSubmit';

describe('InputGroupSubmit', () => {
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
		const component = <InputGroupSubmit {...testData} />;
		const tree = renderer.create(component).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('click event works', () => {
		const wrapper = mount(<InputGroupSubmit {...testData} />);
		wrapper.find('.button').simulate('click');
		expect(callback).toHaveBeenCalledTimes(1);
	});

	it('should adopt a valid `status: danger` attribute', () => {
		const status = 'danger';
		const wrapper = mount(<InputGroupSubmit {...testData} status={status} />);
		expect(wrapper.find('.input-group-submit').hasClass('input-group--danger')).toEqual(true);
	});

	it('should adopt a valid `status: success` attribute', () => {
		const status = 'success';
		const wrapper = mount(<InputGroupSubmit {...testData} status={status} />);
		expect(wrapper.find('.input-group-submit').hasClass('input-group--success')).toEqual(true);
	});

	it('should render default value if no value provided', () => {
		const defaultValue = 'Submit';
		const { value, ...testDataNoValue } = testData;
		const wrapper = mount(<InputGroupSubmit {...testDataNoValue} value={''} />);
		expect(wrapper.find('.button').text()).toEqual(defaultValue);
	});

	it('should render status table with correct number of elements', () => {
		const wrapper = mount(
			<InputGroupSubmit
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
