import React from 'react';
import { shallow } from 'enzyme';
import About from '../../components/About';

test("renders about page", () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
});