import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { IconSuccess } from './IconSuccess';

describe('IconSuccess', () => {
	it('renders markup correctly', () => {
		const wrapper = <IconSuccess id="next" />;
		const tree = renderer.create(wrapper).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
