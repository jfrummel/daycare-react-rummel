import React from 'react';
import CustomerForm from './CustomerForm';
import { connect } from 'react-redux';
import { addCustomer } from '../actions/customers';

const AddCustomer = (props) => (
    <div>
        <h2>Add a new customer</h2>
        <CustomerForm
            buttonText="Add Customer"
            onSubmit={(customer) => {
                props.dispatch(addCustomer(customer));
                props.history.push("/customer_list")
            }}
        />
    </div>
);

export default connect()(AddCustomer);