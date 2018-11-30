import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Form } from './Form';

describe('Form', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Form />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('submit event works', () => {
		const callback = jest.fn();
		const wrapper = mount(<Form onSubmit={callback}>Hi</Form>);
		wrapper.find('form').simulate('submit');
		expect(callback).toHaveBeenCalledTimes(1);
	});
});
