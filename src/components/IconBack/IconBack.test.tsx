import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { IconBack } from './IconBack';
import { mount } from 'enzyme';

describe('IconBack', () => {
	const callback = jest.fn();

	it('renders markup correctly', () => {
		const wrapper = <IconBack id="next" />;
		const tree = renderer.create(wrapper).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
