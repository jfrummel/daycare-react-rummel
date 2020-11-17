import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../../components/Nav'

test("renders nav componet", () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper).toMatchSnapshot();
});