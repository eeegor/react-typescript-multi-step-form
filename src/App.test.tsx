import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import { mount } from 'enzyme';

describe('App', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	describe('Form Text Fields', () => {
		const testData = [
			{ type: 'text', name: 'name', value: 'Demo' },
			{ type: 'text', name: 'email', value: 'info@example.com' },
			{ type: 'text', name: 'phone', value: '+49 160 3232323' },
			{
				type: 'select-radio',
				name: 'salary',
				value: '1.000 - 2.000',
			},
		];

		testData.forEach((testSet, index) => {
			it(`can change and submit ${testSet.name} input`, () => {
				const nextValue = { target: { value: testSet.value } };
				const wrapper = mount(<App />);
				const formMultiStep = wrapper.find('#form-multi-step--subscribe');
				const formStep = formMultiStep.find(`#form-step-${index + 1}`);
				switch (testSet.type) {
					case 'select-radio':
						const formRadioGroup = formStep.find('.input-select--radio');
						const formSelectRadioInput = formRadioGroup.find('.input-radio').first();
						formSelectRadioInput.simulate('focus');
						formSelectRadioInput.simulate('change', nextValue);
						formRadioGroup.simulate('submit', nextValue);
						break;

					case 'text':
					default:
						const formTextGroup = formStep.find('.input-text');
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
