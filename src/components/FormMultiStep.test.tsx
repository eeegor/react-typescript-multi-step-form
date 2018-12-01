import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { FormMultiStep } from './FormMultiStep';

describe('FormMultiStep', () => {
	const callback = jest.fn();
	const testData = {
		1: { type: 'text', id: 'name', name: 'name', label: 'Your full name', value: 'Demo' },
		2: {
			type: 'email',
			id: 'email',
			name: 'email',
			label: 'Your email',
			value: 'info@example.com',
		},
		3: {
			type: 'text',
			id: 'phone',
			name: 'phone',
			label: 'Your phone',
			value: '+49 160 3232323',
		},
		4: {
			type: 'select-radio',
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
	};

	it('renders markup correctly', () => {
		const component = <FormMultiStep formSchema={testData} onChange={callback} />;
		const tree = renderer.create(component).toJSON();
		expect(tree).toMatchSnapshot();
	});

	describe('Form Text Fields', () => {
		const testDataForm = [
			{ type: 'text', name: 'name', value: 'Demo' },
			{ type: 'text', name: 'email', value: 'info@example.com' },
			{ type: 'text', name: 'phone', value: '+49 160 3232323' },
			{
				type: 'select-radio',
				name: 'salary',
				value: '1.000 - 2.000',
			},
		];

		testDataForm.forEach((testSet, index) => {
			it(`can change and submit ${testSet.name} input`, () => {
				const nextValue = { target: { value: testSet.value } };
				const wrapper = mount(<FormMultiStep formSchema={testData} onChange={callback} />);
				const form = wrapper.find(`#form-step-${index + 1}`);
				switch (testSet.type) {
					case 'select-radio':
						const formRadioGroup = form.find('.input-select--radio');
						const formSelectRadioInput = formRadioGroup.find('.input-radio').first();
						formSelectRadioInput.simulate('focus');
						formSelectRadioInput.simulate('change', nextValue);
						formRadioGroup.simulate('submit', nextValue);
						break;

					case 'text':
					default:
						const formTextGroup = form.find('.input-text');
						formTextGroup.simulate('focus');
						formTextGroup.simulate('change', nextValue);
						formTextGroup.simulate('submit', nextValue);
						break;
				}
				const formState = wrapper.state()['form'];
				expect(formState[testSet.name]).toEqual(testSet.value);
			});
		});
	});
});
