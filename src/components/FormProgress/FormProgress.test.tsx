import React from 'react';
import renderer from 'react-test-renderer';
import { FormProgress } from './FormProgress';

describe('FormProgress', () => {
	it('renders markup correctly', () => {
		const wrapper = <FormProgress maxSteps={3} currentStep={1} />;
		const tree = renderer.create(wrapper).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
