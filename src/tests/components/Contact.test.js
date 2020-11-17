import React from 'react';
import { shallow } from 'enzyme';
import Contact from '../../components/Contact';

test("renders contact page", () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper).toMatchSnapshot();
});