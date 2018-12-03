import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { FormSummary } from './FormSummary';
import { mount } from 'enzyme';

describe('FormSummary', () => {
	const callback = jest.fn();

	it('renders markup correctly', () => {
		const wrapper = <FormSummary gotoStep={callback} formFields={{ name: '' }} />;
		const tree = renderer.create(wrapper).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('click event works', () => {
		const wrapper = mount(<FormSummary gotoStep={callback} formFields={{ name: '' }} />);
		wrapper
			.find('.form-summary__edit')
			.first()
			.simulate('click');
		expect(callback).toHaveBeenCalledTimes(1);
	});

	it('should adopt a label', () => {
		const wrapper = mount(<FormSummary label="hello-label" gotoStep={callback} formFields={{ name: '' }} />);
		expect(wrapper.find('.label')).toHaveLength(1);
	});
});
