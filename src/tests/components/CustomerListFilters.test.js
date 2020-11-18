import React from 'react';
import { shallow } from 'enzyme';
import { CustomerListFilters } from '../../components/CustomerListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    wrapper = shallow(<CustomerListFilters filters={filters} setTextFilter={setTextFilter} />)
});

test('renders customer list filters component correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('renders customer list filters component correctly with alt filters', () => {
    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot();
});

test('handles set text filter correctly', () => {
    const value = "Lauren";
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
    expect(wrapper).toMatchSnapshot();
});

