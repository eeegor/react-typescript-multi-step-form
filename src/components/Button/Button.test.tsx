import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { Button } from './Button';

describe('Button', () => {
	it('renders markup correctly', () => {
		const wrapper = <Button>Hello</Button>;
		const tree = renderer.create(wrapper).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should adopt a disabled attribute and class', () => {
		const wrapper = shallow(<Button type="disabled">Hello</Button>);
		expect(wrapper.prop('disabled')).toEqual(true);
		expect(wrapper.hasClass('button--disabled')).toEqual(true);
	});

	it('should generate a small button', () => {
		const wrapper = shallow(<Button size="small">Hello</Button>);
		expect(wrapper.hasClass('button--small')).toEqual(true);
	});

	it('should generate a large button', () => {
		const wrapper = shallow(<Button size="large">Hello</Button>);
		expect(wrapper.hasClass('button--large')).toEqual(true);
	});

	it('click event works', () => {
		const callback = jest.fn();
		const wrapper = mount(<Button onClick={callback}>Hi</Button>);
		wrapper.find('button').simulate('click');
		expect(callback).toHaveBeenCalledTimes(1);
	});
});
