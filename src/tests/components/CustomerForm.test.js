import React from 'react';
import { shallow } from 'enzyme';
import CustomerForm from '../../components/CustomerForm';
import { customers } from '../fixtures/customers';

test("renders form with default values", () => {
    const wrapper = shallow(<CustomerForm />);
    expect(wrapper).toMatchSnapshot();
});

test("renders form with customer values", () => {
    const wrapper = shallow(<CustomerForm customer={customers[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test("sets error message with invalid form submission", () => {
    const wrapper = shallow(<CustomerForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
});

test("sets state for first name", () => {
    const value = "test";
    const wrapper = shallow(<CustomerForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('firstName')).toBe(value);
});

test("sets state for last name", () => {
    const value = "test last name";
    const wrapper = shallow(<CustomerForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('lastName')).toBe(value);
});

test("sets state for number of children", () => {
    const value = 7;
    const wrapper = shallow(<CustomerForm />)
    wrapper.find('input').at(2).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('numOfChildren')).toBe(value);
});

test("sets state for hourly rate", () => {
    const value = "1.50";
    const wrapper = shallow(<CustomerForm />);
    wrapper.find('input').at(3).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('hourlyRate')).toBe(value);
});

test("does not set state of hourly rate with invalid data", () => {
    const value = "1.2563";
    const wrapper = shallow(<CustomerForm />);
    wrapper.find('input').at(3).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('hourlyRate')).toBe("");
});

test("calls on submit with correct data", () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<CustomerForm customer={customers[1]} onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe("");
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        firstName: customers[1].firstName,
        lastName: customers[1].lastName,
        numOfChildren: customers[1].numOfChildren,
        hourlyRate: customers[1].hourlyRate
    });
});