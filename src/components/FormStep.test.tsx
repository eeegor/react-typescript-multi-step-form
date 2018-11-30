import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { FormStep } from './FormStep';

describe('FormStep', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<FormStep />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('submit event works', () => {
		const callback = jest.fn();
		const wrapper = mount(<FormStep onSubmit={callback}>Hi</FormStep>);
		wrapper.find('form').simulate('submit');
		expect(callback).toHaveBeenCalledTimes(1);
	});
});
