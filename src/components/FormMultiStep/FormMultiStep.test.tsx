import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { FormMultiStep } from './FormMultiStep';

describe('FormMultiStep', () => {
	const callback = jest.fn();
	const testData = {
		1: {
			type: 'text',
			id: 'name',
			name: 'name',
			label: 'Your full name',
			value: 'Demo',
		},
		2: {
			type: 'email',
			id: 'email',
			name: 'email',
			label: 'Your email',
			value: 'info@example.com',
		},
		3: {
			type: 'radio',
			id: 'salary',
			name: 'salary',
			label: 'Select you salary',
			values: [
				'€ 0 - € 1.000',
				'€ 1.000 - € 2.000',
				'€ 2.000 - € 3.000',
				'€ 3.000 - € 4.000',
				'More then € 4.000',
			],
		},
		4: {
			type: 'submit',
			id: 'submit',
			name: 'submit',
			label: 'Is this data correct?',
		},
	};

	it('renders markup correctly', () => {
		const wrapper = (
			<FormMultiStep
				id="test"
				formSchema={testData}
				onChange={callback}
			/>
		);
		const tree = renderer.create(wrapper).toJSON();
		expect(tree).toMatchSnapshot();
	});

	describe('Form Text Fields', () => {
		it('can change and submit text type input', () => {
			const testSet = testData[1];
			const nextValue = { target: { value: testSet.value } };
			const wrapper = mount(
				<FormMultiStep
					id="test-text"
					formSchema={{ 1: testSet }}
					onChange={callback}
				/>
			);
			const form = wrapper.find(`#form-step-1`);
			const formTextGroup = form.find('.input-text');
			formTextGroup.simulate('focus');
			formTextGroup.simulate('change', nextValue);
			formTextGroup.simulate('submit', nextValue);
			const formState = wrapper.state()['form'];
			expect(formState[testSet.name]).toEqual(testSet.value);
		});

		it('can change and submit email type input', () => {
			const testSet = testData[2];
			const nextValue = { target: { value: testSet.value } };
			const wrapper = mount(
				<FormMultiStep
					id="test-email"
					formSchema={{ 1: testSet }}
					onChange={callback}
				/>
			);
			const form = wrapper.find(`#form-step-1`);
			const formTextGroup = form.find('.input-email');
			formTextGroup.simulate('focus');
			formTextGroup.simulate('change', nextValue);
			formTextGroup.simulate('submit', nextValue);
			const formState = wrapper.state()['form'];
			expect(formState[testSet.name]).toEqual(testSet.value);
		});

		it('can change and submit select-radio type input', () => {
			const testSet = testData[3];
			const nextValue = { target: { value: testSet.values[2] } };
			const wrapper = mount(
				<FormMultiStep
					id="test-select-radio"
					formSchema={{ 1: testSet }}
					onChange={callback}
				/>
			);
			const form = wrapper.find(`#form-step-1`);
			const formRadioGroup = form.find('.input-control-select-radio');
			const formSelectRadioInput = formRadioGroup
				.find('.input-radio')
				.first();
			formSelectRadioInput.simulate('focus');
			formSelectRadioInput.simulate('change', nextValue);
			formRadioGroup.simulate('submit', nextValue);
			const formState = wrapper.state()['form'];
			expect(formState[testSet.name]).toEqual(testSet.values[2]);
		});
	});

	it('should go to next step', () => {
		const testSet = testData[1];
		const nextValue = { target: { value: testSet.value } };
		const wrapper = mount(
			<FormMultiStep
				id="test-select-radio"
				formSchema={testData}
				onChange={callback}
			/>
		);
		const form = wrapper.find(`#form-step-1`);
		const formTextGroup = form.find('.input-text');
		formTextGroup.simulate('focus');
		formTextGroup.simulate('change', nextValue);
		formTextGroup.simulate('submit', nextValue);
		const state = wrapper.state();
		expect(state['currentStep']).toEqual(2);
	});

	it('should update form changes to state', () => {
		const testSet = testData[1];
		const nextValue = { target: { value: testSet.value } };
		const wrapper = mount(
			<FormMultiStep
				id="test-select-radio"
				formSchema={testData}
				onChange={callback}
			/>
		);
		const form = wrapper.find(`#form-step-1`);
		const formTextGroup = form.find('.input-text');
		formTextGroup.simulate('focus');
		formTextGroup.simulate('change', nextValue);
		formTextGroup.simulate('submit', nextValue);
		const prev = wrapper.find(`#icon-back`).first();
		prev.simulate('focus');
		prev.simulate('click');
		const state = wrapper.state();
		expect(state['currentStep']).toEqual(1);
	});

	it('should handleFormComplete', () => {
		const testSet = testData[4];
		const wrapper = mount(
			<FormMultiStep
				id="test-submit"
				formSchema={{ 1: testSet }}
				onChange={callback}
			/>
		);
		const submitGroup = wrapper.find(`.input-control-submit`).first();
		const button = submitGroup.find(`button`).first();
		button.simulate('focus');
		button.simulate('click');
		// expect('#test-submit').toHaveBeenCalledTimes(1);
		expect(wrapper.find('.form-success').length).toEqual(1);
	});
});
