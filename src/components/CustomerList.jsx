import React from 'react';
import { connect } from 'react-redux';
import { getVisibleCustomers } from '../selectors/customers';
import CustomerListFilters from './CustomerListFilters';
import CustomerListItem from './CustomerListItem';

const CustomerList = (props) => (
    <div>
        <CustomerListFilters />
        <h1>Customer List</h1>
        <ul>
            {props.customers.map((customer) => {
                return <CustomerListItem key={customer.id} customer={customer} />
            })}
        </ul>
    </div>
);

const mapStateToProps = (state) => ({
    customers: getVisibleCustomers(state.customers, state.filters)
});

export default connect(mapStateToProps)(CustomerList);