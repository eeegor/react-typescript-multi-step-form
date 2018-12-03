import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import { FormMultiStep } from './components/FormMultiStep';
import { mount } from 'enzyme';

describe('App', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	// const callback = jest.fn();
	// const testData = {
	// 	1: { type: 'text', id: 'name', name: 'name', label: 'Your full name', value: 'Demo' },
	// };

	// it('change event works', () => {
	// 	const wrapper = mount(<FormMultiStep id="test-select-radio" formSchema={testData} onChange={callback} />);
	// 	const nextValue = { target: { value: testData[1].value } };
	// 	const form = wrapper.find(`#form-step-1`);
	// 	const formTextGroup = form.find('.input-text');
	// 	formTextGroup.simulate('change', nextValue);
	// 	expect(callback).toHaveBeenCalledTimes(1);
	// 	expect(wrapper.state()['form'][testData[1].name]).toEqual(nextValue.target.value);
	// });

	// it('should go to prev step', () => {
	// 	const testSet = testData[1];
	// 	const nextValue = { target: { value: testSet.value } };
	// 	const wrapper = mount(
	// 		<FormMultiStep id="test-select-radio" formSchema={testData} onChange={callback} />
	// 	);
	// 	const form = wrapper.find(`#form-step-1`);
	// 	const formTextGroup = form.find('.input-text');
	// 	formTextGroup.simulate('focus');
	// 	formTextGroup.simulate('change', nextValue);
	// 	formTextGroup.simulate('submit', nextValue);
	// 	const prev = wrapper.find(`#icon-back`).first();
	// 	prev.simulate('focus');
	// 	prev.simulate('click');
	// 	const state = wrapper.state();
	// 	console.log('state', state);
	// 	expect(state['currentStep']).toEqual(1);
	// });
});
