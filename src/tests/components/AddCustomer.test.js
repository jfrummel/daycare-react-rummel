import React from 'react';
import { shallow } from 'enzyme';
import { AddCustomer } from '../../components/AddCustomer';
import { customers } from '../fixtures/customers';

let addCustomer, history, wrapper;

beforeEach(() => {
    addCustomer = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddCustomer buttonText='Add Customer' addCustomer={addCustomer} history={history} />)
});

test("renders add customer page", () => {
    expect(wrapper).toMatchSnapshot();
});

test("handles add customer", () => {
    wrapper.find('CustomerForm').prop('onSubmit')(customers[1]);
    expect(history.push).toHaveBeenLastCalledWith('/customer_list');
    expect(addCustomer).toHaveBeenLastCalledWith(customers[1]);
});