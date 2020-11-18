import React from 'react';
import { shallow } from 'enzyme';
import { EditCustomer } from '../../components/EditCustomer';
import { customers } from '../fixtures/customers';

let editCustomer, removeCustomer, wrapper, history;

beforeEach(() => {
    editCustomer = jest.fn();
    removeCustomer = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditCustomer
            history={history}
            editCustomer={editCustomer}
            removeCustomer={removeCustomer}
            customer={customers[1]}
        />)
});

test("renders edit customer component correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("handles edit customer correctly", () => {
    wrapper.find('CustomerForm').prop('onSubmit')(customers[1]);
    expect(history.push).toHaveBeenLastCalledWith('/customer_list');
    expect(editCustomer).toHaveBeenLastCalledWith(customers[1].id, customers[1]);
});

test("handles remove customer correctly", () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/customer_list');
    expect(removeCustomer).toHaveBeenLastCalledWith({ id: customers[1].id });
});

