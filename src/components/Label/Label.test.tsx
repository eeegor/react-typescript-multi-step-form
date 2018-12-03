import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Label } from './Label';
import { mount } from 'enzyme';

describe('Label', () => {
	it('renders markup correctly', () => {
		const wrapper = <Label label="hello" />;
		const tree = renderer.create(wrapper).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should not output a label with empty value', () => {
		const wrapper = mount(<Label label="" />);
		expect(wrapper.find('.label')).toHaveLength(0);
	});
});
