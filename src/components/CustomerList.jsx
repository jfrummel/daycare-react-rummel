import React from 'react';
import { connect } from 'react-redux';
import { getVisibleCustomers } from '../selectors/customers';
import CustomerListFilters from './CustomerListFilters';
import CustomerListItem from './CustomerListItem';

export const CustomerList = (props) => (
    <div>
        <CustomerListFilters />
        {props.customers.length === 0 ? <h3>No Customers found</h3> :
            <ul>
                {props.customers.map((customer) => {
                    return <CustomerListItem key={customer.id} customer={customer} />
                })}
            </ul>
        }

    </div>
);

const mapStateToProps = (state) => ({
    customers: getVisibleCustomers(state.customers, state.filters)
});

export default connect(mapStateToProps)(CustomerList);