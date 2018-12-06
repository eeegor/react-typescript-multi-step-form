import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { FormControls } from './FormControls';

describe('FormControls', () => {
	it('renders markup correctly', () => {
		const callback = jest.fn();
		const wrapper = <FormControls maxSteps={3} currentStep={1} onBack={callback} />;
		const tree = renderer.create(wrapper).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('click event works', () => {
		const callback = jest.fn();
		const wrapper = mount(<FormControls maxSteps={3} currentStep={2} onBack={callback} />);
		wrapper.find('.form-controls__back').simulate('click');
		expect(callback).toHaveBeenCalledTimes(1);
	});
});
