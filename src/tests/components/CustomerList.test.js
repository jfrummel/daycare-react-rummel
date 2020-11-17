import React from 'react';
import { shallow } from 'enzyme';
import { CustomerList } from '../../components/CustomerList';
import { customers } from '../fixtures/customers';
import CustomerListItem from '../../components/CustomerListItem';


test("returns customer list with data", () => {
    const wrapper = shallow(<CustomerList customers={customers} />);
    expect(wrapper).toMatchSnapshot();
});

test("renders no customers found with no data", () => {
    const wrapper = shallow(<CustomerList customers={[]} />);
    expect(wrapper).toMatchSnapshot();
});