import React from 'react';
import { shallow } from 'enzyme';
import CustomerListItem from '../../components/CustomerListItem';
import { customers } from '../fixtures/customers';

test("renders list item with correct data", () => {
    const wrapper = shallow(<CustomerListItem customer={customers[0]} />);
    expect(wrapper).toMatchSnapshot();
});
