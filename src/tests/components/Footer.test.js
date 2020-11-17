import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

test("renders footer", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
});